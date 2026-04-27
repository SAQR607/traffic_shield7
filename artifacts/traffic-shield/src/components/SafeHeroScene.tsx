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

type State = { hasError: boolean };

class WebGLBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(_err: Error, _info: ErrorInfo) {
    // Swallow — fall through to CSS background.
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

/**
 * Strictly verify WebGL works. We not only get a context, we actually
 * read a parameter. Some sandboxed iframes return a context that throws
 * the moment a renderer tries to use it.
 */
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
    // Some broken sandboxes return an empty string for these.
    if (typeof version !== "string" || version.length === 0) return false;
    if (typeof renderer !== "string" || renderer.length === 0) return false;
    // Force-release the context so three.js can have a fresh one.
    const lose = gl.getExtension("WEBGL_lose_context");
    if (lose) lose.loseContext();
    return true;
  } catch {
    return false;
  }
}

/**
 * Silence WebGL-related errors so they don't surface to dev overlays
 * (e.g. inside the Replit workspace iframe, where WebGL is unavailable).
 * This is a no-op for real users since WebGL works for them.
 */
function installWebGLErrorSuppressor() {
  if (typeof window === "undefined") return;
  const isWebGLError = (msg: unknown): boolean => {
    if (typeof msg !== "string") return false;
    return (
      msg.includes("WebGL") ||
      msg.includes("WEBGL") ||
      msg.includes("Error creating WebGL context")
    );
  };

  const onError = (event: ErrorEvent) => {
    if (isWebGLError(event.message)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };
  const onUnhandled = (event: PromiseRejectionEvent) => {
    const reason: unknown = event.reason;
    const msg =
      reason instanceof Error
        ? reason.message
        : typeof reason === "string"
          ? reason
          : "";
    if (isWebGLError(msg)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };

  window.addEventListener("error", onError, true);
  window.addEventListener("unhandledrejection", onUnhandled, true);
}

let suppressorInstalled = false;

export function SafeHeroScene() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!suppressorInstalled) {
      installWebGLErrorSuppressor();
      suppressorInstalled = true;
    }
    // Skip 3D inside the Replit workspace iframe shell.
    const insideReplWorkspace =
      typeof window !== "undefined" &&
      window.location.pathname.startsWith("/__replco");
    if (insideReplWorkspace) return;
    if (probeWebGL()) setEnabled(true);
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
