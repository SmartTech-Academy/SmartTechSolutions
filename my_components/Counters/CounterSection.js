import Image from "next/image";

/**
 * Shared photo-backdrop wrapper for the "Our journey toward lasting
 * success" counters — reused on the homepage and the services page so
 * both stay visually in sync from a single background asset.
 */
const CounterSection = ({ image, children }) => {
  return (
    <div className="rbt-counter-bg-wrap" data-sal="fade" data-sal-duration="900">
      <Image
        src={image}
        alt="Our team collaborating in an agile, fast-moving workspace"
        fill
        sizes="100vw"
        className="rbt-counter-bg-wrap__img"
        placeholder="blur"
      />
      <span className="rbt-counter-bg-wrap__overlay" aria-hidden="true" />
      <div className="rbt-counter-bg-wrap__content container">{children}</div>
    </div>
  );
};

export default CounterSection;
