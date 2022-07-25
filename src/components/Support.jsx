import React from 'react';
import styles from "./Support.module.css";

// images
import Arrow from "../assets/images/arrow.svg";

const Support = () => {
    return (
        <div className={styles.Support}>
            <div className={styles.SupportNumber}>
                <p>پشتیبانی ۲۴ ساعته، ۷ روز هفته <span id={styles.Line}>|</span>شماره تماس:
                <span id={styles.PhoneNumber}> ۴۱۲۳۹-۰۲۱</span></p>
            </div>

            <div className={styles.SupportRequest}>
                <p>درخواست‌پشتیبانی</p>
                <img src={Arrow} alt="arrow"/>
            </div>
        </div>
    );
};

export default Support;