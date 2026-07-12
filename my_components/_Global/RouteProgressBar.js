import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

/**
 * Thin blue trickle bar pinned to the top of the viewport during route
 * changes — mirrors the classic top-of-page preloader (NProgress-style)
 * but hand-rolled to match --color-primary and to hand off cleanly into
 * RouteTransition's fade/ease-in once the new page is ready.
 */
const RouteProgressBar = () => {
  const router = useRouter();
  const [phase, setPhase] = useState("idle"); // idle | loading | done
  const trickleRef = useRef(null);

  useEffect(() => {
    const clearTrickle = () => {
      if (trickleRef.current) {
        clearInterval(trickleRef.current);
        trickleRef.current = null;
      }
    };

    const start = () => {
      clearTrickle();
      setPhase("loading");
    };

    const finish = () => {
      clearTrickle();
      setPhase("done");
      window.setTimeout(() => setPhase("idle"), 260);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", finish);
    router.events.on("routeChangeError", finish);

    return () => {
      clearTrickle();
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", finish);
      router.events.off("routeChangeError", finish);
    };
  }, [router.events]);

  if (phase === "idle") return null;

  return (
    <div className="rbt-route-progress" aria-hidden="true">
      <span className={`rbt-route-progress__bar rbt-route-progress__bar--${phase}`} />
    </div>
  );
};

export default RouteProgressBar;
