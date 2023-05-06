import react from "react";
import styles from "./landingLeaderImage.module.css";

export default function LandingImage() {
  return (
    <>
      <div className={`container ${styles.serviceLead}`}>
        <div className="row">
          <div className={styles.leadImg}>
            <img src="/Images/Volunteer8-3.jpg" alt="Volunteer" className={styles.Image} />
            <h1 className={`text-center ${styles.leadImgText}`}>Service Leads</h1>
          </div>
        </div>
      </div>
    </>
  );
}