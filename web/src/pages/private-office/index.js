import React from "react";
import WorkspacePageShell from "../../workspace/shared/WorkspacePageShell";
import WorkspaceSparkHero from "../../workspace/shared/WorkspaceSparkHero";
import WorkspaceSparkSection from "../../workspace/shared/WorkspaceSparkSection";
import WorkspaceSparkAmenities from "../../workspace/shared/WorkspaceSparkAmenities";
import WorkspaceSparkContact from "../../workspace/shared/WorkspaceSparkContact";
import WorkspaceSparkCta from "../../workspace/shared/WorkspaceSparkCta";
import { WORKSPACE_CTAS } from "../../workspace/constants/ctaPlaceholders";
import { DUMMY_PRIVATE_OFFICES } from "../../workspace/data/dummyPrivateOffices";
import privateOfficeImage from "../../images/workspace/offering-private-office.jpg";
import * as styles from "../../workspace/shared/workspaceShared.module.scss";

const PrivateOfficePage = () => (
  <WorkspacePageShell>
    <WorkspaceSparkHero
      eyebrow="Private Offices"
      title="Your Workspace, Tailored for Focus"
      lead="Lockable offices with 24/7 access, conference privileges, and a downtown Lexington address."
      stats="Sample availability below. Pricing and square footage will be managed in Sanity when the waitlist goes live."
      primaryCta={WORKSPACE_CTAS.joinOfficeWaitlist}
      secondaryCta={WORKSPACE_CTAS.bookTour}
    />

    <WorkspaceSparkSection
      variant="light"
      eyebrow="Space Designed for Growing Teams"
      title="Office Availability"
      lead="Join the waitlist for upcoming suites. Sample data shown until Sanity content is connected."
    >
      <div className={styles.officeGrid}>
        {DUMMY_PRIVATE_OFFICES.map((office) => (
          <article key={office.id} className={styles.officeCard}>
            <h3 className={styles.officeCardName}>{office.name}</h3>
            <p className={styles.officeCardMeta}>
              {office.squareFeet} sq ft · $
              {office.monthlyPrice.toLocaleString()}/ month
            </p>
            <span
              className={
                office.status === "Available Soon"
                  ? styles.statusAvailable
                  : styles.statusBadge
              }
            >
              {office.status}
            </span>
          </article>
        ))}
      </div>
      <div className={styles.ctaRow}>
        <WorkspaceSparkCta
          cta={WORKSPACE_CTAS.joinOfficeWaitlist}
          variant="primary"
        />
      </div>
    </WorkspaceSparkSection>

    <section className={styles.sectionMuted}>
      <div className={styles.sectionInner}>
        <div className={styles.contentSplit}>
          <div className={styles.contentSplitMedia}>
            <img
              src={privateOfficeImage}
              alt="Professionals working in a private office at Awesome Inc Workspace"
            />
          </div>
          <div className={styles.contentSplitBody}>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrowAccent}>What&apos;s Included</span>
              <h2 className={styles.sectionTitleSub}>More Than Four Walls</h2>
            </div>
            <ul className={styles.prose}>
              <li>Private lockable office with dedicated desks</li>
              <li>24/7 secure building access</li>
              <li>Conference and meeting room privileges</li>
              <li>Member events, mentorship, and downtown mailing address</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <WorkspaceSparkAmenities />
    <WorkspaceSparkContact />
  </WorkspacePageShell>
);

export default PrivateOfficePage;
