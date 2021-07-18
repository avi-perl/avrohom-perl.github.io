// pages/404.js
// export default function Custom404() {
//   return <h1>404 - Page Not Found</h1>;
// }

import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import {
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
// import { github } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tab from "react-bootstrap/Tab";
import Collapse from "react-bootstrap/Collapse";
import Image from "next/image";

import PortfolioInformation from "../Components/PortfolioInformation";
import MiniCard from "../Components/MiniCard";

export default function Home() {
  const router = useRouter();
  const [cardContentOpen, setOpen] = useState(true);

  useEffect(() => {
    // When the name for a tab is passed, default to open.
    // When passing a tab name, explicit instruction to remain closed is required.
    if (
      router.query.tab &&
      router.query.open != "false" &&
      window.paramSet != true
    ) {
      setOpen(true);
      window.paramSet = true; // The expand and contract button will not work without this
    }
  });

  let menuArrow;
  if (!cardContentOpen) {
    menuArrow = <FontAwesomeIcon icon={faChevronCircleDown} className={styles.pulse} />;
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
                  {/* <div className={styles.card_about}>
                    <div className={styles.item}>
                      <a href="tel&#58;516&#50;56&#37;393&#55;&#48;">
                        &#53;&#49;6&#46;256&#46;&#57;37&#48;
                      </a>
                      <a href="m&#97;&#105;lt&#111;&#58;in%6&#54;o&#64;avr%&#54;Fh&#37;6Fmperl&#46;c&#111;m">
                        &#105;nfo&#64;a&#118;r&#111;homperl&#46;&#99;om
                      </a>
                    </div>
                  </div> */}
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
                <div className="p-5 text-center">
                <h1>🤦‍♂️</h1>
                <h2>404 - Page Not Found</h2>
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
