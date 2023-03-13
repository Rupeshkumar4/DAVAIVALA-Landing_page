import { FunctionComponent } from "react";
import styles from "./DavaivalaCard.module.css";

const DavaivalaCard: FunctionComponent = () => {
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
      <b className={styles.davaiavalaPharmaciesContainer}>
        <span>{`Davaiavala : Pharmacies `}</span>
        <span className={styles.finder}>finder</span>
      </b>
      <div className={styles.davaivalaIsPharmacies}>
        DavaiVala is pharmacies finder app which connects paitents with local
        Pharmacies. They can get know that where there medicine are available
        and at price/discounts. They order and get pickup or get delivered at
        home . At the same time DavaiVala helps chemist with its merchant
        technology to streamline line it's day to operation with its cool
        features.Davaiavala mission is to support local Pharmacies and improve
        Paitents Care
      </div>
    </div>
  );
};

export default DavaivalaCard;
