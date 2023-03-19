import { useState } from "react";
import "./loader.css";

export const Loader = () => {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 2000);

  return (
    <div className={`c-loader-container ${!show && "u-hide"}`}>
      <span className="loader"></span>
    </div>
  );
};
