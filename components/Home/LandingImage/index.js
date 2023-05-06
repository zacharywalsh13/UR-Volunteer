import React from 'react';
import styles from './LandingImage.module.css';

export default function LandingImage() {
    return(
        <div className={styles.imgContainer}>
            <img src="/Images/Volunteer6-2.jpg" alt="Volunteer" className={styles.landingImage}/>
            <h1 className={styles.imageOverlay}>UPPERROOM <br/> Volunteers </h1>
        </div>
        )
}