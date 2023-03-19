import "./section-tip.css";

export const SectionTip = ({ arr }) => {
  return (
    <div className="c-section-tip-container">
      {arr.map((element) => {
        return (
          <div className="e-section-tip-elements" key={Object.keys(element)}>
            <span className="e-section-tip-elements-key">
              {Object.keys(element)}
            </span>
            <span className="e-section-tip-elements-value">
              {Object.values(element)}
            </span>
          </div>
        );
      })}
    </div>
  );
};
