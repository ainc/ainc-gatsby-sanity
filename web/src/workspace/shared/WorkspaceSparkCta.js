import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "gatsby";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import * as styles from "./workspaceShared.module.scss";

const isInternal = (href) => href?.startsWith("/") && !href.startsWith("//");

const VARIANT_BUTTON_CLASS = {
  primary: "",
  secondary: "secondary",
  ghost: "white--dark-text",
  ghostDark: "secondary",
};

const WorkspaceSparkCta = ({ cta, variant = "primary", className = "" }) => {
  // `warm` mounts the iframe (invisibly) so it can start loading before the
  // user opens the modal; `open` controls visibility.
  const [warm, setWarm] = useState(false);
  const [open, setOpen] = useState(false);

  const label = cta.label || cta.ctaLabel;
  const href = cta.href || cta.path;
  const embedUrl = cta.embedUrl;
  const title = cta.modalTitle || label;
  const buttonClass = VARIANT_BUTTON_CLASS[variant] || "";

  // Lock background scroll while the modal is open
  useEffect(() => {
    if (typeof document === "undefined" || !open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const button = (onClick, extraProps = {}) => (
    <BrandButton
      onClick={onClick}
      className={`text-uppercase ${buttonClass} ${className}`.trim()}
      {...extraProps}
    >
      {label}
    </BrandButton>
  );

  const wrap = (node) => (
    <span className={styles.inlineCtaWrap}>
      {node}
      {/* Only show the placeholder note while a real embed/link isn't wired yet */}
      {!embedUrl && cta.note && (
        <span className={styles.ctaNote}>{cta.note}</span>
      )}
    </span>
  );

  // Preferred: open the Zoho embed in a popup modal (with iframe pre-warming)
  if (embedUrl) {
    const startWarming = () => setWarm(true);

    return (
      <>
        {wrap(
          button(
            () => {
              setWarm(true);
              setOpen(true);
            },
            {
              onMouseEnter: startWarming,
              onFocus: startWarming,
              onTouchStart: startWarming,
            },
          ),
        )}
        {(warm || open) &&
          typeof document !== "undefined" &&
          createPortal(
            <div
              className={`${styles.zohoModalRoot} ${
                open ? styles.zohoModalOpen : ""
              }`.trim()}
              aria-hidden={!open}
            >
              <div
                className={styles.zohoModalBackdrop}
                onClick={() => setOpen(false)}
              />
              <div
                className={styles.zohoModalDialog}
                role="dialog"
                aria-modal="true"
                aria-label={title}
              >
                <div className={styles.zohoModalHeader}>
                  <span className={styles.zohoModalTitle}>{title}</span>
                  <button
                    type="button"
                    className={styles.zohoModalClose}
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                </div>
                <iframe
                  src={embedUrl}
                  title={title}
                  className={styles.zohoEmbedFrame}
                  frameBorder="0"
                  allow="payment"
                />
              </div>
            </div>,
            document.body,
          )}
      </>
    );
  }

  if (!href) return wrap(button());

  if (isInternal(href)) {
    return wrap(<Link to={href}>{button()}</Link>);
  }

  return wrap(<a href={href}>{button()}</a>);
};

export default WorkspaceSparkCta;
