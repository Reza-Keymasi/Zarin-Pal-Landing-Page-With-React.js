import React from 'react';
import styles from "./Navbar.module.css";
import logo from "../assets/images/logo-white.svg";
import down from "../assets/images/down-arrow-svgrepo-com.svg";

const Navbar = () => {
    return (
        <div>
        <header>
            <div>
                <img className={styles.Logo} src={logo} alt="logo"/>
            </div>

            <nav>
                <ul className={styles.HeaderUl}>
                    <li className={styles.MoreMenu} id="show-production">
                        <a href="/#">محصولات</a>
                        <img src={down} alt="down-arrow" />
                    </li>
                        
                    <li>
                        <a href="/#">تعرفه‌ها</a>
                    </li>
                        
                    <li>
                    <a href="/#">توسعه‌دهندگان</a>
                    </li>

                    <li>
                        <a href="/#">تماس‌با‌ما</a>
                    </li>

                    <li className={styles.MoreMenu}>
                        <a href="/#">بیش‌تر</a>
                        <img src={down} alt="down-arrow" />
                    </li>

                    <li>
                        <a href="/#">زرین‌پال‌من</a>
                    </li>
                </ul>
            </nav>
        </header>
        <div style={{width:"100vw", height:"2000px", backgroundColor:"red"}}>
            
        </div>
        </div>
        
    );
};

export default Navbar;