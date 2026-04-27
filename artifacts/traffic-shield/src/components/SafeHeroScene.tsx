import { Component, type ErrorInfo, type ReactNode, lazy, Suspense } from "react";

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

function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export function SafeHeroScene() {
  if (!isWebGLAvailable()) return null;
  return (
    <WebGLBoundary>
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
    </WebGLBoundary>
  );
}
