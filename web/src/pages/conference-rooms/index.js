import React from "react";
import WorkspacePageShell from "../../workspace/shared/WorkspacePageShell";
import WorkspaceSparkHero from "../../workspace/shared/WorkspaceSparkHero";
import WorkspaceSparkSection from "../../workspace/shared/WorkspaceSparkSection";
import WorkspaceSparkContact from "../../workspace/shared/WorkspaceSparkContact";
import WorkspaceSparkCta from "../../workspace/shared/WorkspaceSparkCta";
import RoomCapacityIcons from "../../workspace/shared/RoomCapacityIcons";
import { WORKSPACE_CTAS } from "../../workspace/constants/ctaPlaceholders";
import * as styles from "../../workspace/shared/workspaceShared.module.scss";

const ROOMS = [
  {
    name: "Lee Todd Conference Room",
    rate: "$50 / hour",
    capacitySize: "large",
    capacityLabel: "10-16 people",
    text: "Screen, whiteboard, and video-ready setup for team meetings. All glass and mirrors.",
  },
  {
    name: "350 Conference Room",
    rate: "$50 / hour",
    capacitySize: "large",
    capacityLabel: "10–16 people",
    text: "Screen, whiteboard, and video-ready setup for team meetings.",
  },
  {
    name: "344 Upstairs Conference Room",
    rate: "$50 / hour",
    capacitySize: "medium",
    capacityLabel: "6–10 people",
    text: "Upstairs conference room with screen and whiteboard — great for team meetings and client presentations.",
  },
];

const ConferenceRoomsPage = () => (
  <WorkspacePageShell>
    <WorkspaceSparkHero
      eyebrow="Conference + Meeting Rooms"
      title="Book Your Next Meeting Space"
      lead="Reserve conference and meeting rooms at Awesome Inc — pay and schedule instantly online."
      primaryCta={WORKSPACE_CTAS.scheduleConferenceRoom}
      secondaryCta={WORKSPACE_CTAS.bookTour}
    />

    <WorkspaceSparkSection
      variant="light"
      eyebrow="Built for Connection"
      title="Rooms & Rates"
      lead="All rooms are $50 / hour. Members receive preferred pricing and booking access."
    >
      <div className={styles.roomRatesList}>
        {ROOMS.map((room) => (
          <article key={room.name} className={styles.roomRateCard}>
            <RoomCapacityIcons
              size={room.capacitySize}
              label={room.capacityLabel}
            />
            <div className={styles.roomRateDetails}>
              <h3 className={styles.featureRowTitle}>{room.name}</h3>
              <p className={styles.featureRowRate}>{room.rate}</p>
              <p className={styles.featureRowText}>{room.text}</p>
            </div>
            <div className={styles.roomRateCta}>
              <WorkspaceSparkCta
                cta={WORKSPACE_CTAS.scheduleConferenceRoom}
                variant="secondary"
              />
            </div>
          </article>
        ))}
      </div>
    </WorkspaceSparkSection>

    <WorkspaceSparkContact />
  </WorkspacePageShell>
);

export default ConferenceRoomsPage;
