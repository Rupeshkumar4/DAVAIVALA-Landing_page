import { FunctionComponent } from "react";
import styles from "./DavaivalaSection.module.css";

const DavaivalaSection: FunctionComponent = () => {
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
      <b className={styles.theFutureOfContainer}>
        <span>{`The future of `}</span>
        <span className={styles.pharmacy}>pharmacy</span>
        <span>.</span>
      </b>
      <a className={styles.davaiavalaIsNot} href="/" target="_blank">
        Davaiavala is not just another Pharmacies finder app. It helps
        pharmacist with their daily work, by streamlining the day to operation
        process with its cool features. DavaiVala’s mission is to support local
        pharmacies and improve patient care.
      </a>
    </div>
  );
};

export default DavaivalaSection;
