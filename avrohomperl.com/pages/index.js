import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import {
  faComment,
  faBriefcase,
  faTools,
  faCamera,
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
// import { github } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tab from "react-bootstrap/Tab";
import Collapse from "react-bootstrap/Collapse";

import PortfolioInformation from "../Components/PortfolioInformation";
import MiniCard from "../Components/MiniCard";

export default function Home() {
  const [cardContentOpen, setOpen] = useState(false);
  
  let menuArrow;
  if (!cardContentOpen) {
    menuArrow = <FontAwesomeIcon icon={faChevronCircleDown} />;
  } else {
    menuArrow = <FontAwesomeIcon icon={faChevronCircleUp} />;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Avi Perl</title>
        <meta
          name="description"
          content="Developer portfolio for Avrohom Perl, a Python and PHP developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="moving-card">
          <MiniCard>
            <div className="row no-gutters">
              <div className={"col-sm-4 " + styles.logo}>
                <img
                  alt="My Logo"
                  className={styles.logo}
                  src="logo-small.png"
                />
              </div>
              <div className="col-sm-8">
                <div className={styles.card_details}>
                  <div className={styles.name}>Avi Perl</div>
                  <div className={styles.occupation}>
                    Developer
                    <span className={styles.occupation_note}>
                      # Current ➔ TransUnion
                    </span>
                  </div>
                  <div className={styles.card_about}>
                    <div className={styles.item}>
                    <a href='tel&#58;516&#50;56&#37;393&#55;&#48;'>&#53;&#49;6&#46;256&#46;&#57;37&#48;</a>
                      <a href='m&#97;&#105;lt&#111;&#58;in%6&#54;o&#64;avr%&#54;Fh&#37;6Fmperl&#46;c&#111;m'>&#105;nfo&#64;a&#118;r&#111;homperl&#46;&#99;om</a>
                    </div>
                  </div>
                  <div id="skills" className={styles.skills}>
                    <Collapse in={!cardContentOpen}>
                      <span className={styles.value}>
                        Python & PHP developer focused on web development,
                        obsessed with automation, and passionate about
                        application architecture.
                      </span>
                    </Collapse>
                  </div>
                </div>
              </div>
            </div>
            <Collapse in={cardContentOpen}>
              <div className={styles.card_content}>
                <div className="p-2">
                  <PortfolioInformation />
                </div>
              </div>
            </Collapse>
          </MiniCard>
          <div className={styles.card_footer}>
            <div
              className={styles.menuIcon}
              onClick={() => setOpen(!cardContentOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={cardContentOpen}
            >
              {menuArrow}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
