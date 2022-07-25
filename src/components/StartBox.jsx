import React from 'react';
import styles from "./StartBox.module.css";

const StartBox = () => {
    return (
        <div className={styles.StartBox}>
            <h4>به خانواده‌ی یک میلیونی زرین‌پال بپیوندید.</h4>
            <p>یک ماه رایگان، هدیه‌ی عضویت زرین‌پال به شما</p>
            <a href="/#">شروع‌کنید</a>
        </div>
    );
};

export default StartBox;