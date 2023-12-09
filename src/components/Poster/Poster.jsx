import React from 'react';
import styles from '../../styles/Home.module.css'

import bg from '../../images/computer.png'

const Poster = () => (
    <section className={styles.home}>
        <div className={styles.title}>BIG SALE 40%</div>
        <div className={styles.product}>
            <div className={styles.text}>
                <div className={styles.subtitle}>the bestseller of 2023</div>
                <h1 className={styles.head}>LENNON r2d2 WITH NVIDIA 5090 TI</h1>
                <button className={styles.button}>Shop Now</button>
            </div>
            <div className={styles.image}>
                <img src={bg} alt=''/>
            </div>
        </div>
    </section>
);


export default Poster;