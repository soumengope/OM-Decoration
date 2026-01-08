"use client";
import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <main>
        <section className={styles.hero} id="home">

           <div className={styles["hero-decor"]} aria-hidden>
            <img src="/flower.png" alt="flowers" />
          </div>
          
          <div className={styles["hero-inner"]}>
            <h1 className={styles["hero-title"]}>🌼 Floral Designs That Tell Your Story</h1>
            <div className={styles["hero-sub-block"]}>
              <p className={styles["hero-sub"]}>
                Turn your precious moments into unforgettable memories with <strong>OM Decoration</strong>.
                We create beautiful, sustainable and customized flower decorations that reflect your love, traditions, and celebrations.
              </p>

              <p className={styles["hero-sub"]}>
                From grand weddings and baby ceremonies to birthday parties, car decorations, engagements, and religious events – every petal is placed with care, creativity, and perfection.
              </p>

              <ul className={styles["hero-features"]}>
                <li>✨ Trusted by Hundreds of Happy Clients</li>
                <li>✨ 2+ Years Experience</li>
                <li>✨ 50+ Events Decorated</li>
                <li>✨ Fresh flowers</li>
                <li>✨ Unique designs</li>
                <li>✨ Tailored to your story</li>
              </ul>

              <p className={styles["hero-sub"]}>
                Let your celebration bloom with OM Decoration. <br />Because every event deserves to look magical.
              </p>
            </div>

            <div className={styles["hero-ctas"]}>
              <a className={`${styles.btn} ${styles.primary}`} href="#booking">Book now</a>
              <a className={`${styles.btn} ${styles.ghost}`} href="#about">Learn more</a>
            </div>
          </div>
         
        </section>

        <section className={styles.events} id="services">
          <h2>Our Services</h2>
          <div className={styles["services-grid"]}>
            <article className={styles["service-card"]}>
              <img src="/marriage.png" alt="Wedding Ceremonies" />
              <div className={styles["service-body"]}>
                <h3>Wedding Ceremonies</h3>
                <p>Full-scale wedding decor: arches, aisles, table florals and stage design for memorable ceremonies.</p>
                <a className={`${styles.btn} ${styles.primary}`} href="#booking">Book Now</a>
              </div>
            </article>

            <article className={styles["service-card"]}>
              <img src="/engagment.png" alt="Engagement / Ring Ceremony" />
              <div className={styles["service-body"]}>
                <h3>Engagement / Ring Ceremony</h3>
                <p>Romantic and intimate setups focusing on the couple — table accents, floral backdrops and mood lighting.</p>
                <a className={`${styles.btn} ${styles.primary}`} href="#booking">Book Now</a>
              </div>
            </article>

            <article className={styles["service-card"]}>
              <img src="/carDecoration.png" alt="Cars decoration" />
              <div className={styles["service-body"]}>
                <h3>Cars Decoration</h3>
                <p>Elegant vehicle adornments for weddings, processions, and VIP arrivals.</p>
                <a className={`${styles.btn} ${styles.primary}`} href="#booking">Book Now</a>
              </div>
            </article>

            <article className={styles["service-card"]}>
              <img src="/birthday_logo.png" alt="Birthday Parties" />
              <div className={styles["service-body"]}>
                <h3>Birthday Parties</h3>
                <p>Colorful, playful themes with centerpieces and balloon-flower combos tailored to your taste.</p>
                <a className={`${styles.btn} ${styles.primary}`} href="#booking">Book Now</a>
              </div>
            </article>

            <article className={styles["service-card"]}>
              <img src="/annaprasan.png" alt="Baby First Eating Ceremony" />
              <div className={styles["service-body"]}>
                <h3>Baby First Eating Ceremony (Annaprashan)</h3>
                <p>Delicate setups and themed florals to celebrate your baby's first milestones with family.</p>
                <a className={`${styles.btn} ${styles.primary}`} href="#booking">Book NOw</a>
              </div>
            </article>

            <article className={styles["service-card"]}>
              <img src="/religious.png" alt="Religious Functions" />
              <div className={styles["service-body"]}>
                <h3>Religious Functions / Puja / Festivals</h3>
                <p>Traditional arrangements and mandap decor that respect customs and enhance the spiritual ambience.</p>
                <a className={`${styles.btn} ${styles.primary}`} href="#booking">Book Now</a>
              </div>
            </article>
            
          </div>
        </section>

        <section className={styles.why} id="why">
          <div className={styles["why-inner"]}>
            <h2>Why Choose OM Decoration</h2>
            <p className={styles["why-sub"]}>Because your special moments deserve expert care, creativity, and perfection. We combine fresh flowers, 
              custom themes, and reliable service to make every celebration beautiful, stress-free, and unforgettable.</p>

            <div className={styles.cards}>
              <article className={styles.card}>
                <div className={styles.icon}>
                  <Image src="/fresh_flowers.png" alt="Fresh & Premium Flowers" width={100} height={100} />
                </div>
                <h3 className={styles.cardTitle}>Fresh & Premium Flowers</h3>
                <p className={styles.cardDesc}>We use only hand-picked fresh flowers to ensure vibrant colors, long-lasting beauty, and elegant finishing in every decoration.</p>
              </article>

              <article className={styles.card}>
                <div className={styles.icon}>
                  <Image src="/ontime.png" alt="On-Time Setup Guarantee" width={100} height={100} />
                </div>
                <h3 className={styles.cardTitle}>On-Time Setup Guarantee</h3>
                <p className={styles.cardDesc}>Your event is our priority. We arrive early, finish on time, and ensure everything is perfectly ready before your guests arrive.</p>
              </article>

              <article className={styles.card}>
                <div className={styles.icon}>
                  <Image src="/affordable.png" alt="Affordable & Transparent Pricing" width={100} height={100} />
                </div>
                <h3 className={styles.cardTitle}>Affordable & Transparent Pricing</h3>
                <p className={styles.cardDesc}>No hidden charges. Choose from flexible packages that fit your budget while maintaining premium decoration quality.</p>
              </article>

              <article className={styles.card}>
                <div className={styles.icon}>
                  <Image src="/custom_theme.png" alt="Custom Theme Design" width={100} height={100} />
                </div>
                <h3 className={styles.cardTitle}>Custom Theme Design</h3>
                <p className={styles.cardDesc}>From traditional to modern luxury themes – every setup is designed according to your story, culture, and preferences.</p>
              </article>

              <article className={styles.card}>
                <div className={styles.icon}>
                  <Image src="/local_expert.png" alt="Local Event Experts" width={100} height={100} />
                </div>
                <h3 className={styles.cardTitle}>Local Event Experts</h3>
                <p className={styles.cardDesc}>Being local helps us understand venues, traditions, and timelines – giving you faster support and smoother event execution.</p>
              </article>

              <article className={styles.card}>
                <div className={styles.icon}>
                  <Image src="/happy_client.png" alt="100% Client Satisfaction" width={100} height={100} />
                </div>
                <h3 className={styles.cardTitle}>100% Client Satisfaction</h3>
                <p className={styles.cardDesc}>Our work is not complete until you are happy. We value relationships more than profits.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.booking} id="booking">
          <h2>Book an Event</h2>
          <form className={styles["booking-form"]} action="#" onSubmit={(e) => e.preventDefault()}>
            <div className={styles.row}>
              <input placeholder="Name" required />
              <input placeholder="Phone" required />
            </div>
            <div className={styles.row}>
              <input placeholder="Email" type="email" required />
              <input placeholder="Event Date" type="date" required />
            </div>
            <textarea placeholder="Tell us about your event" rows={4} />
            <div className={`${styles.row} ${styles.actions}`}>
              <button className={`${styles.btn} ${styles.primary}`} type="submit">Request Quote</button>
              <button className={`${styles.btn} ${styles.ghost}`} type="button">Call us</button>
            </div>
          </form>
        </section>

        <section className={styles.gallery}>
          <h2>Gallery</h2>
          <div className={styles.grid}>
            <div className={styles.tile}>
              <img src="/galary/img01.jpg" alt="Gallery Image 1" />
            </div>
            <div className={styles.tile}>
              <img src="/galary/img02.jpg" alt="Gallery Image 2" />
            </div>
            <div className={styles.tile}>
              <img src="/galary/img03.jpg" alt="Gallery Image 3" />
            </div>
            <div className={styles.tile}>
              <img src="/galary/img04.jpg" alt="Gallery Image 4" />
            </div>
            <div className={styles.tile}>
              <img src="/galary/img05.jpg" alt="Gallery Image 5" />
            </div>
            <div className={styles.tile}>
              <img src="/galary/img06.jpg" alt="Gallery Image 6" />
            </div>
            <div className={styles.tile}>
              <img src="/galary/img07.jpg" alt="Gallery Image 7" />
            </div>
            <div className={styles.tile}>
              <img src="/galary/img08.jpg" alt="Gallery Image 8" />
            </div>
            <div className={styles.tile}>
              <img src="/galary/img09.jpg" alt="Gallery Image 9" />
            </div>
            <div className={styles.tile}>
              <img src="/galary/img10.jpg" alt="Gallery Image 10" />
            </div>
            <div className={styles.tile}>
              <img src="/galary/img11.jpg" alt="Gallery Image 11" />
            </div>
            <div className={styles.tile}>
              <img src="/galary/img12.jpg" alt="Gallery Image 12" />
            </div>
          </div>
        </section>

        
      </main>
    </div>
  );
}