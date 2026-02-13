"use client";
import React from "react";
import styles from "./PricingSection.module.css";

export default function FunctionPrices() {
  return (
    <section className={styles.section} aria-labelledby="pricing-heading">
      <div className={styles.container}>
        <h2 id="pricing-heading" className={styles.title}>
          Traditional & Elegant Decoration for Auspicious Occasions 🌸
        </h2>
        <p className={styles.heading_para}>
            We provide beautiful floral and traditional décor for puja ceremonies, religious functions, and cultural festivals. 
            From simple home rituals to large community events, we create a peaceful and divine atmosphere.
        </p>

        <h2 id="pricing-heading" className={styles.title2}>
           🌿 Our Puja & Festival Decoration Packages
        </h2>

        <div className={styles.grid}>
            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🌼 Basic Puja Setup</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Small home puja or rituals</h4>
                <p>A simple and traditional decoration setup designed for intimate spiritual ceremonies.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹5,500</span>
                <span className={styles.price}>₹3,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Floral garlands & backdrop cloth</li>
                  <li>✨ Basic lighting</li>
                  <li>✨ Idol decoration</li>
                  <li>✨ Basic stage arrangement</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🌸 Standard Puja Setup</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Family functions & small gatherings</h4>
                <p>An enhanced decoration with better floral detailing and improved stage styling.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹9,500</span>
                <span className={styles.price}>₹7,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Premium fresh flower backdrop</li>
                  <li>✨ Idol & altar decoration</li>
                  <li>✨ Decorative lighting</li>
                  <li>✨ Stage cloth décor</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>
            
             <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🏵️ Grand Festival Setup</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Community puja & cultural programs</h4>
                <p>A grand and vibrant decoration designed to create a festive and spiritual atmosphere.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹15,500</span>
                <span className={styles.price}>₹14,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Premium flower decoration</li>
                  <li>✨ Decorative entry gate</li>
                  <li>✨ Full stage setup</li>
                  <li>✨ Decorative lighting</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>👑 Royal Festival Setup</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Large-scale festivals & temple events</h4>
                <p>A fully customized festival decoration with detailed floral styling and complete venue transformation.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹24,500</span>
                <span className={styles.price}>₹20,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Designer floral stage setup</li>
                  <li>✨ Grand entry décor</li>
                  <li>✨ Premium lighting & theme styling</li>
                  <li>✨ Multiple decorative elements</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>
        </div>
      </div>
    </section>
  );
}
