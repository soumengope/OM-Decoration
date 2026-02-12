"use client";
import React from "react";
import styles from "./PricingSection.module.css";

export default function WeddingCarPrices() {
  return (
    <section className={styles.section} aria-labelledby="pricing-heading">
      <div className={styles.container}>
        <h2 id="pricing-heading" className={styles.title}>
          Elegant & Stylish Decoration for Your Wedding Ride 🌸
        </h2>
        <p className={styles.heading_para}>
            We design beautiful wedding car decorations using fresh flowers, ribbons, and premium styling to make your grand entry truly special.
        </p>

        <h2 id="pricing-heading" className={styles.title2}>
          🌼 Our Wedding Car Decoration Packages
        </h2>

        <div className={styles.grid}>
            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🌼 Classic Car Decor</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Simple & elegant wedding entry</h4>
                <p>A clean and tasteful full car decoration using fresh flowers with a traditional and minimal design.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹4,500</span>
                <span className={styles.price}>₹3,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Full car floral decoration</li>
                  <li>✨ Standard fresh flowers</li>
                  <li>✨ Neat & balanced styling</li>
              </ul>

            <button className={styles.cta} type="button">Choose</button>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🌷Premium Car Decor</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Stylish & modern weddings</h4>
                <p>An enhanced full car decoration with better-quality flowers, refined design patterns, and richer finishing.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹6,500</span>
                <span className={styles.price}>₹5,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Full car floral decoration</li>
                  <li>✨ Premium fresh flowers</li>
                  <li>✨ Enhanced design detailing</li>
              </ul>

            <button className={styles.cta} type="button">Choose</button>
            </article>
            
             <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>💎 Luxury Car Decor</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Grand & luxury weddings</h4>
                <p>A luxury full car decoration featuring designer floral patterns, superior flower quality, and a unique, polished finish that stands out.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹9,500</span>
                <span className={styles.price}>₹8,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Full car floral decoration</li>
                  <li>✨ Designer & exotic flowers</li>
                  <li>✨ Unique, stylish & polished design</li>
              </ul>

            <button className={styles.cta} type="button">Choose</button>
            </article>
        </div>
      </div>
    </section>
  );
}
