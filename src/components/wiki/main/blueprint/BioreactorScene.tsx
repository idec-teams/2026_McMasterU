"use client";

import { useEffect, useRef } from "react";

/**
 * Mounts the three.js bioreactor into a box that fills its parent. three.js
 * is imported lazily inside the effect, so its ~150 KB only downloads in the
 * browser once this component actually mounts — never on the server and never
 * on pages that don't use it.
 */
export function BioreactorScene() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let cleanup = () => {};
    let cancelled = false;
    Promise.all([
      import("three"),
      import("@/components/wiki/main/blueprint/bioreactor-scene"),
    ]).then(([THREE, { mountBioreactor }]) => {
      if (!cancelled) cleanup = mountBioreactor(THREE, el);
    });
    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return <div ref={host} className="absolute inset-0" aria-hidden="true" />;
}
