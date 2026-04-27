import {
  Component,
  type ErrorInfo,
  type ReactNode,
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";

const HeroScene = lazy(() =>
  import("./HeroScene").then((m) => ({ default: m.HeroScene })),
);

/* ------------------------------------------------------------------ */
/* Global WebGL error suppressor — installed at module load            */
/* ------------------------------------------------------------------ */

const isWebGLErrorMessage = (msg: unknown): boolean => {
  if (typeof msg !== "string") return false;
  return (
    msg.includes("WebGL") ||
    msg.includes("WEBGL") ||
    msg.includes("Error creating WebGL context") ||
    msg.includes("BindToCurrentSequence")
  );
};

const installSuppressor = (() => {
  let installed = false;
  return () => {
    if (installed) return;
    if (typeof window === "undefined") return;
    installed = true;

    window.addEventListener(
      "error",
      (event: ErrorEvent) => {
        const msg = event.message ?? (event.error?.message as string | undefined);
        if (isWebGLErrorMessage(msg)) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      },
      true,
    );
    window.addEventListener(
      "unhandledrejection",
      (event: PromiseRejectionEvent) => {
        const reason: unknown = event.reason;
        const msg =
          reason instanceof Error
            ? reason.message
            : typeof reason === "string"
              ? reason
              : "";
        if (isWebGLErrorMessage(msg)) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      },
      true,
    );
  };
})();

// Run immediately at module evaluation, before any component renders.
installSuppressor();

/* ------------------------------------------------------------------ */
/* React error boundary fallback                                       */
/* ------------------------------------------------------------------ */

type State = { hasError: boolean };

class WebGLBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(): State {
    return { hasError: true };
  }
  componentDidCatch(_err: Error, _info: ErrorInfo) {
    /* swallow */
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

/* ------------------------------------------------------------------ */
/* Strict WebGL probe                                                  */
/* ------------------------------------------------------------------ */

function probeWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return false;
    const version = gl.getParameter(gl.VERSION);
    const renderer = gl.getParameter(gl.RENDERER);
    if (typeof version !== "string" || version.length === 0) return false;
    if (typeof renderer !== "string" || renderer.length === 0) return false;
    const lose = gl.getExtension("WEBGL_lose_context");
    if (lose) lose.loseContext();
    return true;
  } catch {
    return false;
  }
}

/**
 * The Replit workspace renders this app inside a sandboxed iframe where
 * WebGL is unavailable — three.js will throw on every render attempt.
 * We skip 3D entirely whenever we're inside ANY iframe; real visitors on
 * the deployed site load the page top-level and get the full experience.
 */
function isInsideIframe(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.self !== window.top;
  } catch {
    // Cross-origin access throws → we ARE in an iframe.
    return true;
  }
}

/* ------------------------------------------------------------------ */

export function SafeHeroScene() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (isInsideIframe()) return;
    if (!probeWebGL()) return;
    setEnabled(true);
  }, []);

  if (!enabled) return null;

  return (
    <WebGLBoundary>
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
    </WebGLBoundary>
  );
}
