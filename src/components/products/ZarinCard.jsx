import React from 'react';
import styles from "./ZarinCard.module.css";

// images
import zarincard from "../../assets/images/zarincard.svg";
import DownArrow from "../../assets/images/down-arrow-svgrepo-com.svg"
import Verified from "../../assets/images/verifiedIcon.svg"
import Splite from "../../assets/images/splite.svg"
import Support from "../../assets/images/support.svg"
import Security from "../../assets/images/security.svg"
import Logo from "../../assets/images/logoZarinPlus.svg";
import Arrow from "../../assets/images/arrow.svg";


const ZarinCart = () => {
    return (
        <div>
            <main className={styles.ZarinCardMain}>
                <div className={styles.ZarinCard}>
                    <div className={styles.ZarinCardText}>
                        <h3>زرین‌کارت</h3>
                        <h1>طلایی‌ترین کارتِ بانکی</h1>
                        <p>
                            زرین‌‌‌کارت یک کارتِ بانکی عضو شبکه‌‌‌ی شتاب و متصل به یک حساب بانکی است که از تمام
                            ویژگی‌‌‌ها و امکانات یک حساب بانکی تمام عیار برخوردار است. زرین‌‌‌کارت این امکان را برای کاربران
                            خود فراهم می‌‌‌سازد تا از تعرفه‌‌‌ی کارمزد کم‌‌‌تر در روزهای عادی و کارمزد رایگان در سه‌‌‌شنبه‌‌‌های
                            طلاییِ زرین‌‌‌پال بهره‌‌‌مند شوند.
                        </p>
                        <div className={styles.ZarinCardButton}>
                            <a href="/#">درخواست‌زرین‌کارت</a>
                        </div>
                    </div>
                    <div className={styles.ZarinCardImage}>
                        <img src={zarincard} alt="zarin-cart" />
                    </div>
                </div>
                <div className={styles.GoDown}>
                    <div></div>
                <img src={DownArrow} alt="down-arrow" />
            </div>
            </main>

            <article className={styles.ZarinCardArticle}>
                <div className={styles.ZarinCardContainer}>
                    <div className={styles.Data}>
                        <h3>
                            ویژگی‌های زرین‌کارت
                        </h3>
                        <p>
                            زرین‌‌‌‌کارت یک راهکار اساسی برای کنترل سرمایه‌‌‌‌های در
                            حال گردش است که با تسهیل و تسریع فرآیندهای مالی و تغییر مدل
                            کارمزدی، نقش بسیار مهمی در توسعه‌‌‌‌ی کسب و کارها ایفا میکند.
                        </p>
                    </div>
                    <div className={styles.Data}>
                        <div>  
                            <img src={Verified} alt="کاهش‌کارمزد" />
                            <h3>
                                کاهش کارمزد
                            </h3>
                        </div>
                        <p>
                            در روزهای عادی هفته، کارمزد دارندگان 
                            زرین‌کارت به‌صورت نیم درصد تا سقف ۲۰۰۰ تومان است.
                        </p>
                    </div>
                    <div className={styles.Data} id={styles.Three}>
                        <div>                                    
                            <img src={Splite} alt="کارمزد‌رایگان" />
                            <h3>
                                کارمزد رایگان
                            </h3>
                        </div>
                        <p>
                            در سه‌شنبه‌های طلایی زرین‌پال، تسویه‌حساب به مقصد
                            زرین‌کارت بدون کسر کارمزد و کاملا رایگان انجام می‌شود.
                        </p>
                    </div>
                    
                    <div className={styles.Data} id={styles.Four}>
                        <div>                                    
                            <img src={Support} alt="عضو شبکه‌ بانکی کشور" />
                            <h3>
                                عضو شبکه‌ بانکی کشور
                            </h3>
                        </div>
                        <p>
                            به واسطه‌ی درخواست و انتخاب پذیرندگان، زرین‌کارت
                            به عنوان عضو رسمی شبکه‌ی بانکی کشور، صادر می‌شود.
                        </p>
                    </div>
                    <div className={styles.Data} id={styles.Five}>
                        <div>                                   
                            <img src={Support} alt="سهولت انتقال وجه" />
                            <h3>
                            سهولت انتقال وجه
                            </h3>
                        </div>
                        <p>
                            زرین‌کارت طبق قوانین بانک مرکزی کشور، تمام
                            ویژگی‌ها و امکانات یک حساب بانکی رایج را در اختیار
                            کاربران خود قرار می‌دهد.
                        </p>
                    </div>
                    <div className={styles.Data} id={styles.Six}>
                        <div>                                   
                            <img src={Security} alt="جامعیتِ استفاده" />
                            <h3>
                                جامعیتِ استفاده
                            </h3>
                        </div>
                        <p>
                            زرین‌کارت تمام امکانات کارت‌های بانکی، مانند پرداخت
                            اینترنتی، پرداخت از طریق دستگاه‌های خودپرداز،
                            انتقال و برداشت وجه را دارد.
                        </p>
                    </div>
                </div>
            </article>

            <section className={styles.ZarinCardSection}>
                <div className={styles.ZarinCardTariff}>
                        <h3>
                            تعرفه‌ی زرین‌‌‌‌کارت
                        </h3>
                        <p>
                            با داشتن زرین‌کارت، کارمزد تراکنش‌ها در روزهای عادی هفته،
                            به نیم درصد و تا سقف ۲۰۰۰ تومان کاهش می‌یابد و در صورت تسویه‌حساب
                            به مقصد زرین‌کارت در سه‌شنبه‌های طلاییِ زرین‌پال، کارمزد تراکنش‌ها کاملا
                            رایگان و صفر در نظر گرفته می‌شود. همچنین کاربران جدید می‌توانند در ماه اول
                            عضویت در زرین‌پال، از تمام سرویس‌ها و خدمات ارائه شده، به
                            صورت کاملا رایگان بهره‌مند شوند.
                        </p>
                        <div className={styles.ZarinCardLink}>
                            <a href="/#">
                            بیش‌تر بدانید. 
                                <img src={Arrow} alt="arrow" />
                            </a>
                        </div>
                    </div>

                    <div className={styles.ZarinCardLogo}>
                        <img src={Logo} alt="logo"/>
                    </div>
            </section>

            <div className={styles.ZarinCardLastText}>
                <h2>
                    زرین‌کارت، چه مزیتی برای کسب و کارها دارد؟
                </h2>
                <p>
                    زرین‌کارت، با تسریع روند تسویه‌حساب و کاهش درصد کارمزد،
                    درست شبیه یک ابرقهرمان عمل می‌کند. به این صورت‌که با کاهش کارمزد
                    تراکنش‌های روزانه به نیم درصد با سقف ۲۰۰۰ تومانی، به نقدینگی و
                    سوددهیِ هدفمند صاحبین کسب و کارها کمک می‌کند.
                </p>
            </div>

            <div className={styles.ZarinCardLastText}>
                <h2>
                    کارمزد رایگان
                </h2>
                <p>
                    کاربران زرین‌پال می‌توانند هنگام تکمیل فرآیند تسویه‌حساب به
                    زرین‌کارت خود، از قابلیت سه‌شنبه‌های طلایی استفاده کنند، که در این حالت،
                    کارمزد تراکنش‌ها کاملا رایگان و بدون کسر کارمزد در نظر گرفته می‌شود.
                </p>
            </div>

            <div className={styles.ZarinCardProdction}>
                <div>
                    <p>
                        تااین‌لحظه‌بیش‌از <span>۲۵.۰۰۰</span> زرین‌کارت‌صادرشده‌است.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ZarinCart;