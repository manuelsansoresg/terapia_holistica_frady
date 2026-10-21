"use client";
import { useEffect } from "react";

/** Progressive enhancement: content remains visible without JavaScript. */
export function VisualEffects() {
  useEffect(() => {
    const header = document.querySelector(".site-header");
    const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const elements = document.querySelectorAll<HTMLElement>(".section-heading, .intro-art, .benefit-item, .session-story li, .final-art");
    let observer: IntersectionObserver | undefined;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          observer?.unobserve(entry.target);
        }
      }), { threshold: 0.08 });
      elements.forEach(element => {
        if (element.getBoundingClientRect().top > window.innerHeight) {
          element.classList.add("reveal-pending");
          observer?.observe(element);
        }
      });
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
      elements.forEach(element => element.classList.remove("reveal-pending"));
    };
  }, []);
  return null;
}
