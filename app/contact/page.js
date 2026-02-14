"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-hero-heading">
        <div className="contact-container contact-hero__grid">
          <div className="contact-hero__text">
            <h1 id="contact-hero-heading">Get in Touch with SHOESCO</h1>
            <p className="contact-hero__subtitle">
              <span aria-hidden="true">ہمسفر، الفخامت جہاں جزئیات بولتی ہیں۔</span>
              <br />
              Hum yahan hain madad karne ke liye. SHOESCO se raabta ka asaan tareeka yahan hai.
              <br />
              
            </p>
            <a className="contact-button" href="mailto:hello@shoesco.com">Email Us</a>
          </div>
          <div className="contact-hero__media" aria-hidden="true">
            <div className="contact-image-frame">
              <Image
                src="/images/perfumes/perfume5.jfif"
                alt="Luxury SHOESCO perfume and accessories"
                width={540}
                height={540}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section contact-help" aria-labelledby="contact-help-heading">
        <div className="contact-container">
          <div className="contact-section__intro">
            <h2 id="contact-help-heading">We&apos;re Here to Help</h2>
            <p>
              At SHOESCO, customer satisfaction is our top priority. Whether you have questions about our products, need
              assistance with your order, or simply want to share your feedback, we are here to assist you. Reach out to us
              through any of the ways below, and our dedicated team will ensure you receive the support you need.
            </p>
          </div>
          <div className="contact-card-grid">
            <article className="contact-card" aria-labelledby="reach-out-heading">
              <div className="contact-card__icon" aria-hidden="true">✉️</div>
              <h3 id="reach-out-heading">Reach Out to Us</h3>
              <p>Customer Support: 1-800-123-4567</p>
              <p>Mon-Sat, 9 AM - 6 PM</p>
              <p>Email: miansarfaraz206905@gmail.com</p>
              <p>WhatsApp: 0321-1315355</p>
            </article>
            <article className="contact-card" aria-labelledby="showroom-heading">
              <div className="contact-card__icon" aria-hidden="true">📍</div>
              <h3 id="showroom-heading">Visit Our Shop</h3>
              <p>SHOESCO </p>
              <p>With  Luxury Life style</p>
              <p>Lahore City, Punjab ,Pakistan </p>
              <a className="contact-button contact-button--ghost" href="http://localhost:3000/sneakers">Shop Now</a>
            </article>
            <article className="contact-card" aria-labelledby="social-heading">
              <div className="contact-card__icon" aria-hidden="true">💬</div>
              <h3 id="social-heading">Stay Connected</h3>
              <p>
                Follow us on social media for the latest updates, exclusive offers, and a glimpse behind the scenes that
                define SHOESCO.
              </p>
              <div className="contact-social">
                <a href="https://facebook.com" aria-label="SHOESCO on Facebook" className="contact-social__icon">
                  f
                </a>
                <a href="https://twitter.com" aria-label="SHOESCO on Twitter" className="contact-social__icon">
                  t
                </a>
                <a href="https://instagram.com" aria-label="SHOESCO on Instagram" className="contact-social__icon">
                  in
                </a>
              </div>
              <p className="contact-social__handle">@shoescoofficial</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section contact-concern contact-concern--primary" aria-labelledby="concern-primary-heading">
        <div className="contact-container contact-two-column">
          <div className="contact-two-column__text">
            <h2 id="concern-primary-heading">Have a Concern or Complaint?</h2>
            <p>
              Your feedback is important to us. If you have any complaints, issues, or concerns regarding our products or
              services, please don&apos;t hesitate to contact us directly. We&apos;re here to resolve any problems you may have.
            </p>
            <div className="contact-action-row">
              <a className="contact-button" href="mailto:feedback@shoesco.com">Email Us</a>
              <a className="contact-button contact-button--ghost" href="tel:+18009876543">Call Us</a>
            </div>
          </div>
          <div className="contact-two-column__media" aria-hidden="true">
            <div className="contact-image-frame">
              <Image
                src="/images/shoes/shoes2.jfif"
                alt="Luxury sneakers showcased on marble surface"
                width={560}
                height={420}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section contact-form" aria-labelledby="contact-form-heading">
        <div className="contact-container contact-two-column">
          <div className="contact-two-column__text">
            <h2 id="contact-form-heading">Contact Form</h2>
            <p>
              El miss par repens gran ortos, empleistor talker. At SHOESCO, customer satisfaction is our top priority. Whether
              you have questions about our products, need assistance with your order, or simply want to share your feedback, we
              are here to help.
            </p>
            <div className="contact-info-block">
              <span>Email: miansarfaraz206905@gmail.com</span>
              <span>Phone: 0321-1315355</span>
            </div>
          </div>
          <div className="contact-two-column__media" aria-hidden="true">
            <div className="contact-image-frame">
              <Image
                src="/images/shoes/backgroud_pictures/casual1.webp"
                alt="Refined SHOESCO showroom interior"
                width={560}
                height={420}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section contact-concern contact-concern--secondary" aria-labelledby="concern-secondary-heading">
        <div className="contact-container contact-two-column contact-two-column--reversed">
          <div className="contact-two-column__text">
            <h2 id="concern-secondary-heading">Have a Concern or Complaint?</h2>
            <p>
              ہم سے رابطہ کریں، مسائل کا بہترین حل دریافت کریں۔ ہم آپ کے ہر تجربے کو پر سکون اور حساس بناتے ہیں۔
            </p>
            <p>
              Caring deeply, contacting early, gather calm after different forums, amid order the escapade felt, atque, alias et
              garriente comme zelchter quamum, semper eliter.
            </p>
          </div>
          <div className="contact-two-column__media" aria-hidden="true">
            <div className="contact-image-frame">
              <Image
                src="/images/perfumes/perfume5.jfif"
                alt="Curated SHOESCO perfume collection"
                width={560}
                height={420}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-features" aria-label="Store qualities">
        <div className="contact-container contact-features__row">
          <div className="contact-feature">
            <span aria-hidden="true">⚡</span>
            <div>
              <h3>Fast Delivery</h3>
              <p>Enjoy complimentary delivery on every order.</p>
            </div>
          </div>
          <div className="contact-feature">
            <span aria-hidden="true">🛡</span>
            <div>
              <h3>Premium Quality</h3>
              <p>Sift top models, dress &amp; styles with care.</p>
            </div>
          </div>
          <div className="contact-feature">
            <span aria-hidden="true">🔒</span>
            <div>
              <h3>Secure Payments</h3>
              <p>Reach online finesse, cons.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          background: linear-gradient(180deg, #f6f0e6 0%, #f4ede3 45%, #f1e8dd 100%);
          color: #3e362b;
          font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
        }

        .contact-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        .contact-hero {
          padding: 4.5rem 0 3.5rem;
        }

        .contact-hero__grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          align-items: center;
          gap: 3.2rem;
        }

        .contact-hero__text h1,
        .contact-section h2,
        .contact-feature h3,
        .contact-card h3 {
          font-family: "Cormorant Garamond", "Times New Roman", serif;
          color: #201b16;
          letter-spacing: 0.05em;
        }

        .contact-hero__text h1 {
          margin: 0 0 1.4rem;
          font-size: 3rem;
          font-weight: 600;
        }

        .contact-hero__subtitle {
          margin: 0 0 2.2rem;
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(32, 27, 22, 0.76);
        }

        .contact-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 2.4rem;
          border: 1px solid rgba(32, 27, 22, 0.4);
          border-radius: 999px;
          font-size: 0.95rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          color: #201b16;
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
          background: transparent;
        }

        .contact-button:hover,
        .contact-button:focus-visible {
          background: #201b16;
          color: #f9f5ef;
          border-color: #201b16;
          outline: none;
        }

        .contact-button--ghost {
          background: rgba(255, 255, 255, 0.35);
        }

        .contact-button--ghost:hover,
        .contact-button--ghost:focus-visible {
          background: rgba(32, 27, 22, 0.85);
          color: #f8f3ed;
        }

        .contact-image-frame {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 28px 60px rgba(32, 27, 22, 0.16);
        }

        .contact-image-frame :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .contact-section {
          padding: 4.2rem 0;
        }

        .contact-section__intro {
          text-align: center;
          max-width: 860px;
          margin: 0 auto 3rem;
        }

        .contact-section__intro h2 {
          margin: 0 0 1.1rem;
          font-size: 2.5rem;
        }

        .contact-section__intro p {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(32, 27, 22, 0.75);
        }

        .contact-card-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2.2rem;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.72);
          border-radius: 24px;
          padding: 2.2rem;
          border: 1px solid rgba(32, 27, 22, 0.08);
          box-shadow: 0 22px 40px rgba(32, 27, 22, 0.1);
          text-align: center;
        }

        .contact-card__icon {
          font-size: 2rem;
          margin-bottom: 1.2rem;
        }

        .contact-card h3 {
          margin: 0 0 1rem;
          font-size: 1.6rem;
        }

        .contact-card p {
          margin: 0.35rem 0;
          font-size: 0.98rem;
          line-height: 1.6;
          color: rgba(32, 27, 22, 0.72);
        }

        .contact-social {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin: 1.4rem 0 0.6rem;
        }

        .contact-social__icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(32, 27, 22, 0.35);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #201b16;
          transition: background 0.3s ease, color 0.3s ease;
          font-size: 0.95rem;
        }

        .contact-social__icon:hover,
        .contact-social__icon:focus-visible {
          background: #201b16;
          color: #f7f1e8;
        }

        .contact-social__handle {
          margin: 0;
          font-size: 0.92rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(32, 27, 22, 0.6);
        }

        .contact-two-column {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 3.2rem;
          align-items: center;
        }

        .contact-two-column--reversed {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .contact-two-column__text h2 {
          margin: 0 0 1.2rem;
          font-size: 2.35rem;
        }

        .contact-two-column__text p {
          margin: 0 0 1.1rem;
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(32, 27, 22, 0.75);
        }

        .contact-action-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .contact-info-block {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.98rem;
          letter-spacing: 0.05em;
          color: rgba(32, 27, 22, 0.68);
        }

        .contact-features {
          background: rgba(32, 27, 22, 0.86);
          padding: 3rem 0;
          color: #f7f1e8;
        }

        .contact-features__row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2.5rem;
        }

        .contact-feature {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .contact-feature span {
          font-size: 1.8rem;
        }

        .contact-feature h3 {
          margin: 0 0 0.5rem;
          font-size: 1.35rem;
          text-transform: uppercase;
          color: #fefcf8;
        }

        .contact-feature p {
          margin: 0;
          font-size: 0.95rem;
          color: rgba(255, 250, 245, 0.78);
          line-height: 1.55;
        }

        @media (max-width: 1100px) {
          .contact-hero__grid,
          .contact-two-column,
          .contact-two-column--reversed {
            grid-template-columns: 1fr;
          }

          .contact-two-column__media {
            order: 2;
          }

          .contact-two-column__text {
            order: 1;
          }

          .contact-card-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 820px) {
          .contact-container {
            padding: 0 1.8rem;
          }

          .contact-hero {
            padding: 3.6rem 0 3rem;
          }

          .contact-hero__text h1 {
            font-size: 2.5rem;
          }

          .contact-section {
            padding: 3.6rem 0;
          }

          .contact-card-grid {
            grid-template-columns: 1fr;
          }

          .contact-action-row {
            justify-content: flex-start;
          }
        }

        @media (max-width: 540px) {
          .contact-container {
            padding: 0 1.4rem;
          }

          .contact-button {
            width: 100%;
            padding: 0.9rem 1.2rem;
          }

          .contact-social__icon {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </main>
  );
}
