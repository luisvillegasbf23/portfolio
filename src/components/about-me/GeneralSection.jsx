import { BtDown } from "../bt-down/BtDown";
import { SectionIntro } from "../section-intro/SectionIntro";
import { SectionTip } from "../section-tip/SectionTip";
import "./general-section.css";

export const GeneralSection = ({ section, link, id }) => {
  // const arr = [

  // ]
  return (
    <div className="c-general-section-container" id={id}>
      <SectionIntro section={section} />
      <SectionTip arr={section.tips} />
      <BtDown link={link} />
    </div>
  );
};
