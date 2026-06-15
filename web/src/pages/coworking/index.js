import React from "react";
import WorkspacePageShell from "../../workspace/shared/WorkspacePageShell";
import WorkspaceSparkHero from "../../workspace/shared/WorkspaceSparkHero";
import WorkspaceSparkSection from "../../workspace/shared/WorkspaceSparkSection";
import WorkspaceMembershipBand from "../../workspace/shared/WorkspaceMembershipBand";
import WorkspaceSparkAmenities from "../../workspace/shared/WorkspaceSparkAmenities";
import WorkspaceSparkContact from "../../workspace/shared/WorkspaceSparkContact";
import { WORKSPACE_CTAS } from "../../workspace/constants/ctaPlaceholders";
import * as styles from "../../workspace/shared/workspaceShared.module.scss";

const PLANS = [
  {
    title: "Coworking Membership",
    price: "$199 / month",
    body: "Perfect for remote workers, freelancers, and founders looking for a professional workspace and a collaborative community to grow with.",
    cta: WORKSPACE_CTAS.bookTour,
  },
];

const CoworkingPage = () => (
  <WorkspacePageShell>
    <WorkspaceSparkHero
      eyebrow="Coworking"
      title="Convenience. Community. Coworking."
      lead="Open desk memberships and day passes for founders, freelancers, and remote teams at Awesome Inc."
      primaryCta={WORKSPACE_CTAS.buyDayPass}
      secondaryCta={WORKSPACE_CTAS.bookTour}
    />

    <WorkspaceSparkSection
      variant="light"
      eyebrow="For Every Stage of Growth"
      title="Membership"
      lead="Coworking at Awesome Inc emphasizes connection — a vibrant space where ideas flourish and entrepreneurs meet."
    >
      <div className={styles.membershipStack}>
        {PLANS.map((plan) => (
          <WorkspaceMembershipBand
            key={plan.title}
            eyebrow={plan.eyebrow}
            title={plan.title}
            price={plan.price}
            body={plan.body}
            cta={plan.cta}
          />
        ))}
      </div>
    </WorkspaceSparkSection>

    <WorkspaceSparkAmenities />
    <WorkspaceSparkContact />
  </WorkspacePageShell>
);

export default CoworkingPage;
