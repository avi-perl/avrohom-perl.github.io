import React from "react";
import { withRouter } from "next/router";

import Card from "../Components/Card";

import styles from "../styles/Index.module.css";
import PortfolioInformation from "../Components/PortfolioInformation"

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cardContentOpen: false,
        };
    }

    render() {
        return (
            <Card cardContentOpen={this.state.cardContentOpen}>
                <div className={styles.cardHeight}>
                    <PortfolioInformation/>
                </div>
            </Card>
        );
    }
}

export default withRouter(Index);
