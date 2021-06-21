import React from 'react';
import styles from "../styles/PortfolioInformation.module.css";
import {
    faComment,
    faBriefcase,
    faTools,
    faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactHtmlParser from 'react-html-parser';
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";

class TabContent {
    constructor(
        key = "first",
        icon = <FontAwesomeIcon icon={faBriefcase} />,
        title = "Title goes here",
        content = "<strong>Big</strong> HTML goes here"
    ) {
        this.key = key;
        this.icon = icon;
        this.title = title;
        this.content = content;
    }
}

class MiniNav extends React.Component {
    PortfolioData = [
        new TabContent(
            "contact",
            <FontAwesomeIcon icon={faComment} />,
            "Chat With Me",
            "<p>I'm happy to have a no-pressure conversation, please feel free to reach out with any sort of question.</p>",
        ),
        new TabContent(
            "hire",
            <FontAwesomeIcon icon={faBriefcase} />,
            "Hire Me",
            "<p>Yes, I would love to talk to you about a contracting opportunity! If I am not a match for your project, I'll try to make a referral.</p><h3>Services</h3><p>Website Development • API Development • Web Scraping • Data Manipulation &amp; ETL • Process Automation</p>",
        ),
    ];


    render() {
        return (
            <Row>
                <Col sm={2}>
                    <Nav variant="pills" className={styles.mini_nav + "flex-column"}>
                        {this.PortfolioData.map((data) => (
                            <Nav.Item>
                                <Nav.Link eventKey={data.key} className={styles.PortfolioPill}>
                                    <div className={styles.PortfolioIcon}>{data.icon}</div>
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col sm={10}>
                    <Tab.Content>
                        {this.PortfolioData.map((data) => (
                            <Tab.Pane eventKey={data.key}>
                                <h1>{data.title}</h1>
                                {ReactHtmlParser(data.content)}
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        )
    }
}

export default MiniNav;