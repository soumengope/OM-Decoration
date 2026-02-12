"use client";
import React from "react";
import styles from "./PricingSection.module.css";

export default function PricingSection() {
  return (
    <section className={styles.section} aria-labelledby="pricing-heading">
      <div className={styles.container}>
        <h2 id="pricing-heading" className={styles.title}>
          Elegant Floral Designs for Your Special Day 🌸
        </h2>
        <p className={styles.heading_para}>
            We specialize in beautiful wedding flower decorations that reflect tradition, elegance, and luxury. 
            From mandap décor to full venue transformation, we create timeless setups that make your wedding unforgettable.
        </p>

        <h2 id="pricing-heading" className={styles.title2}>
          🌹 Our Wedding Decoration Packages
        </h2>

        <div className={styles.grid}>
            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🌼 Classic Wedding</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Simple & elegant wedding ceremonies</h4>
                <p>A graceful floral setup focusing on the wedding stage and mandap, ideal for intimate and traditional weddings.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹10,500</span>
                <span className={styles.price}>₹8,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Stage flower decoration</li>
                  <li>✨ Mandap floral setup</li>
                  <li>✨ Entry gate decoration</li>
                  <li>✨ Basic wedding car decoration</li>
              </ul>

            <button className={styles.cta} type="button">Choose</button>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🌷 Premium Wedding</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Well-decorated wedding functions</h4>
                <p>An enhanced decoration package with richer floral arrangements and improved stage detailing.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹16,500</span>
                <span className={styles.price}>₹15,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Fresh premium flowers</li>
                  <li>✨ Stage & mandap decoration</li>
                  <li>✨ Entry gate decoration (2+ gates)</li>
                  <li>✨ Basic wedding car decoration</li>
              </ul>

            <button className={styles.cta} type="button">Choose</button>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>👑 Royal Wedding</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for Grand wedding celebrations</h4>
                <p>A luxurious decoration experience with royal floral designs, grand entry décor, and premium styling.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹26,500</span>
                <span className={styles.price}>₹25,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Premium flower arrangements</li>
                  <li>✨ Grand entry gate decoration (4+ gates)</li>
                  <li>✨ Stage, mandap decoration</li>
                  <li>✨ Premium wedding car decoration</li>
                  
              </ul>

            <button className={styles.cta} type="button">Choose</button>
            </article>
            
             <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>💎 Luxury Wedding</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for High-end & destination weddings</h4>
                <p>High-end wedding decor with designer floral themes and complete venue elegance.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹40,500</span>
                <span className={styles.price}>₹35,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Full hall decoration</li>
                  <li>✨ Imported & exotic flowers</li>
                  <li>✨ Stage, mandap decoration</li>
                  <li>✨ Entry gate (5+) & selfi setup</li>
                  <li>✨ Luxury wedding car decoration</li>
              </ul>

            <button className={styles.cta} type="button">Choose</button>
            </article>
        </div>
      </div>
    </section>
  );
}
