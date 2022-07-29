import React from 'react';
import styles from "./Footer.module.css";

// images
import Instagram from "../../assets/images/instagram.svg";
import Twitter from "../../assets/images/twitter.svg";
import Telegram from "../../assets/images/telegram.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Aparat from "../../assets/images/aparat.svg";

const Footer = () => {
    return (
        <footer>
         <div className={styles.FooterLinks}>
          <div>
            <p>محصولات</p>
            <ul>
              <li><a href="/#">زرین‌لینک</a></li>
              <li><a href="/#">درگاه پرداخت اینترنتی</a></li>
              <li><a href="/#">زرین‌کارت</a></li>
              <li><a href="/#">تسهیم</a></li>
            </ul>
          </div>
          <div>
            <p>آشنایی با زرین‌پال</p>
            <ul>
              <li><a href="/#">تعرفه ها</a></li>
              <li><a href="/#">درباره ما</a></li>
              <li><a href="/#">سوالات متداول</a></li>
              <li><a href="/#">همکاری در فروش</a></li>
            </ul>
          </div>
          <div>
            <p>ارتباط بیشتر</p>
            <ul>
              <li><a href="/#">تماس با ما</a></li>
              <li><a href="/#">قوانین و مقررات</a></li>
              <li><a href="/#">حریم خصوصی</a></li>
            </ul>
          </div>
          <div>
            <p>منابع</p>
            <ul>
              <li><a href="/#">دریافت شماره شبا</a></li>
              <li><a href="/#">زرین‌بین</a></li>
              <li><a href="/#">توسعه دهندگان</a></li>
              <li><a href="/#">وبلاگ</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.SocialMedia}>
          <p>زرین‌پال در شبکه های اجتماعی</p>
          <div>
            <a href="/#"><img src={Instagram} alt="instagram" /></a>
            <a href="/#"><img src={Twitter} alt="twitter" /></a>
            <a href="/#"><img src={Telegram} alt="telegram" /></a>
            <a href="/#"><img src={Linkedin} alt="linkedin" /></a>
            <a href="/#"><img src={Aparat} alt="aparat" /></a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;