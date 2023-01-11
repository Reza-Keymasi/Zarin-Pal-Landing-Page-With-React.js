import React from 'react';
import styles from "./ZarinLink.module.css"


// images
import Zarinlink from "../../assets/images/zarinlink.svg";
import DownArrow from "../../assets/images/down-arrow-svgrepo-com.svg";

import User from "../../assets/images/user.svg";
import ProductBack from "../../assets/images/ProductBack.svg";
import Like from "../../assets/images/like.svg";
import Imoji from "../../assets/images/imoji.svg";
import Coupon from "../../assets/images/coupon.svg";
import Order from "../../assets/images/order.svg";

const ZarinLink = () => {
    return (
        <div>

            <main className={styles.ZarinLinkMain}>
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

            <article className={styles.ZarinLinkArticle}>
                <div className={styles.Title}>
                    <h2>
                        ویژگی‌های‌زرین‌لینک
                    </h2>
                </div>

                <div className={styles.Options}>
                    <div className={styles.Option}  id={styles.OptionOne}>
                        <div className={styles.Container}>
                            <div>
                                <img src={User} alt="User" />
                                <h4>لینک‌پرداخت‌شخصی</h4>
                            </div>
                            <p>
                                برای خرید، پرداخت، یا انتقال مبلغ به حساب تعریف شده،
                                می‌‌توان از لینک پرداخت شخصی و بدون مبلغ از پیش تعیین شده استفاده کرد.
                            </p>
                        </div>
                    </div>

                    <div className={styles.Option} id={styles.OptionTwo}>
                        <div className={styles.Container}>
                            <div>
                                <img src={ProductBack} alt="product-back" />
                                <h4>
                                مدیریت‌محصولات
                                </h4>
                            </div>
                            <p>
                                با زرین‌‌لینک می‌‌توان به صورت جداگانه، برای هر محصول
                                فروشگاه سقف ثبت سفارش تعیین کرد و یک
                                لینک پرداخت با قیمت مشخص و مجزا به آن اختصاص داد.
                            </p>
                        </div>
                    </div>

                    <div className={styles.Option} id={styles.OptionThree}>
                        <div className={styles.Container}>
                            <div>
                                <img src={Like} alt="person-info" />
                                <h4>دریافت‌اطلاعات‌مشتریان</h4>
                            </div>
                            <p>
                                فروشندگان می‌‌توانند با مشاهده و دریافت اطلاعات پرداخت‌‌کنندگان خود،
                                مانند نام، نام خانوادگی، آدرس ایمیل و شماره تماس،
                                با مشتریان خود در ارتباط باشند.
                            </p>
                        </div>
                    </div>

                    <div className={styles.Option} id={styles.OptionFour}>
                        <div className={styles.Container}>
                            <div>
                                <img src={Imoji} alt="payment-complitig" />
                                <h4>تکمیل‌فرآیند‌خرید</h4>
                            </div>
                            <p>
                                پس از این‌‌که مشتری پرداخت خود را نهایی می‌‌کند، فروشنده
                                می‌‌تواند پیامی با مضمون دلخواه و مرتبط با 
                                تراکنش‌‌های موفق یا ناموفق برای مشتری خود ارسال کند.
                            </p>
                        </div>
                    </div>

                    <div className={styles.Option} id={styles.OptionFive}>
                        <div className={styles.Container}>
                            <div>
                                <img src={Coupon} alt="coupon" />
                                <h4>کدتخفیف</h4>
                            </div>
                            <p>
                                فروشنده به‌‌راحتی می‌‌تواند لینک کد تخفیف موردنظر خود را
                                در زرین‌‌لینک تعریف و مشخص کند و در اختیار مشتریان خود قرار دهد.
                            </p>
                        </div>
                    </div>

                    <div className={styles.Option} id={styles.OptionSix}>
                        <div className={styles.Container}>
                            <div>
                                <img src={Order} alt="" />
                                <h4>تعریف‌تعداد‌سفارش</h4>
                            </div>
                            <p>
                                در زرین‌‌لینک محدودیتی در تعریف تعداد سفارش برای هر محصول وجود ندارد.
                            </p>
                        </div>
                    </div>

                    <div className={styles.Option} id={styles.OptionSeven}>
                        <div className={styles.Container}>
                            <div>
                                <img src={Imoji} alt="" />
                                <h4>عدم‌محدودیت‌انتقال‌وجه</h4>
                            </div>
                            <p>
                                با سقف انتقال وجه ۵۰ میلیون تومانی با زرین‌‌لینک، دیگر
                                نیازی نیست مشتریان برای انتقال مبالغ بالا به
                                خودپرداز یا شعب بانکی مراجعه کنند.
                            </p>
                        </div>
                    </div>

                    <div className={styles.Option} id={styles.OptionEight}>
                        <div className={styles.Container}>
                            <div>
                                <img src={Imoji} alt="" />
                                <h4>مدیریت‌امورمالی‌و‌تراکنش‌‌ها</h4>
                            </div>
                            <p>
                                در پنل مدیریتی زرین‌‌پال، گزارش دقیقی از تمام تراکنش‌‌ها
                                بر اساس محصول، تاریخ، مبلغ و نام پرداخت‌‌کننده قابل مشاهده است
                                و تایید تراکنش‌‌‌‌ها، نیازی به چک کردن فیش‌‌های واریزی با بانک مبدا نخواهد داشت.
                            </p>
                        </div>
                    </div>
                </div>

            </article>

        </div>
    );
};

export default ZarinLink;