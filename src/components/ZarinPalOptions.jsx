import React from 'react';
import styles from "./ZarinPalOptions.module.css";

// Images
import VerifiedIcon from "../assets/images/verifiedIcon.svg";
import Splite from "../assets/images/splite.svg";
import Support from "../assets/images/support.svg";

const ZarinPalOptions = () => {
    return (
        <article className={styles.Attributes}>
            <div className={styles.Definition}>
                <h3>ویژگی‌های درگاه پرداخت زرین‌پال</h3>
                <p>
                درگاه پرداخت اینترنتی زرین‌پال، امکان مدیریت تراکنش‌های مالی در بستر وب
                را به راحتی امکان‌پذیر می‌کند و با پیاده‌سازی و اجرای راه‌کارهای
                وشمندانه، باعث افزایش درصد تراکنش‌های موفق و سوددهی بیش‌تر می‌شود.
                </p>
            </div>

            <div className={styles.Items}>
                <div className={styles.Item} id={styles.FirstItem}>
                    <div>
                        <img src={VerifiedIcon} alt="verified" />
                        <h4>ضمانتِ پرداخت</h4>
                    </div>
                    <p>
                    درگاه پرداخت زرین‌پال، تجربه‌ی پرداخت اینترنتی آسان،
                    سریع و امن را به مشتریان کسب و کارهای آنلاین هدیه می‌دهد.
                    </p>
                </div>
                <div className={styles.Item} id={styles.SecondItem}>
                    <div>
                        <img src={Splite} alt="splite" />
                        <h4>مسیردهی هوشمند</h4>
                    </div>
                    <p>
                    استانداردهای متفاوت زرین‌پال در بازه‌های زمانی مختلف، باعث می‌شود
                    کاربران به بهترین درگاه پرداخت با بالاترین میزان تراکنش‌های موفق هدایت شوند.
                    </p>
                </div>
                <div className={styles.Item} id={styles.ThirdItem}>
                    <div>
                        <img src={Support} alt="support" />
                        <h4>پشتیبانی ۲۴/۷</h4>
                    </div>
                    <p>
                    هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌ی زرین‌پال
                    ، آماده‌ی پاسخ‌گویی و راهنمایی به کاربران هستیم.
                    </p>
                </div>
                <div className={styles.Item} id={styles.FourthItem}>
                    <div>
                        <img src={Support} alt="safe" />
                        <h4>امنیتِ پرداخت</h4>
                    </div>
                    <p>
                    درگاه امن زرین‌پال، ضمانتی برای امنیت
                    اطلاعات بانکی افراد، هنگام پرداخت‌‌های اینترنتی آن‌هاست.
                    </p>
                </div>
            </div>
        </article>
    );
};

export default ZarinPalOptions;