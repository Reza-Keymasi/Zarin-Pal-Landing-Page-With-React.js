import React from 'react';
import styles from "./ZarinPlus.module.css"


// Images
import Zarinplus from "../../assets/images/zarinplus.svg"
import DownArrow from "../../assets/images/down-arrow-svgrepo-com.svg";
import Loyalty from "../../assets/images/customerLoyalty.svg";
import MoreSell from "../../assets/images/moreSell.svg";
import Club from "../../assets/images/customerClub.svg";
import MoreCustomer from "../../assets/images/moreCustomer.svg";
import MoreShare from "../../assets/images/moreShare.svg";
import LowCost from "../../assets/images/lowCost.svg";
import Motivation from "../../assets/images/motivation.svg";
import GreateOffer from "../../assets/images/greatOffer.svg";
import BetterShopping from "../../assets/images/betterShopping.svg";
import Logo from "../../assets/images/logoZarinPlus.svg";
import Arrow from "../../assets/images/arrow.svg";

const ZarinPlus = () => {
    return (
        <div>

            <main className={styles.ZarinPlusMain}>
                <div className={styles.ZarinPlus}>
                    <div className={styles.ZarinPlusText}>
                        <h3>
                            زرین‌پلاس
                        </h3>

                        <h2>
                            ابزار هوشمند سود‌دهی
                        </h2>

                        <p>
                            زرین‌پلاس محصولی از زرین‌پال، فرصتی فراهم کرده است تا
                            کسب و کارها در هر اندازه و دسته‌بندی شغلی، با در دست داشتن
                            ابزاری قدرتمند برای وفادارسازی مشتریان و افزایش فروش محصولات خود،
                            بتوانند کسب و کار خود را به بهترین شکل توسعه و گسترش
                            دهند و جایگاه برترین فروشگاه منطقه را به خود اختصاص دهند.
                        </p>

                        <div className={styles.ZarinPlusButton}>
                            <a href="/#">
                                پیوستن به ‌زرین‌پلاس
                            </a>
                        </div>
                    </div>
                    
                    <div className={styles.ZarinPlusPic}>
                        <img src={Zarinplus} alt="zarinPlus" />
                    </div>
                </div>
                
                <div className={styles.GoDown}>
                    <div></div>
                    <img src={DownArrow} alt="down-arrow" />
                </div>
            </main>

            <article className={styles.ZarinPlusArticle}>
                <div>
                    <h2>
                        ویژگی‌ها
                    </h2>
                </div>

                <div className={styles.Features}>
                    <div className={styles.Feature}>
                        <img src={Loyalty} alt="loyalty" />
                        <h3>
                            وفادارسازی مشتریان
                        </h3>
                    </div>
                    <div className={styles.Feature}>
                        <img src={MoreSell} alt="More-sell" />
                        <h3>
                            افزایش فروش
                        </h3>
                    </div>
                    <div className={styles.Feature}>
                        <img src={Club} alt="club" />
                        <h3>
                            باشگاه مشتریان اختصاصی
                        </h3>
                    </div>
                    <div className={styles.Feature}>
                        <img src={MoreCustomer} alt="more-customer" />
                        <h3>
                            افزایش مشتری
                        </h3>
                    </div>
                    <div className={styles.Feature}>
                        <img src={MoreShare} alt="more-share" />
                        <h3>
                            افزایش سهم بازار در محدوده‌ی فعالیت
                        </h3>
                    </div>
                    <div className={styles.Feature}>
                        <img src={LowCost} alt="low-cost" />
                        <h3>
                            کاهش هزینه‌های بازاریابی
                        </h3>
                    </div>
                    <div className={styles.Feature}>
                        <img src={Motivation} alt="motivation" />
                        <h3>
                            انگیزه‌‌سازی برای تکرار خرید مشتری
                        </h3>
                    </div>
                    <div className={styles.Feature}>
                        <img src={GreateOffer} alt="greate-offer" />
                        <h3>
                            ارائه‌ی پیشنهاد شگفت‌انگیز به مشتریان
                        </h3>
                    </div>
                    <div className={styles.Feature}>
                        <img src={BetterShopping} alt="better-shopping" />
                        <h3>
                            نمایش فروشگاه پذیرنده به عنوان جایگاه برتر
                        </h3>
                    </div>
                </div>
            </article>

            <section className={styles.ZarinPlusSection}>
                <div className={styles.ZarinPlusPerformance}>
                    <h3>
                        عملکرد کلی زرین‌پلاس
                    </h3>
                    <p>
                        کاربران زرین‌پلاس می‌توانند با خرید از فروشگاه‌های طرف قرارداد
                        با زرین‌پلاس و استفاده از خدمات آن‌ها، تا ۴۰ درصد از مبلغ خریدشان را
                        در حساب کاربری خود، یا به صورت نقدی در حساب بانکی‌شان دریافت کنند،
                        همچنین می‌توانند با استفاده از این مبلغ، از سایر امکانات اپلیکیشن نیز بهره‌مند
                        شوند. برای استفاده از این ویژگی‌هاه، کاربر برای تکرار خرید،
                        به سمت فروشگاه‌های عضو زرین‌پلاس هدایت می‌شود.
                    </p>
                    <div className={styles.ZarinPlusLink}>
                        <a href="/#">
                        بیش‌تر بدانید. 
                            <img src={Arrow} alt="arrow" />
                        </a>
                    </div>
                </div>

                <div className={styles.ZarinPlusLogo}>
                    <img src={Logo} alt="logo"/>
                </div>
            </section>
            
        </div>
    );
};

export default ZarinPlus;