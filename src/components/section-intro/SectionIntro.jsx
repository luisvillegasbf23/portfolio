import "./section-intro.css";

export const SectionIntro = ({ section }) => {
  return (
    <div className="c-section-intro-container">
      <h2 className="u-subtitle"> {section.title}</h2>
      <p className="u-text">{section.message}</p>
    </div>
  );
};
