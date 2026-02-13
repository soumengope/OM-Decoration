"use client";
import React from "react";
import styles from "./PricingSection.module.css";

export default function EngagementPrices() {
  return (
    <section className={styles.section} aria-labelledby="pricing-heading">
      <div className={styles.container}>
        <h2 id="pricing-heading" className={styles.title}>
          Celebrate Your First Step Together with Elegant Décor ✨
        </h2>
        <p className={styles.heading_para}>
            Our engagement ceremony decorations are designed to create a romantic and joyful atmosphere using beautiful floral designs, stylish backdrops, and elegant entry setups. 
            From intimate functions to grand celebrations, we make your engagement truly special.
        </p>

        <h2 id="pricing-heading" className={styles.title2}>
          🌹 Our Engagement Decoration Packages
        </h2>

        <div className={styles.grid}>
            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🌼 Classic Engagement</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Simple & intimate engagement ceremonies</h4>
                <p>A neat and elegant decoration setup focused on the stage and seating area.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹8,500</span>
                <span className={styles.price}>₹6,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Stage flower decoration</li>
                  <li>✨ Entry gate decoration</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🌷Premium Engagement</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Stylish family functions</h4>
                <p>An upgraded decor package with richer floral detailing and enhanced stage design.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹15,500</span>
                <span className={styles.price}>₹12,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Fresh premium flowers</li>
                  <li>✨ Stage decoration</li>
                  <li>✨ Entry gate decoration (2+ gates)</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>👑 Royal Engagement</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Grand engagement celebrations</h4>
                <p>A royal-style decoration setup with elegant florals, grand entry decor, and premium styling.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹20,500</span>
                <span className={styles.price}>₹17,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Premium flower arrangements</li>
                  <li>✨ Grand entry gate decoration (4+ gates)</li>
                  <li>✨ Stage decoration</li>
                  <li>✨ Decorative lighting</li>
                  
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>
            
             <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>💎 Luxury Engagement</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for High-end engagement events</h4>
                <p>A fully customized luxury engagement setup with designer floral themes and complete venue styling.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹25,500</span>
                <span className={styles.price}>₹21,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Full venue decoration</li>
                  <li>✨ Imported & exotic flowers</li>
                  <li>✨ Stage decoration</li>
                  <li>✨ Entry gate (5+) & selfi setup</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>
        </div>
      </div>
    </section>
  );
}
