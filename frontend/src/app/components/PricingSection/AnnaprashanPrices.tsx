"use client";
import React from "react";
import styles from "./PricingSection.module.css";

export default function AnnaprashanPrices() {
  return (
    <section className={styles.section} aria-labelledby="pricing-heading">
      <div className={styles.container}>
        <h2 id="pricing-heading" className={styles.title}>
          Celebrate Your Baby’s First Milestone with Grace & Blessings 🌸
        </h2>
        <p className={styles.heading_para}>
            We create warm, traditional, and elegant décor setups for Annaprashan ceremonies — blending cultural beauty with soft floral styling to make the day truly memorable.
        </p>

        <h2 id="pricing-heading" className={styles.title2}>
          🌼 Our Annaprashan Decoration Packages
        </h2>

        <div className={styles.grid}>
            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🌿 Classic Annaprashan</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Simple home ceremonies</h4>
                <p>A traditional and neat decoration setup designed for intimate family gatherings.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹6,500</span>
                <span className={styles.price}>₹5,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Floral backdrop setup</li>
                  <li>✨ Baby name banner</li>
                  <li>✨ Baby's bath tub decoration</li>
                  <li>✨ Entry Gate decoration</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🌸 Premium Annaprashan</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Elegant family celebrations</h4>
                <p>An upgraded décor with richer floral arrangements and enhanced stage styling.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹9,500</span>
                <span className={styles.price}>₹7,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Premium fresh flower backdrop</li>
                  <li>✨ Customized baby name board</li>
                  <li>✨ Baby's bath tub decoration</li>
                  <li>✨ Stage & floor décor</li>
                  <li>✨ Entry Gate decoration</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>
            
             <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>💎 Royal Annaprashan</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Grand family functions</h4>
                <p>A beautifully styled royal-themed decoration with detailed floral work and elegant entry décor.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹15,500</span>
                <span className={styles.price}>₹14,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Premium floral stage setup</li>
                  <li>✨ Decorative entry gate</li>
                  <li>✨ Customized baby name board</li>
                  <li>✨ Baby's bath tub decoration</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>💎 Luxury Annaprashan</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for High-end celebrations & banquet halls</h4>
                <p>A fully customized luxury decoration with designer floral themes and complete venue styling.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹24,500</span>
                <span className={styles.price}>₹20,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Designer & exotic flowers</li>
                  <li>✨ Full venue decoration</li>
                  <li>✨ Premium lighting & theme styling</li>
                  <li>✨ Baby's bath tub decoration</li>
                  <li>✨ Grand entry setup</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>
        </div>
      </div>
    </section>
  );
}
