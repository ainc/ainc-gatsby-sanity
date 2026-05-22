import React, { useState } from "react";
import Thumbnail from "../../images/private-office-thumbnail.png";
import ModalCustom from "../../components/Modal/ModalCustom";
import WorkspaceSparkCta from "./WorkspaceSparkCta";
import { WORKSPACE_CTAS } from "../constants/ctaPlaceholders";
import { FaPlay } from "react-icons/fa";
import * as styles from "./workspaceShared.module.scss";

const VIDEO_EMBED =
  "https://www.youtube.com/embed/QItnXb9IBd8?si=G_JyJeX3rcacXemU";

const WorkspaceVideoStrip = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className={styles.videoStrip}>
        <div className={styles.videoStripInner}>
          <div>
            <span className={styles.eyebrowAccent}>The Building</span>
            <h2 className={styles.sectionTitle}>See the Space</h2>
            <p className={styles.prose}>
              Take a virtual look at Awesome Inc Workspace — open desks, private
              offices, and meeting areas in downtown Lexington.
            </p>
            <WorkspaceSparkCta
              cta={WORKSPACE_CTAS.bookTour}
              variant="primary"
            />
          </div>
          <button
            type="button"
            className={styles.videoThumb}
            onClick={() => setShow(true)}
            aria-label="Play workspace tour video"
          >
            <img src={Thumbnail} alt="" />
            <span className={styles.playBtn} aria-hidden>
              <FaPlay />
            </span>
          </button>
        </div>
      </section>

      <ModalCustom
        lgShow={show}
        hide={() => setShow(false)}
        title="Workspace tour"
        content={
          <div className="ratio ratio-16x9">
            <iframe
              title="Awesome Inc workspace tour"
              src={VIDEO_EMBED}
              allowFullScreen
            />
          </div>
        }
      />
    </>
  );
};

export default WorkspaceVideoStrip;
