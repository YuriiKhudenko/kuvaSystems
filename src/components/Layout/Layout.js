import React from "react";

import NavigationBar from "../../pages/NavigationBar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavigationBar />
      <div className={styles.layoutChildren}>{children}</div>
    </div>
  );
};

export default Layout;
