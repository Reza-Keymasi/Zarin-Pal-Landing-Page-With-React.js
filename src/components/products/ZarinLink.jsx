import React from 'react';
import styles from "./ZarinLink.module.css"

import Navbar from "../landingPage/Navbar.jsx"

// images
import Zarinlink from "../../assets/images/zarinlink.svg";
import DownArrow from "../../assets/images/down-arrow-svgrepo-com.svg";

const ZarinLink = () => {
    return (
        <div>
            <Navbar />

            <main>
                <div className={styles.ZarinLink}>
                    <div className={styles.ZarinLinkText}>
                        <h3>
                            زرین‌لینک
                        </h3>
                        <h3>
                            درگاه پرداختِ فروشگاه‌‌های مبتنی بر شبکه‌‌ی اجتماعی
                        </h3>
                        <p>
                            درگاه پرداختِ فروشگاه‌‌‌های مبتنی بر شبکه‌‌‌ی اجتماعی‌با استفاده از
                            زرین‌‌‌لینک، به‌‌‌سادگی فرآیند فروش محصولات یا خدمات خود را
                            در شبکه‌‌‌های اجتماعی یا وب‌‌‌سایت خود مدیریت کنید و فروش بیش‌‌‌تری داشته باشید.
                        </p>
                        <div className={styles.ZarinLinkButton}>
                            <a href="/#">
                                ساخت‌زرین‌لینک
                            </a>
                        </div>
                    </div>

                    <div className={styles.ZarinLinkPic}>
                        <img src={Zarinlink} alt="zarin-link" />
                    </div>
                </div>
                    <div className={styles.GoDown}>
                    <div></div>
                    <img src={DownArrow} alt="down-arrow" />
                </div>
            </main>

            <article>
                <div>
                    <h2>
                        ویژگی‌های‌زرین‌لینک
                    </h2>
                </div>

                <div>
                    
                </div>

            </article>

        </div>
    );
};

export default ZarinLink;