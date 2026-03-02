import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable on touch devices (mobile/tablet)
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    setEnabled(!isTouch);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    let rafId;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const animate = () => {
      // Smooth follow for ring
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    const down = () => {
      dotRef.current?.classList.add("cc--down");
      ringRef.current?.classList.add("cc--down");
    };

    const up = () => {
      dotRef.current?.classList.remove("cc--down");
      ringRef.current?.classList.remove("cc--down");
    };

    // Hover detection: links/buttons + anything you mark with data-cursor="pointer"
    const setHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        "a, button, [role='button'], [data-cursor='pointer']"
      );

      const enter = () => {
        dotRef.current?.classList.add("cc--hover");
        ringRef.current?.classList.add("cc--hover");
      };
      const leave = () => {
        dotRef.current?.classList.remove("cc--hover");
        ringRef.current?.classList.remove("cc--hover");
      };

      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });

      return () => {
        hoverables.forEach((el) => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
      };
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    const cleanupHover = setHoverListeners();
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      cleanupHover?.();
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="cc-ring" />
      <div ref={dotRef} className="cc-dot" />
    </>
  );
}