import React from "react";
import Layout from "../../../components/Layout/Layout";
import * as styles from "./workspaceShared.module.scss";

const WorkspacePageShell = ({ children }) => (
  <Layout>
    <div className={styles.page}>{children}</div>
  </Layout>
);

export default WorkspacePageShell;
