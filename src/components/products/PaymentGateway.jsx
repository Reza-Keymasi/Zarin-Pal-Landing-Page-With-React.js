import React from 'react';
import styles from "./PaymentGateway.module.css";


// images
import Pay from "../../assets/images/pay.svg";
import DownArrow from "../../assets/images/down-arrow-svgrepo-com.svg";
import VerifiedIcon from "../../assets/images/verifiedIcon.svg";
import Splite from "../../assets/images/splite.svg";
import SupportIcon from "../../assets/images/support.svg";
import Checkd from "../../assets/images/checked.svg";
import Secure from "../../assets/images/security.svg";
import Plugin from "../../assets/images/plugin.svg";
import Logo from "../../assets/images/tashimLogo.svg";
import Arrow from "../../assets/images/arrow.svg";
import Store from "../../assets/images/storefront.svg";
import Vod from "../../assets/images/vod.svg";
import Games from "../../assets/images/games.svg";



const PaymentGateway = () => {
    return (
        <div>      

            <main className={styles.PaymentGatewayMain}>
                <div className={styles.PaymentGateway}>
                    <div className={styles.PaymentGatewayText}>
                        <h1>درگاه پرداخت اینترنتی   IPG</h1>
                        <h1>مهندسی شده برای رشد و فروش بیش‌تر</h1>
                        <p>
                            <span>درگاه پرداخت زرین‌پال، به واسطه‌ی قابلیت مسیردهی هوشمند، با اتصالِ همزمان به درگاه‌های متنوع و معتبر شاپرکی(</span>
                            <span>PSP</span>
                            <span>)، کاربران را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل می‌کند و باعث افزایش درصد تراکنش‌های موفق می‌شود.</span>
                        </p>
                        <div className={styles.PaymentGatewayButtons}>
                            <a className={styles.PaymentGatewayLink} href="/#">ساخت درگاه پرداخت</a>
                        </div>
                    </div>

                    <div className={styles.PaymentGatewayImage}>
                        <img src={Pay} alt="home" />
                    </div>
                </div>
                <div className={styles.GoDown}>
                    <div></div>
                    <img src={DownArrow} alt="down-arrow" />
                </div>
            </main>

            <article className={styles.Attributes}>
                <div className={styles.Title}>
                    <h2>
                        مزایای‌درگاه‌پرداخت‌اینترنتی‌زرین‌پال
                    </h2>
                </div>
                
                <div className={styles.Advantages}>
                    <div className={styles.Advantage} id={styles.First}>
                        <div>
                            <img src={VerifiedIcon} alt="wage" />
                            <h4>کارمزد رایگان</h4>
                        </div>
                        <p>
                            با هدف حمایت از کسب و کارها، کاربران جدید می‌توانند در ماه
                            اول عضویت خود، به‌صورت کاملا رایگان از خدمات زرین‌پال بهره‌مند شوند.
                        </p>
                    </div>

                    <div className={styles.Advantage} id={styles.Second}>
                        <div>
                            <img src={Splite} alt="splite" />
                            <h4>مسیردهی هوشمند</h4>
                        </div>
                        <p>
                            با پیاده‌سازی جدیدترین استانداردهای پرداخت،
                            درصد تراکنش‌های ناموفق را به حداقل می‌رساند.
                        </p>
                    </div>

                    <div className={styles.Advantage} id={styles.Third}>
                        <div>
                            <img src={Secure} alt="secure" />
                            <h4>امنیتِ پرداخت</h4>
                        </div>
                        <p>
                            برای خرید، پرداخت، یا انتقال مبلغ به حساب تعریف شده، می‌‌توان 
                            از لینک پرداخت شخصی و بدون مبلغ از پیش تعیین شده استفاده کرد.
                        </p>
                    </div>

                    <div className={styles.Advantage} id={styles.Fourth}>
                        <div>
                            <img src={SupportIcon} alt="buy" />
                            <h4>تکمیل فرآیند خرید</h4>
                        </div>
                        <p>
                        هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌ی
                        زرین‌پال، آماده‌ی پاسخ‌گویی و راهنمایی به کاربران هستیم.
                        </p>
                    </div>

                    <div className={styles.Advantage} id={styles.Fifth}>
                        <div>
                            <img src={Checkd} alt="checked" />
                            <h4>تسویه‌حسابِ روزانه</h4>
                        </div>
                        <p>
                            یک روز پس از انجام تراکنش، حداکثر تا ساعت ۱۷، مبلغ پرداختی
                            با کسر کارمزد، به‌صورت خودکار به حساب پذیرنده واریز می‌شود.
                        </p>
                    </div>

                    <div className={styles.Advantage} id={styles.Sixth}>
                        <div>
                            <img src={Plugin} alt="plugin" />
                            <h4>تنوع افزونه‌ها</h4>
                        </div>
                        <p>
                        زرین‌پال برای اتصال. درگاه پرداخت،. منبعی از متنوع‌ترین 
                        را همراه با آموزشِ نحوه اتصال و پشتیبانی فنی در اختیار صاحبان کسب‌وکارها قرار می‌دهد.
                        </p>
                    </div>
                </div>
            </article>

            <div className={styles.SectionContent}>
                <div className={styles.TariffPayment}>
                    <h2>تعرفه‌‌‌ی‌درگاه‌پرداخت‌اینترنتی</h2>
                    <p>
                        در هر تراکنش با درگاه پرداخت اینترنتی زرین‌پال، کارمزد
                        یک درصد تا سقف ۳۰۰۰ تومان کسر می‌شود. همچنین کاربران جدید
                        می‌توانند در ماه اول عضویت در زرین‌پال، از تمام سرویس‌ها 
                        و خدمات ارائه شده، به صورت کاملا رایگان بهره‌مند شوند.
                    </p>
                    <div className={styles.Link}>
                        <a href="/#" className={styles.Button}>
                            بیش‌تر بدانید. 
                            <img src={Arrow} alt="arrow" />
                        </a>    
                    </div>
                </div>
                
                <img className={styles.Logo} src={Logo} alt="logo" />

                {/* <div className={styles.LogoImage}>
                </div> */}
            </div>

            <div className={styles.Attributes}>
                <div className={styles.TitleTwo}>
                    <h2>
                        درگاه‌پرداخت‌زرین‌پال،برای‌چه‌کسانی‌وچه‌کسب‌و‌کارهایی‌مناسب‌است؟
                    </h2>
                </div>

                <div className={styles.Advantages}>
                    
                    <div className={styles.Advantage}>
                        <div> 
                            <span className={styles.Pic}>
                                <img  src={Store} alt="online-store" />
                            </span>
                            <h4>
                                کسب‌و‌کارهای‌اینترنتی
                            </h4>
                        </div>
                    </div>
                    <div className={styles.Advantage}>
                        <div>  
                            <img src={Splite} alt="crpto-services" />
                            <h4>
                                ارائه‌دهندگان خدمات رمزارز
                            </h4>
                        </div>
                    </div>
                    <div className={styles.Advantage}>
                        <div>
                            <span className={styles.Pic}>
                                <img src={Vod} alt="movie-platforms" />
                            </span>
                            <h4>
                                پلتفرم‌های نمایش فیلم و سریال
                                <span>(vod)</span>
                            </h4>
                        </div>
                    </div>
                    <div className={styles.Advantage}>
                        <div>
                            <span className={styles.Pic}>
                                <img src={Store} alt="store" />
                            </span>
                            <h4>
                                بازارگاه‌ها
                                <span>(Marketplace)</span>
                            </h4> 
                        </div>
                    </div>
                    <div className={styles.Advantage}>
                        <div>    
                            <span className={styles.Pic}>
                            <img src={Games} alt="games" />
                            </span>
                            <h4>
                                بازی‌سازان
                            </h4>
                        </div>
                    </div>
                    <div className={styles.Advantage}>
                        <div>    
                            <img src={Plugin} alt="serve" />
                            <h4>
                                سرویس‌دهنده‌ها
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default PaymentGateway;