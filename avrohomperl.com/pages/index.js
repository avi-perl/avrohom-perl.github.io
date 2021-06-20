import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import {
  faComment,
  faBriefcase,
  faTools,
  faCamera,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
// import { github } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Collapse from "react-bootstrap/Collapse";

export default function Home() {
  const [cardContentOpen, setOpen] = useState(false);

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
          <div className={styles.card}>
            <div className="card-body">
              <div className="row">
                <div className="col-4 d-flex justify-content-center">
                  <img
                    alt="My Logo"
                    className={styles.logo}
                    src="logo-small.png"
                  />
                </div>
                <div className="col-8">
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
                        <a className="antiphonespam">516[antiphonespam]9370</a>
                        <a className="antiemailspam">
                          info[antiemailspam]avrohomperl.com
                        </a>
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
            </div>
            <Collapse in={cardContentOpen}>
              <div className={"card-footer " + styles.card_content}>
                <div id="example-collapse-text">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <Row>
                      <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="first">
                              <FontAwesomeIcon icon={faComment} />
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">
                              <FontAwesomeIcon icon={faBriefcase} />
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">
                              <FontAwesomeIcon icon={faTools} />
                            </Nav.Link>
                          </Nav.Item>
                          {/* <Nav.Item>
                        <Nav.Link eventKey="forth">
                          <FontAwesomeIcon icon={github} />
                        </Nav.Link>
                      </Nav.Item> */}
                          <Nav.Item>
                            <Nav.Link eventKey="fifth">
                              <FontAwesomeIcon icon={faCamera} />
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={10}>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <h1>Chat with me</h1>
                            <p>
                              I'm happy to have a no-pressure conversation,
                              please feel free to reach out with any sort of
                              question.
                            </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <h1>Hire Me</h1>
                            <p>
                              Yes, I would love to talk to you about a
                              contracting opportunity! If I am not a match for
                              your project, I'll try to make a referral.
                            </p>
                            <h3>Services</h3>
                            <p>
                              Website Development • API Development • Web
                              Scraping • Data Manipulation & ETL • Process
                              Automation
                            </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <h1>My Toolkit</h1>
                            <div class="row">
                              <div class="col">
                                <h3>What I'm proficient with</h3>
                                <p class="m-0">
                                  PHP • Python • Bash HTML • CSS • JS Django •
                                  Flask • FastAPI Database Design • SQL
                                </p>
                              </div>
                              <div class="col">
                                <h3>What I'm learning</h3>
                                <p class="m-0">AWS Node • React • Vue</p>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="forth">
                            <h1>Chat with me</h1>
                            <p>
                              I'm happy to have a no-pressure conversation,
                              please feel free to reach out with any sort of
                              question.
                            </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="fifth">
                            <h1>Commercial Photography</h1>
                            <p>
                              I am currently limiting my photography services as
                              I focus on my family and software development.
                            </p>
                            <p>
                              Please look up my friends who do amazing work:
                            </p>
                            <a href="http://hudigreenberger.com/" target="none">
                              Hudi Greenberger
                            </a>
                            <br />
                            <a
                              href="https://www.yechielorgel.com/"
                              target="none"
                            >
                              Yechiel Orgel
                            </a>
                            <br />
                            <a
                              href="https://www.ellteephoto.com/"
                              target="none"
                            >
                              Levi Teitlebaum
                            </a>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>
              </div>
            </Collapse>
          </div>
          <div className={styles.card_footer}>
            <div
              className={styles.menuIcon}
              onClick={() => setOpen(!cardContentOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={cardContentOpen}
            >
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
