import { useEffect, useState } from "react";
import { useRouter } from "next/router";

/**
 * Fades the page out on route-change start and back in once the new page
 * has rendered. Hash-only navigation (in-page anchors) never reaches
 * routeChangeStart in Next.js, so it's naturally excluded.
 */
const RouteTransition = ({ children }) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const start = () => setIsTransitioning(true);
    const end = () => setIsTransitioning(false);

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router.events]);

  return (
    <div className={`rbt-route-transition${isTransitioning ? " is-leaving" : ""}`}>
      {children}
    </div>
  );
};

export default RouteTransition;
