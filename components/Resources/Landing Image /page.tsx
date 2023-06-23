import react from "react";
import styles from "./landingImage.module.css";

export default function LandingImage() {
  return (
    <>
      <div className={`container ${styles.resources}`}>
        <div className="row">
          <div className={styles.resourceImg}>
            <img src="/Images/Volunteer8-3.jpg" alt="resources" className={styles.Image} />
            <h1 className={`text-center ${styles.resourceImgText}`}>Resources</h1>
          </div>
        </div>
      </div>
    </>
  );
}