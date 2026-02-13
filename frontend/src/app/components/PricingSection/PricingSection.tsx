"use client";
import React from "react";
import styles from "./PricingSection.module.css";

export default function PricingSection() {
  return (
    <section className={styles.section} aria-labelledby="pricing-heading">
      <div className={styles.container}>
        <h2 id="pricing-heading" className={styles.title}>
          Book Now the Perfect Floral Package
        </h2>

        <div className={styles.badges} role="list">
          <span className={styles.badge}>✨ Handcrafted Decor</span>
          <span className={styles.badge}>✨ Custom Designs</span>
          <span className={styles.badge}>✨ On-Time Setup</span>
        </div>

        <div className={styles.grid}>
            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>Basic Floral</h3>
                <p className={styles.planDesc}>Simple and elegant floral décor for small events and gatherings.</p>
              </header>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹6,000</span>
                <span className={styles.price}>₹5,000</span>
              </div>

              <button className={styles.cta} type="button">Book Now</button>

              <ul className={styles.features}>
                  <li>✨ Fresh flower decoration</li>
                  <li>✨ Stage or backdrop décor</li>
                  <li>✨ Basic color theme</li>
                  <li>✨ Suitable for small events</li>
              </ul>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>Premium Floral</h3>
                <p className={styles.planDesc}>Stylish decoration with enhanced floral arrangements and theme touch.</p>
              </header>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹9,000</span>
                <span className={styles.price}>₹8,000</span>
              </div>

              <button className={styles.cta} type="button">Book Now</button>

              <ul className={styles.features}>
                  <li>✨ Premium fresh flowers</li>
                  <li>✨ Stage + entrance décor</li>
                  <li>✨ Enhanced color theme</li>
                  <li>✨ Ideal for birthdays & baby ceremonies</li>
              </ul>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>Deluxe Floral</h3>
                <p className={styles.planDesc}>Deluxe floral décor with customized themes for special occasions.</p>
              </header>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹16,000</span>
                <span className={styles.price}>₹15,000</span>
              </div>

              <button className={styles.cta} type="button">Book Now</button>

              <ul className={styles.features}>
                  <li>✨ Premium & exotic flowers</li>
                  <li>✨ Customized theme design</li>
                  <li>✨ Stage, entrance & key area décor</li>
                  <li>✨ Perfect for weddings & engagements</li>
              </ul>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>Luxury Floral</h3>
                <p className={styles.planDesc}>Luxury flower decoration with full venue transformation for grand events.</p>
              </header>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹26,000</span>
                <span className={styles.price}>₹25,000</span>
              </div>

              <button className={styles.cta} type="button">Book Now</button>

              <ul className={styles.features}>
                  <li>✨ Luxury floral arrangements</li>
                  <li>✨ Full venue decoration</li>
                  <li>✨ Designer theme setup</li>
                  <li>✨ Best for grand & premium events</li>
              </ul>
            </article>
        </div>
      </div>
    </section>
  );
}
