import React from 'react';
import logo from '../../../img/logo.png';
import github from '../../../img/GitHub.png';
import styles from './Header.scss';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.wrapper}>
            <div className={styles.header__logo}>
                <a href="http://localhost:3002/" className={styles.logo}>
                    <img src={logo} alt="logo" className={styles.logo__pic}/>
                </a>
            </div>
            <div className={styles.header__contacts}>
                <div className={styles.developer}>
                    <a href="https://github.com/AndreyS55/NYTimes" className={styles.developer__link}>
                        <span className={styles.developer__linkIcon}>
                            <img src={github} alt="" className={styles.developer__linkIconPic}/>
                        </span>
                        <span className={styles.developer__linkText}>Developer</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
);

export default Header;