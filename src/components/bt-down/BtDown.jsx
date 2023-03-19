import "./bt-down.css";

export const BtDown = ({ link }) => {
  return (
    <>
      <a className="u-bt-down" href={link}>
        <svg
          width="52"
          height="34"
          viewBox="0 0 52 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.2529 32.8398L1.14598 10.4584C-0.381994 8.91142 -0.381994 6.40997 1.14598 4.87948L4.81963 1.16021C6.34761 -0.386738 8.81838 -0.386738 10.3301 1.16021L26 17.0247L41.6699 1.16021C43.1979 -0.386738 45.6686 -0.386738 47.1804 1.16021L50.854 4.87948C52.382 6.42643 52.382 8.92788 50.854 10.4584L28.7471 32.8398C27.2516 34.3867 24.7809 34.3867 23.2529 32.8398Z"
            fill="white"
          />
        </svg>
      </a>
    </>
  );
};
