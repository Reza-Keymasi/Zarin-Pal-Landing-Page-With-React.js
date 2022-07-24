import React from 'react';

import styles from "./Cards.module.css";

// images
import PG from "../assets/images/pg.svg";
import Arrow from "../assets/images/arrow.svg";
import SocialPayment from "../assets/images/social-image.svg";
import ZarinCard from "../assets/images/zarincard.svg";
import PayOut from "../assets/images/payout.svg";
import ZarinPlus from "../assets/images/zarinplus.svg";

const Cards = () => {
    return (
        <div>
            
            <section  className={styles.OnlinePayment}>
                <div>
                    <img className={styles.SectionImage} src={PG} alt="pg" />
                </div>
                <div className={styles.SectionText}>
                    <h2>درگاه‌پرداخت‌اینترنتی</h2>
                    <h3>مهندسی شده برای رشد و فروش بیش‌تر</h3>
                    <p>درگاه پرداخت زرین‌پال، با اتصالِ همزمان به درگاه‌های متنوع و معتبر بانکی
                        (PSPها)،کاربران را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل می‌کند و به واسطه‌ی
                         قابلیت مسیردهی هوشمند، باعث افزایش درصد تراکنش‌های موفق می‌شود.
                    </p>

                    <div className={styles.SectionLinks}>
                        <a href="/#" className={styles.FirstButton}>ساخت درگاه پرداخت</a>
                        <a href="/#" className={styles.SecondButton}>
                        بیش‌تر بدانید. 
                            <img src={Arrow} alt="arrow" />
                        </a>
                    </div>
                </div>
            </section>

            <section  className={styles.OnlinePayment}>
                <div className={styles.SectionText}>
                    <h2>زرین‌لینک</h2>
                    <h3>پرداخت در شبکه‌های اجتماعی</h3>
                    <p>
                    زرین‌لینک با مدیریت فرآیند فروش به روشی هوشمندانه و سریع،
                    باعث افزایش فروش محصولات و خدمات، از طریق شبکه‌های اجتماعی یا وب‌سایت می‌شود.
                    </p>
                    
                    <div className={styles.SectionLinks}>
                        <a href="/#" className={styles.FirstButton}>ساخت زرین‌لینک</a>
                        <a href="/#" className={styles.SecondButton}>
                        بیش‌تر بدانید. 
                            <img src={Arrow} alt="arrow" />
                        </a>
                    </div>
                </div>
                <div>
                    <img className={styles.SectionImage} src={SocialPayment} alt="social payment" />
                </div>
            </section>

            <section  className={styles.OnlinePayment}>
                <div>
                    <img className={styles.SectionImage} src={ZarinCard} alt="zarin card" />
                </div>
                <div className={styles.SectionText}>
                    <h2>زرین‌کارت</h2>
                    <h3>طلایی‌ترین کارتِ بانکی</h3>
                    <p>
                    زرین‌‌کارت یک کارتِ بانکی عضو شبکه‌‌ی شتاب و متصل به یک حساب بانکی است که از تمام ویژگی‌‌ها
                    و امکانات یک حساب بانکی تمام عیار برخوردار است. زرین‌‌کارت این امکان را برای کاربران خود فراهم
                    می‌‌سازد تا از تعرفه‌‌ی کارمزد کم‌‌تر در روزهای
                    عادی و کارمزد رایگان در سه‌‌شنبه‌‌های طلاییِ زرین‌‌پال بهره‌‌مند شوند.
                    </p>

                    <div className={styles.SectionLinks}>
                        <a href="/#" className={styles.FirstButton}>درخواست‌زرین‌کارت</a>
                        <a href="/#" className={styles.SecondButton}>
                        بیش‌تر بدانید. 
                            <img src={Arrow} alt="arrow" />
                        </a>
                    </div>
                </div>
            </section>

            <section  className={styles.OnlinePayment}>
                <div className={styles.SectionText}>
                    <h2>تسهیم</h2>
                    <h3>درگاه پرداخت اشتراکی</h3>
                    <p>
                    تسهیم بهترین روش برای مدیریت مالی کسب‌ و کارهای شراکتی است که
                    به واسطه‌ی آن، درآمد حاصل از فروش محصولات یا خدمات، در سهم‌های ثابت یا
                    متغیر میان شرکای تجاری تقسیم شده و به صورت جداگانه به حساب هر شخص واریز می‌‌شود.
                    </p>
                    
                    <div className={styles.SectionLinks}>
                        <a href="/#" className={styles.FirstButton}>درخواست‌ فعال‌سازی تسهیم</a>
                        <a href="/#" className={styles.SecondButton}>
                        بیش‌تر بدانید. 
                            <img src={Arrow} alt="arrow" />
                        </a>
                    </div>
                </div>
                <div>
                    <img className={styles.SectionImage} src={PayOut} alt="payout" />
                </div>
            </section>

            <section  className={styles.OnlinePayment}>
                <div>
                    <img className={styles.SectionImage} src={ZarinPlus} alt="zarin plus" />
                </div>
                <div className={styles.SectionText}>
                    <h2>زرین‌پلاس</h2>
                    <h3>ابزار هوشمند سوددهی</h3>
                    <p>
                    زرین‌پلاس محصولی از زرین‌پال، فرصتی فراهم کرده است تا کسب و کارها در هر اندازه
                    و دسته‌بندی شغلی، با در دست داشتن ابزاری قدرتمند برای وفادارسازی مشتریان 
                    و افزایش فروش محصولات خود، بتوانند کسب و کار خود را به بهترین شکل توسعه
                    و گسترش دهند و جایگاه برترین فروشگاه منطقه را به خود اختصاص دهند.
                    </p>

                    <div className={styles.SectionLinks}>
                        <a href="/#" className={styles.FirstButton}>پیوستن به زرین‌پلاس</a>
                        <a href="/#" className={styles.SecondButton}>
                        بیش‌تر بدانید. 
                            <img src={Arrow} alt="arrow" />
                        </a>
                    </div>
                </div>
            </section>
            
        </div>

        
    );
};

export default Cards;