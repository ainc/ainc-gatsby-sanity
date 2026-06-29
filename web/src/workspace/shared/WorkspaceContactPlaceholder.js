import React from "react";
import { Container } from "react-bootstrap";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import Title from "../../components/UI/Title/Title";
import { WORKSPACE_CTAS } from "../constants/ctaPlaceholders";
import * as styles from "./workspaceShared.module.scss";

const WorkspaceContactPlaceholder = () => {
  const contact = WORKSPACE_CTAS.contactUs;

  return (
    <section id="workspace-contact" className={styles.contactSection}>
      <Container>
        <Title
          className={`text-center text-uppercase mb-4 ${styles.sectionTitle}`}
        >
          Contact Us
        </Title>
        <div className={styles.contactPlaceholder}>
          <p className="mb-3">
            Zoho contact form will be embedded here. For now this is a
            placeholder — wire to your Zoho <strong>Contact Us</strong> form
            when ready.
          </p>
          <a href={contact.href}>
            <BrandButton className="text-uppercase">
              {contact.label}
            </BrandButton>
          </a>
          <span className={styles.ctaNote}>{contact.note}</span>
        </div>
      </Container>
    </section>
  );
};

export default WorkspaceContactPlaceholder;
