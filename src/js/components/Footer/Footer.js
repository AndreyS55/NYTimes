import React from 'react';
import styles from './Footer.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footer__wrapper}>
            <div className={styles.footer__line}></div>
            <div className={styles.footer__copyright}>
                © Copyright 2018
            </div>
        </div>
    </footer>
);

export default Footer;