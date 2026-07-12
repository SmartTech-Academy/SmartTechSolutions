import { useEffect } from "react";

/**
 * Marks any <img> in the document with data-gil-loading until it finishes
 * loading, so global-effects.css can shimmer it. Runs once for the whole
 * app in _app.js — pages/components never need to opt in individually.
 */
const GlobalImageLoadingEffect = () => {
  useEffect(() => {
    const seen = new WeakSet();

    const track = (img) => {
      if (seen.has(img)) return;
      seen.add(img);

      if (img.complete && img.naturalWidth > 0) return;

      img.dataset.gilLoading = "1";

      const clear = () => {
        delete img.dataset.gilLoading;
      };

      img.addEventListener("load", clear, { once: true, capture: true });
      img.addEventListener("error", clear, { once: true, capture: true });
    };

    document.querySelectorAll("img").forEach(track);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches?.("img")) track(node);
          node.querySelectorAll?.("img").forEach(track);
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default GlobalImageLoadingEffect;
