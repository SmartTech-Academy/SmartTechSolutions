import Link from "next/link";



const SingleFooter = ({ classOne, title, data }) => {
  return (
    <div className={classOne}>
      <div className="footer-widget">
        <h5 className="ft-title">{title}</h5>
        <ul className="ft-link">
          {data.map((value, innerIndex) => (
            <li key={innerIndex}>
              <Link prefetch={false} href={value.link}>{value.text}</Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default SingleFooter;
