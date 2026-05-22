import React from "react";
import WorkspacePageShell from "../workspace/shared/WorkspacePageShell";
import WorkspaceSparkHero from "../workspace/shared/WorkspaceSparkHero";
import WorkspaceSparkSection from "../workspace/shared/WorkspaceSparkSection";
import WorkspaceSparkAmenities from "../workspace/shared/WorkspaceSparkAmenities";
import WorkspaceSparkContact from "../workspace/shared/WorkspaceSparkContact";
import WorkspaceSparkCta from "../workspace/shared/WorkspaceSparkCta";
import RoomCapacityIcons from "../workspace/shared/RoomCapacityIcons";
import { WORKSPACE_CTAS } from "../workspace/constants/ctaPlaceholders";
import * as styles from "../workspace/shared/workspaceShared.module.scss";

const ROOMS = [
  {
    name: "Thinking Room",
    rate: "From $25 / hour",
    capacitySize: "small",
    capacityLabel: "1–4 people",
    text: "Quiet focus space for calls and small working sessions.",
  },
  {
    name: "Lee Todd Conference Room",
    rate: "From $65 / hour",
    capacitySize: "large",
    capacityLabel: "10-16 people",
    text: "Screen, whiteboard, and video-ready setup for team meetings. All glass and mirrors.",
  },
  {
    name: "350 Conference Room",
    rate: "From $55 / hour",
    capacitySize: "large",
    capacityLabel: "10–16 people",
    text: "Screen, whiteboard, and video-ready setup for team meetings. ",
  },
  {
    name: "Podcasting Room",
    rate: "From $40 / hour",
    capacitySize: "small",
    capacityLabel: "2–4 people",
    text: "Sound-friendly space for recordings and interviews.",
  },
];

const ConferenceRoomsPage = () => (
  <WorkspacePageShell>
    <WorkspaceSparkHero
      eyebrow="Conference + Meeting Rooms"
      title="Book Space by the Hour"
      lead="Reserve thinking rooms, conference suites, and podcast space at Awesome Inc — pay and schedule instantly when Zoho booking is connected."
      primaryCta={WORKSPACE_CTAS.scheduleConferenceRoom}
      secondaryCta={WORKSPACE_CTAS.bookTour}
    />

    <WorkspaceSparkSection
      variant="light"
      eyebrow="Built for Connection"
      title="Rooms & Rates"
      lead="Hourly rates are placeholders. Members receive preferred pricing and booking access."
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

    <WorkspaceSparkAmenities />
    <WorkspaceSparkContact />
  </WorkspacePageShell>
);

export default ConferenceRoomsPage;
