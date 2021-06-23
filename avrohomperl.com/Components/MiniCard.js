import React from "react";
import styles from "../styles/MiniCard.module.css";

class MiniCard extends React.Component {
  render() {
    return <div className={styles.card}>{this.props.children}</div>;
  }
}

export default MiniCard;
