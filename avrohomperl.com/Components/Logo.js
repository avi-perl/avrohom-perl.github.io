import React from "react";
import styles from "../styles/Logo.module.css";

class Logo extends React.Component {
  render() {
    return (
      <div className="d-none d-sm-block">
        {/* <Image
                    alt="My Logo"
                    className={styles.logo}
                    width="133px"
                    height="133px"
                    src="/../public/logo-small.png"
                  /> */}
        <div className={styles.tmpLogo}>
          <span className={styles.tmpLogoGrey}>&lt;</span>
          <span className={styles.tmpLogoWords}>avi</span>{" "}
          <span className={styles.tmpLogoGrey}>/&gt;</span>
        </div>
      </div>
    );
  }
}

export default Logo;
