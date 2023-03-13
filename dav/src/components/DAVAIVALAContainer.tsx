import { FunctionComponent } from "react";
import styles from "./DAVAIVALAContainer.module.css";

const DAVAIVALAContainer: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.davaivalaText}>
        <b className={styles.davaivala}>DAVAIVALA</b>
        <b className={styles.davaivala1}>DAVAIVALA</b>
        <b className={styles.davaivala2}>DAVAIVALA</b>
        <b className={styles.davaivala3}>DAVAIVALA</b>
        <b className={styles.davaivala4}>DAVAIVALA</b>
      </div>
      <div className={styles.groupItem} />
      <b className={styles.localIsBetterContainer}>
        <span>{`Local is `}</span>
        <span className={styles.better}>better</span>
        <span>.</span>
      </b>
      <div className={styles.davaiavalaIsYourContainer}>
        <p className={styles.davaiavalaIsYour}>
          Davaiavala is your local pharmacy finder and prescription delivery
          service that connects you with the pharmacies closest to you. We help
          save time and money for both patients and pharmacists.
        </p>
      </div>
    </div>
  );
};

export default DAVAIVALAContainer;
