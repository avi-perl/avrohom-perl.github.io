import { useRouter } from "next/router";

import React from "react";
import styles from "../styles/PortfolioInformation.module.css";
import {
  faComment,
  faBriefcase,
  faCode,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactHtmlParser from "react-html-parser";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";

function PortfolioInformation() {
  const state = [
    {
      key: "contact",
      icon: <FontAwesomeIcon icon={faComment} />,
      title: "Chat With Me",
      content: `<p>
                  I love to talk about programming; I'd be happy to have a commitment-free conversation 🙂. Please reach out with any general questions, requests for help, or to inquire about <a href="/?tab=hire">working with me.</a>
                </p>`,
    },
    {
      key: "hire",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      title: "Hire Me",
      content: `<p>Yes, I would love to talk to you about a contracting opportunity! If I am not a match for your project, I'll try to make a referral.</p>
            <h3>Services</h3>
            <p>Website Development • API Development • Web Scraping • Data Manipulation &amp; ETL • Process Automation</p>`,
    },
    {
      key: "tools",
      icon: <FontAwesomeIcon icon={faCode} />,
      title: "My Toolkit",
      content: `<div class="row">
                        <div class="col">
                            <h3>What I'm proficient with</h3>
                            <p class="m-0">PHP • Python • Bash</p>
                            <hr class="m-0">
                            <p class="m-0">HTML • CSS • JS</p>
                            <hr class="m-0">
                            <p class="m-0">Django • Flask • FastAPI</p>
                            <hr class="m-0">
                            <p class="m-0">Database Design • SQL</p>
                        </div>
                        <div class="col">
                            <h3>What I'm learning</h3>
                            <p class="m-0">AWS • Laravel</p>
                            <hr class="m-0">
                            <p class="m-0">Node • React • Vue</p>
                        </div>
                    </div>`,
    },
    {
      key: "photo",
      icon: <FontAwesomeIcon icon={faCamera} />,
      title: "Commercial Photography",
      content: `<p>
                        I am currently limiting my photography services as I focus on family and
                        software development.
                      </p>
                      <p>For your commercial photography needs, I highly recommend these friends of mine:</p>
                      <a href="http://hudigreenberger.com/" target="none">Hudi G</a>
                      <span style="color: grey">&nbsp&nbsp&nbsp//&nbsp&nbsp&nbsp</span>
                      <a href="https://www.yechielorgel.com/" target="none">Yechiel O</a>
                      <span style="color: grey">&nbsp&nbsp&nbsp//&nbsp&nbsp&nbsp</span>
                      <a href="https://www.ellteephoto.com/" target="none">Levi T</a>`,
    },
  ];

  const router = useRouter();
  var activeKey = router.query.tab;

  // Make sure the tab passed is real
  var valid_tab_keys = [];
  state.forEach((x, i) => valid_tab_keys.push(x.key));
  if (!valid_tab_keys.includes(activeKey)) {
    activeKey = undefined;
  }

  function updateActiveKey(newKey) {
    activeKey = newKey;
    router.push(
      {
        pathname: "/",
        query: { tab: newKey },
      },
      undefined,
      { shallow: true }
    );
  }

  return (
    <Tab.Container activeKey={activeKey} defaultActiveKey={state[0].key}>
      <Row>
        <Col sm={2} className="pb-sm-0 pb-2">
          <Nav variant="pills">
            {state.map((data) => (
              <Nav.Link
                as="btn"
                key={data.key}
                eventKey={data.key}
                className={styles.PortfolioPill}
                onSelect={() => updateActiveKey(data.key)}
              >
                <div className={styles.PortfolioIcon}> {data.icon} </div>
              </Nav.Link>
            ))}
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            {state.map((data) => (
              <Tab.Pane eventKey={data.key} key={data.key}>
                <h1 className="pb-1"> {data.title} </h1>{" "}
                {ReactHtmlParser(data.content)}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default PortfolioInformation;
