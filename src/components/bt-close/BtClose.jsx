import "./bt-close.css";

export const BtClose = ({ link }) => {
  return (
    <>
      <a className="u-bt-close" href={link}>
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="14.1422"
            width="20"
            height="4"
            rx="1"
            transform="rotate(-45 0 14.1422)"
            fill="white"
          />
          <rect
            x="2.82837"
            width="20"
            height="4"
            rx="1"
            transform="rotate(45 2.82837 0)"
            fill="white"
          />
        </svg>
      </a>
    </>
  );
};
