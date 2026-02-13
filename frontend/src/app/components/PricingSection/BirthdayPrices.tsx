"use client";
import React from "react";
import styles from "./PricingSection.module.css";

export default function PricingSection() {
  return (
    <section className={styles.section} aria-labelledby="pricing-heading">
      <div className={styles.container}>
        <h2 id="pricing-heading" className={styles.title}>
          Make Your Child’s Birthday Colorful, Fun & Memorable 🎈
        </h2>
        <p className={styles.heading_para}>
            We create joyful birthday decorations with balloons, themes, and creative setups that kids love and parents trust. 
            From small home parties to grand celebrations, we handle everything beautifully.
        </p>

        <h2 id="pricing-heading" className={styles.title2}>
          🎉 Our Birthday Decoration Packages
        </h2>

        <div className={styles.grid}>
            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🎈 Starter Party</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for small home birthday celebrations</h4>
                <p>A simple yet vibrant decoration setup using balloons and banners to create a cheerful birthday atmosphere</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹5,500</span>
                <span className={styles.price}>₹4,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Balloon arch or bunch setup</li>
                  <li>✨Happy Birthday banner</li>
                  <li>✨ Cake table decoration</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🎉 Theme Party</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for cartoon or color-themed birthdays</h4>
                <p>A fun theme-based decoration designed around your child’s favorite cartoon or color combination.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹8,500</span>
                <span className={styles.price}>₹7,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Theme-based balloon decoration</li>
                  <li>✨ Decorative backdrop</li>
                  <li>✨ Cake table styling</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🎉 Grand Party</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for stage decoration & photo sessions</h4>
                <p>A premium stage setup that looks stunning in photos and creates a grand celebration feel.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹13,500</span>
                <span className={styles.price}>₹12,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Decorative stage backdrop</li>
                  <li>✨ LED name board</li>
                  <li>✨ Decorative props</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>

          <article className={styles.card}>
              <header className={styles.cardHeader}>
                <h3 className={styles.planName}>🎉 Celebrity Party</h3>
              </header>
              <div className={styles.useNdescription}>
                <h4>Perfect for big halls & luxury celebrations</h4>
                <p>A complete luxury decoration experience with premium materials and customized designs.</p>
              </div>

              <div className={styles.prices}>
                <span className={styles.oldPrice}>₹25,500</span>
                <span className={styles.price}>₹20,999</span>
              </div>

              <ul className={styles.features}>
                  <li>✨ Full hall decoration</li>
                  <li>✨ Premium balloons & flowers</li>
                  <li>✨ Entry gate & photo booth setup</li>
              </ul>

            <button className={styles.cta} type="button">Book Now</button>
            </article>
        </div>
      </div>
    </section>
  );
}
