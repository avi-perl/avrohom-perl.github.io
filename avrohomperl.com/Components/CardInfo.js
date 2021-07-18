import React from "react";
import styles from "../styles/CardInfo.module.css";

import Collapse from "react-bootstrap/Collapse";

class CardInfo extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.name}>Avi Perl</div>
        <div className={styles.occupation}>
          Developer
          <span className={styles.occupation_note}># Current ➔ TransUnion</span>
        </div>
        {(() => {
          if (!this.props.hideContactInfo) {
            return (
              <div className={styles.card_about}>
                <div className={styles.item}>
                  <a href="tel&#58;516&#50;56&#37;393&#55;&#48;">
                    &#53;&#49;6&#46;256&#46;&#57;37&#48;
                  </a>
                  <a href="m&#97;&#105;lt&#111;&#58;in%6&#54;o&#64;avr%&#54;Fh&#37;6Fmperl&#46;c&#111;m">
                    &#105;nfo&#64;a&#118;r&#111;homperl&#46;&#99;om
                  </a>
                </div>
              </div>
            );
          }
        })()}
        <div id="skills" className={styles.skills}>
          <Collapse in={!this.props.cardContentOpen}>
            <span className={styles.value}>
              Python & PHP developer focused on web development, obsessed with
              automation, and passionate about application architecture.
            </span>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default CardInfo;
