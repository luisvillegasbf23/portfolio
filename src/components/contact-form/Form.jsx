import { useState } from "react";
import "./form.css";

export const Form = ({ form }) => {
  const [statusMessage, setStatusMessage] = useState(false);
  const [loader, setloader] = useState(false);
  const [statusCode, setStatusCode] = useState("u-success");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendForm = (e) => {
    e.preventDefault();

    setStatusMessage(true);
    setloader(true);
    setStatusCode("u-success");
    setTimeout(() => {
      setloader(false);
    }, 2000);

    if (statusMessage) {
      setTimeout(() => {
        setStatusMessage(false);
      }, 4000);
    }
  };

  return (
    <div className="c-form-container">
      <form onSubmit={sendForm}>
        {form.map((input) => {
          return input.type === "textarea" ? (
            <textarea
              className="c-form-textarea"
              placeholder={input.placeholder}
              name={input.name}
              key={input.name}
              type={input.type}
              onChange={handleChange}
              required
            ></textarea>
          ) : (
            <input
              className="c-form-input"
              placeholder={input.placeholder}
              name={input.name}
              key={input.name}
              type={input.type}
              onChange={handleChange}
              required
            ></input>
          );
        })}
        <button className="c-bt-send-form" type="submit">
          {loader ? <span className="u-loader-form"></span> : "send"}
        </button>
      </form>
      {!loader && statusMessage && (
        <span
          className={`c-form-message ${statusCode ? "u-success" : "u-error"}`}
        >
          sent successfull
        </span>
      )}
    </div>
  );
};
