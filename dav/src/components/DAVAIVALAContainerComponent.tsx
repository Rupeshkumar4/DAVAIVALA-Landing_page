import { FunctionComponent } from "react";
import styles from "./DAVAIVALAContainerComponent.module.css";

const DAVAIVALAContainerComponent: FunctionComponent = () => {
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
      <b className={styles.findTheNearestContainer}>
        <span>{`Find the nearest pharmacy with a `}</span>
        <span className={styles.click}>click</span>
        <span> .</span>
      </b>
      <img className={styles.icon} alt="" src="/7680241-3697355-1@2x.png" />
      <div className={styles.connectingPatientsTo}>
        Connecting patients to their local pharmacies and improving their care.
      </div>
    </div>
  );
};

export default DAVAIVALAContainerComponent;
