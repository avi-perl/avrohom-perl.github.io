import Card from "../Components/Card";

import styles from "../styles/Index.module.css";
import PortfolioInformation from "../Components/PortfolioInformation"

export default function Admin() {
  return (
    <Card>
      <div className={styles.cardHeight}>
        <PortfolioInformation />
      </div>
    </Card>
  );
}
