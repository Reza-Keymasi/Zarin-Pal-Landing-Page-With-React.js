import React from 'react';
import styles from "./Banner.module.css";

// images
import Home from "../../assets/images/home.svg";
import DownArrow from "../../assets/images/down-arrow-svgrepo-com.svg";

const Banner = () => {
    return (
        <main>
            <div className={styles.Banner}>
                <div className={styles.BannerText}>
                    <h3>بیش‌از ۱۲ سال</h3>
                    <h3>انتخاب‌مطمئن‌کسب‌و‌کارها‌ی‌آنلاین</h3>
                    <p>
                        زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در
                        ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت
                        الکترونیک را برای کسب و کارها ارائه کرده است؛ با این هدف که در افزایش سهم تجارت الکترونیکی
                        در تولید ناخالص ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش
                        سازنده‌‌ای ایفا کند.
                    </p>
                    <div className={styles.BannerButtons}>
                        <a className={styles.Register} href="/#">ثبت‌نام</a>
                        <a className={styles.Login} href="/#">ورود</a>
                    </div>
                </div>

                    <div className={styles.BannerImage}>
                        <img src={Home} alt="home" />
                    </div>
            </div>
            <div className={styles.GoDown}>
                <div></div>
                <img src={DownArrow} alt="down-arrow" />
            </div>
        </main>
    );
};

export default Banner;