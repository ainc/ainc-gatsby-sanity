import React from "react";
import WorkspacePageShell from "../../workspace/shared/WorkspacePageShell";
import WorkspaceSparkHero from "../../workspace/shared/WorkspaceSparkHero";
import WorkspaceSparkSection from "../../workspace/shared/WorkspaceSparkSection";
import WorkspaceSparkContact from "../../workspace/shared/WorkspaceSparkContact";
import WorkspaceSparkCta from "../../workspace/shared/WorkspaceSparkCta";
import RoomCapacityIcons from "../../workspace/shared/RoomCapacityIcons";
import {
  WORKSPACE_CTAS,
  bookingsEmbed,
} from "../../workspace/constants/ctaPlaceholders";
import * as styles from "../../workspace/shared/workspaceShared.module.scss";

// Each room is a resource under the one "Conference Room" Zoho service, but Zoho
// gives every resource its own portal-embed link. Paste each room's resource
// booking ID (the part after `portal-embed#/`) into `bookingId` to open the form
// preset to that room. Until then it falls back to the generic conference booking.
const ROOMS = [
  {
    name: "Lee Todd Conference Room",
    rate: "$50 / hour",
    capacitySize: "large",
    capacityLabel: "10-16 people",
    text: "Screen, whiteboard, and video-ready setup for team meetings. All glass and mirrors.",
    bookingId: "", // TODO: Zoho resource booking ID for Lee Todd
  },
  {
    name: "350 Conference Room",
    rate: "$50 / hour",
    capacitySize: "large",
    capacityLabel: "10–16 people",
    text: "Screen, whiteboard, and video-ready setup for team meetings.",
    bookingId: "", // TODO: Zoho resource booking ID for 350
  },
  {
    name: "344 Upstairs Conference Room",
    rate: "$50 / hour",
    capacitySize: "medium",
    capacityLabel: "6–10 people",
    text: "Upstairs conference room with screen and whiteboard — great for team meetings and client presentations.",
    bookingId: "", // TODO: Zoho resource booking ID for 344 Upstairs
  },
];

// Build a CTA for a specific room: preset embed URL + room-specific modal title,
// falling back to the generic conference-room booking when no room ID is set yet.
const roomCta = (room) => ({
  ...WORKSPACE_CTAS.scheduleConferenceRoom,
  modalTitle: `Schedule the ${room.name}`,
  embedUrl: room.bookingId
    ? bookingsEmbed(room.bookingId)
    : WORKSPACE_CTAS.scheduleConferenceRoom.embedUrl,
});

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
              <WorkspaceSparkCta cta={roomCta(room)} variant="secondary" />
            </div>
          </article>
        ))}
      </div>
    </WorkspaceSparkSection>

    <WorkspaceSparkContact />
  </WorkspacePageShell>
);

export default ConferenceRoomsPage;
