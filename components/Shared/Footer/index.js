import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';
// import { LogoInstagram, LogoSnapchat, LogoTwitter, LogoFacebook } from 'react-ionicons';

const footer = () => {
  return (
    <div className={styles.footerBasic}>
      <footer>
        <div className={styles.social}>
          <Link href="https://www.instagram.com/upperroomdallas/?hl=en)">
            {/* <LogoInstagram /> */}
          </Link>
          <Link href="https://twitter.com/upperroomm?lang=en)">
            {/* <LogoTwitter /> */}
          </Link>
          <Link href="https://www.facebook.com/UPPERROOMDALLAS/">
            {/* <LogoFacebook /> */}
          </Link>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link href="/">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/leaders">Leads</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/resources">Resources</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/volunteer">Volunteer</Link>
          </li>
          <li className="list-inline-item">
            <Link href="javascript:void(0)">Privacy Policy</Link>
          </li>
        </ul>
        <p className={styles.copyright}>
          UPPERROOM © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default footer;
