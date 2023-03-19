import { BtClose } from "../bt-close/BtClose";
import { Form } from "../contact-form/Form";
import { SectionIntro } from "../section-intro/SectionIntro";
import "./contact.css";

export const Contact = ({ section, link, id }) => {
  return (
    <div className="c-contact-container" id={id}>
      <BtClose link={link} />
      <SectionIntro section={section} />
      <Form form={section.form} />
    </div>
  );
};
