import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLocationDot,
    faSailboat,
    faUmbrellaBeach,
    faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contents}>
                <div className={styles.team_member}>
                    <FontAwesomeIcon
                        icon={faPlaneDeparture}
                        size="2x"
                        className={styles.giticon}
                    />
                    <p>김도헌</p>
                    <a href="https://github.com/returnhakja" target="_blank">
                        GitHub
                    </a>
                </div>
            </div>
            <div>
                <h2 className={styles.title}>
                    <br />
                    Copyright by &copy; BoardProject
                </h2>
            </div>
        </footer>
    );
};

export default Footer;
