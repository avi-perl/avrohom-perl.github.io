import React from "react";
import { withRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faComment,
  // faBriefcase,
  // faTools,
  // faCamera,
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import Collapse from "react-bootstrap/Collapse";

import SiteHead from "./SiteHead";
import MiniCard from "./MiniCard";
import Logo from "./Logo";
import CardInfo from "./CardInfo";
import styles from "../styles/Card.module.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContentOpen: (this.props.cardContentOpen ? this.props.cardContentOpen : false),
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <SiteHead />
        <main className={styles.main}>
          <div className="moving-card">
            <MiniCard>
              <div className="row no-gutters">
                <div className={"col-sm-4 " + styles.logoContainer}>
                  <Logo />
                </div>
                <div className="col-sm-8 ">
                  <div className={styles.cardDetails}>
                    <CardInfo
                      cardContentOpen={this.state.cardContentOpen}
                      hideContactInfo={this.props.hideContactInfo}
                    />
                  </div>
                </div>
              </div>
              <Collapse in={this.state.cardContentOpen}>
                <div className={styles.cardContent}>
                  <div className="p-2">{this.props.children}</div>
                </div>
              </Collapse>
            </MiniCard>
            <div className={styles.cardFooter}>
              <div
                className={styles.menuIcon}
                onClick={() =>
                  this.setState({
                    cardContentOpen: !this.state.cardContentOpen,
                  })
                }
                aria-controls="example-collapse-text"
                aria-expanded={this.state.cardContentOpen}
              >
                {(() => {
                  if (!this.props.disableContentToggle) {
                    return this.state.cardContentOpen ? (
                      <FontAwesomeIcon icon={faChevronCircleUp} />
                    ) : (
                      <FontAwesomeIcon
                        icon={faChevronCircleDown}
                        className={styles.pulse}
                      />
                    );
                  }
                })()}
                {}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Card);
