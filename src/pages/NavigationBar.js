import { NavLink } from "react-router-dom";
import KuvaLogo from "../media/KuvaLogo.png";

import { ReactComponent as HomeIcon } from "../media/home.svg";
import { ReactComponent as AccountIcon } from "../media/account.svg";
import { ReactComponent as SettingsIcon } from "../media/settings.svg";
import { ReactComponent as SupportIcon } from "../media/support.svg";

import styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <div className={styles.navContainer}>
      <img className={styles.logo} src={KuvaLogo} alt="Kuva Logo" />
      <nav className={styles.navLinks}>
        <span className={styles.navItem}>
          <NavLink
            // exact
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            <div className={styles.iconPlaceholder}>
              <HomeIcon />
            </div>
            Home
          </NavLink>
        </span>
        <span className={styles.navItem}>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            <div className={styles.iconPlaceholder}>
              <AccountIcon />
            </div>
            Account
          </NavLink>
        </span>
        <span className={styles.navItem}>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            <div className={styles.iconPlaceholder}>
              <SettingsIcon />
            </div>
            Settings
          </NavLink>
        </span>
        <span className={styles.navItem}>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            <div className={styles.iconPlaceholder}>
              <SupportIcon />
            </div>
            Support
          </NavLink>
        </span>
      </nav>
    </div>
  );
}

export default NavigationBar;
