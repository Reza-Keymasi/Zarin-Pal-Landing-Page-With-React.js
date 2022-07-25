import React, { useState } from 'react';
import styles from "./Landing.module.css";

// components
import Banner from "./Banner.jsx";
import Cards from "./Cards.jsx";
import ZarinPalOptions from "./ZarinPalOptions.jsx";
import StartBox from "./StartBox.jsx";

// Images
import logo from "../assets/images/logo-white.svg";
import down from "../assets/images/down-arrow-svgrepo-com.svg";
import Hamburger from "../assets/images/hamburger.svg";
import Cross from "../assets/images/cross.svg";
import LeftArrow from "../assets/images/arrow.svg";

const Landing = () => {

    const [ open, setOpen ] = useState(true);
    const [ close, setClose ] = useState(true);
    const [ closeMoreMenu, setCloseMoreMenu ] = useState(true);

 
    return (
        <div>
            <header>
            <div>
                <img className={styles.Logo} src={logo} alt="logo"/>
            </div>

            <nav>
                <ul className={styles.HeaderUl}>
                    <li className={styles.MoreMenu} id={styles.ShowProductMenu}>
                        <div>
                            <a onClick={() => setClose(prevState => !prevState)} 
                                href="/#">محصولات
                            </a>
                            
                            <img src={down} alt="down-arrow" />
                        </div>

                            {/* For DropDowns */}
                        <div className={!close ? styles.ProductMenu : styles.CloseProductMenu}> 
                        
                            <div>

                                <a href="/#">
                                    <p>درگاه‌پرداخت</p>
                                    <p>مهندسی شده برای فروس بیش‌تر</p>
                                </a>
                                

                                <a href="/#">
                                    <p>زرین‌لینک</p>
                                    <p>لینک‌پرداخت‌در‌شبکه‌های‌اجتماعی</p>
                                </a>

                                <a href="/#">
                                    <p>زرین‌پلاس</p>
                                    <p>ابزار‌هوشمند‌سوددهی</p>
                                </a>

                            </div>
                            <div>

                                <a href="/#">
                                    <p>زرین‌کارت</p>
                                    <p>طلایی‌ترین‌کارت‌بانکی</p>
                                </a>

                                <a href="/#">
                                    <p>تسهیم</p>
                                    <p>درگاه‌پرداخت‌اشتراکی</p>
                                </a>

                            </div>

                        </div>
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

                    <li className={styles.MoreMenu} id={styles.ShowMoreMenu}>
                        <a onClick={() => setCloseMoreMenu(prevState => !prevState)}
                         href="/#">بیش‌تر
                        </a>

                        <img src={down} alt="down-arrow" />

                        <ul className={!closeMoreMenu ? styles.ShowMoreMenuList : styles.CloseMoreMenu}>
                            <li>
                                <a href="/#">وبلاگ</a>
                            </li>
                            <li>
                                <a href="/#">دریافت‌شماره‌شبا</a>
                            </li>
                            <li>
                                <a href="/#">سوالات‌متداول</a>
                            </li>
                            <li>
                                <a href="/#">اپلیکیشن</a>
                            </li>
                            <li>
                                <a href="/#">زرین‌بین</a>
                            </li>
                        </ul>

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
        
            <Banner />

            <Cards />

            <ZarinPalOptions />
            
            <StartBox />

        </div>
        
    );
};

export default Landing;