import { useEffect, useRef, useState } from "react";
import "altcha";

import { API_BASE_URL } from "@/helper/api";

/**
 * Self-hosted ALTCHA proof-of-work captcha (https://altcha.org), the same system SmartTech Academy
 * uses. The widget fetches a signed challenge from the backend, solves it in a Web Worker, and
 * reports the solved payload through `onVerified`. The form sends that payload as `altcha`, and
 * the backend verifies it (single-use) before sending any email.
 *
 * Forms re-mount this via `key` after every submit, because each solve can be redeemed once.
 */
const AltchaWidget = ({ onVerified, onReset }) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleStateChange = (e) => {
      const { state, payload } = e.detail || {};
      if (state === "verified" && payload) {
        onVerified?.(payload);
      } else {
        onReset?.();
      }
    };

    el.addEventListener("statechange", handleStateChange);
    return () => el.removeEventListener("statechange", handleStateChange);
  }, [onVerified, onReset, mounted]);

  if (!mounted) return null;

  return (
    <altcha-widget
      ref={ref}
      challenge={`${API_BASE_URL}/altcha/challenge`}
      auto="onload"
      name="altcha"
    />
  );
};

export default AltchaWidget;
