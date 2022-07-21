import React, { useState } from 'react';
import styles from "./Navbar.module.css";

// Images
import logo from "../assets/images/logo-white.svg";
import down from "../assets/images/down-arrow-svgrepo-com.svg";
import Hamburger from "../assets/images/hamburger.svg";
import Cross from "../assets/images/cross.svg";
import LeftArrow from "../assets/images/arrow.svg";

const Navbar = () => {

    const [ open, setOpen ] = useState(false);

    

    return (
        <div>
        <header>
            <div>
                <img className={styles.Logo} src={logo} alt="logo"/>
            </div>

            <nav>
                <ul className={styles.HeaderUl}>
                    <li className={styles.MoreMenu} id="show-product-menu">
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

                    <li className={styles.MoreMenu} id="show-more-menu">
                        <a href="/#">بیش‌تر</a>
                        <img src={down} alt="down-arrow" />
                    </li>

                    <li>
                        <a href="/#">زرین‌پال‌من</a>
                    </li>
                </ul>
            </nav>

            {/* Hamburger Menu */}
            <div>
                
                <img className={styles.HamburgerIcon}
                src={Hamburger}
                alt="hamburger"
                onClick={() => setOpen(false)}
                />
            </div>

           
            <div className={!open ? styles.HamburgerMenu : styles.CloseHamburgerMenu}>

                <div className={styles.CrossIcon}>
                    <img src={Cross} alt="cross-icon"
                    onClick={() => setOpen(true)}
                    />
                </div>


                <div className={styles.HamburgerItems}>    
                    <ul>
                        <li>
                            <a href="/#">تعرفه‌ها</a>
                        </li>
                        <li>
                            <a href="/#">اپلیکیشن</a>
                        </li>
                        <div></div>
                        <li>
                            <a href="/#">سوالات متداول</a>
                        </li>
                        <li>
                            <a href="/#">محصولات</a>
                        </li>
                        <li>
                            <a href="/#">تماس با ما</a>
                        </li>
                    </ul>

                <div className={styles.MoreItems}>
                    <a href="/#">زرین‌پال‌من</a>
                    <img src={LeftArrow} alt="leftarrow" />
                </div>

                </div>
            </div>

        </header>
        <div style={{width:"100vw", height:"2000px", backgroundColor:"red"}}>
            
        </div>
        </div>
        
    );
};

export default Navbar;