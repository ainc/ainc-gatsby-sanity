import React from "react";
import WorkspacePageShell from "../../workspace/shared/WorkspacePageShell";
import WorkspaceSparkHero from "../../workspace/shared/WorkspaceSparkHero";
import WorkspaceSparkSection from "../../workspace/shared/WorkspaceSparkSection";
import WorkspaceMembershipBand from "../../workspace/shared/WorkspaceMembershipBand";
import WorkspaceSparkContact from "../../workspace/shared/WorkspaceSparkContact";
import { WORKSPACE_CTAS } from "../../workspace/constants/ctaPlaceholders";
import * as styles from "../../workspace/shared/workspaceShared.module.scss";

const PLANS = [
  {
    title: "Virtual Office / Mailing",
    price: "$50 / month",
    body: "A professional downtown Lexington mailing address and member perks — without a dedicated desk. Great for remote teams and founders who need a local presence. Membership also includes access to our conference rooms.",
    cta: WORKSPACE_CTAS.buyVirtualMembership,
  },
];

const VirtualOfficePage = () => (
  <WorkspacePageShell>
    <WorkspaceSparkHero
      eyebrow="Virtual Office / Mailing"
      title="A Downtown Address, Without the Desk"
      lead="Get a professional Lexington mailing address and member perks — perfect for remote teams and founders who want a local presence."
      primaryCta={WORKSPACE_CTAS.buyVirtualMembership}
      secondaryCta={WORKSPACE_CTAS.bookTour}
    />

    <WorkspaceSparkSection
      variant="light"
      eyebrow="Membership"
      title="Virtual Office Membership"
      lead="A simple way to put your business downtown — keep your mail handled and join the community without renting space."
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

    <WorkspaceSparkContact />
  </WorkspacePageShell>
);

export default VirtualOfficePage;
