import React from "react";
import Link from "next/link";
import style from "./header.module.css";
import 'bootstrap/dist/css/bootstrap.css'

export default function Header() {
  return (
    <div className={style.nav}>
      <div
        className={`container-fluid align-items-start ${style.navContainer}`}
      >
        <div className="row align-items-center">
          <div className="col-6 d-flex align-items-center">
            <Link href="/">
              <img
                className={style.logo}
                src="/images/UPPERROOM DALLAS.png"
                id="column"
              />
            </Link>
          </div>
          <div className="col-2 d-flex align-items-center" id="column">
            <Link href="/resources" className={style.navLink}>
              RESOURCES
            </Link>
          </div>
          <div className="col-2 d-flex align-items-center" id="column">
            <Link href="/leaders" className={style.navLink}>
              SERVICE LEADS
            </Link>
          </div>
          <div className="col-2 d-flex align-items-center" id="column">
            <Link
              href="https://www.uprmdallas.org/volunteer"
              className={`${style.getStarted} ${style.navLink}`}
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
