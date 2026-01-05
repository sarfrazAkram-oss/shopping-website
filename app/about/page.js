'use client';

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-hero">
        <div className="about-container about-hero__content">
          <div className="about-hero__text">
            <span className="about-eyebrow">About SHOESCO</span>
            <h1>Crafting Excellence in Sneakers &amp; Fragrances</h1>
            <p>
              Welcome to SHOESCO, where luxury meets style. Founded with a passion for craftsmanship and innovation, we have been
              committed to offering the finest premium sneakers and luxury perfumes since our inception.
            </p>
          </div>
          <div className="about-hero__media" aria-hidden="true">
            <div className="about-hero__images">
              <Image src="/images/shoes/shoes4.jfif" alt="Premium sneaker" width={340} height={220} priority />
              <Image src="/images/perfumes/perfume5.jfif" alt="Luxury perfume bottle" width={220} height={220} priority />
            </div>
          </div>
        </div>
      </div>

      <section className="about-section about-story">
        <div className="about-container about-two-column">
          <div className="about-two-column__text">
            <h2>Our Story</h2>
            <p>
              At SHOESCO, our journey began with a simple mission: to provide discerning individuals with the finest sneakers and
              fragrances that not only enhance their style but also reflect their unique personalities. From the very beginning we set
              out to curate a collection of top-tier sneakers that blend cutting-edge design with unmatched comfort. Simultaneously, we
              delved into the world of luxury perfumery bringing forth a selection of exquisite scents crafted to embody sophistication
              and elegance.
            </p>
            <p>
              Driven by our love for quality and luxury, we have grown into a trusted destination for those who seek the best in sneakers
              and fragrances. Every step of our journey has been about creating an exceptional experience, one that stands for quality,
              elegance and an unwavering commitment to our customers, our customers.
            </p>
            <div className="about-stats" role="list">
              <div className="about-stats__item" role="listitem">
                <span className="about-stats__icon" aria-hidden="true">♡</span>
                <span className="about-stats__label">Founded</span>
                <span className="about-stats__value">2015</span>
              </div>
              <div className="about-stats__item" role="listitem">
                <span className="about-stats__icon" aria-hidden="true">👟</span>
                <span className="about-stats__label">Sneakers Sold</span>
                <span className="about-stats__value">+50,000</span>
              </div>
              <div className="about-stats__item" role="listitem">
                <span className="about-stats__icon" aria-hidden="true">🌸</span>
                <span className="about-stats__label">Perfume Lovers</span>
                <span className="about-stats__value">+30,000</span>
              </div>
            </div>
          </div>
          <div className="about-two-column__media">
            <Image src="/images/shoes/backgroud_pictures/men2.jfif" alt="Shoemaker crafting premium footwear" width={520} height={420} />
          </div>
        </div>
      </section>

      <section className="about-section about-mission">
        <div className="about-container about-two-column">
          <div className="about-two-column__text">
            <h2>Our Mission</h2>
            <h3>Inspire Confidence &amp; Elevate Lifestyles</h3>
            <p>
              At SHOESCO, our mission is to inspire confidence and elevate lifestyles by providing exceptional products that exude luxury
              &amp; quality. Whether it&apos;s the perfect pair of sneakers or a captivating fragrance, we strive to ensure that every product we
              offer is a testament to excellence. We believe that style is a personal journey and our goal is to be a part of yours by
              delivering exceptional sneakers and perfumes that you can trust &amp; cherish.
            </p>
          </div>
          <div className="about-two-column__media">
            <Image src="/images/shoes/backgroud_pictures/women2.jfif" alt="Clients experiencing luxury fragrances" width={520} height={420} />
          </div>
        </div>
      </section>

      <section className="about-section about-testimonials">
        <div className="about-container">
          <h2>Customer Testimonials &amp; Press Features</h2>
          <div className="about-press">
            <span>VOGUE</span>
            <span>ELLE</span>
            <span>BAZAAR</span>
            <span>Harper&apos;s Weekly</span>
          </div>
          <div className="about-testimonials__grid">
            <article>
              <p>
                &ldquo;SHOESCO has become my go-to for both sneakers and perfumes. The quality of their products is unparalleled, and the customer
                service is exceptional.&rdquo;
              </p>
              <footer>
                <strong>Ayesha K.</strong>
                <span>Verified Buyer</span>
              </footer>
            </article>
            <article>
              <p>
                &ldquo;I love the elegance and sophistication! SHOESCO offers every purchase has felt like a luxury experience.&rdquo;
              </p>
              <footer>
                <strong>Omar L.</strong>
                <span>Verified Buyer</span>
              </footer>
            </article>
          </div>
        </div>
      </section>

      <section className="about-features" aria-label="Store qualities">
        <div className="about-container about-features__row">
          <div className="about-feature">
            <span className="about-feature__icon" aria-hidden="true">⚡</span>
            <div>
              <h3>Fast Delivery</h3>
              <p>Enjoy sophisticated delivery, right to your door.</p>
            </div>
          </div>
          <div className="about-feature">
            <span className="about-feature__icon" aria-hidden="true">🛡</span>
            <div>
              <h3>Premium Quality</h3>
              <p>Finest materials with timeless craftsmanship.</p>
            </div>
          </div>
          <div className="about-feature">
            <span className="about-feature__icon" aria-hidden="true">🔒</span>
            <div>
              <h3>Secure Payments</h3>
              <p>Shop confidently with trusted online protection.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          background: linear-gradient(180deg, #f7f1e8 0%, #f9f5ef 45%, #f5eee5 100%);
          color: #3b352c;
          font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        .about-hero {
          padding: 4.5rem 0 3.5rem;
        }

        .about-hero__content {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: center;
          gap: 3rem;
        }

        .about-hero__text h1 {
          margin: 0.8rem 0 1.4rem;
          font-family: "Cormorant Garamond", "Times New Roman", serif;
          font-size: 3rem;
          letter-spacing: 0.06em;
          font-weight: 600;
          color: #201b16;
        }

        .about-hero__text p {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(32, 27, 22, 0.82);
        }

        .about-eyebrow {
          display: inline-block;
          font-family: "Cormorant Garamond", "Times New Roman", serif;
          font-size: 1rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(32, 27, 22, 0.72);
        }

        .about-hero__images {
          display: flex;
          gap: 1.5rem;
          align-items: flex-end;
          justify-content: center;
        }

        .about-hero__images :global(img) {
          border-radius: 24px;
          object-fit: cover;
          box-shadow: 0 25px 55px rgba(33, 27, 20, 0.18);
        }

        .about-section {
          padding: 4.5rem 0;
        }

        .about-two-column {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 3rem;
          align-items: center;
        }

        .about-two-column__text h2 {
          margin: 0 0 1.25rem;
          font-family: "Cormorant Garamond", "Times New Roman", serif;
          font-size: 2.4rem;
          letter-spacing: 0.04em;
          color: #201b16;
        }

        .about-two-column__text h3 {
          margin: 0 0 1rem;
          font-size: 1.4rem;
          font-family: "Cormorant Garamond", "Times New Roman", serif;
          letter-spacing: 0.04em;
          color: rgba(32, 27, 22, 0.85);
        }

        .about-two-column__text p {
          margin: 0 0 1.2rem;
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(32, 27, 22, 0.78);
        }

        .about-two-column__media :global(img) {
          width: 100%;
          border-radius: 28px;
          object-fit: cover;
          box-shadow: 0 28px 60px rgba(32, 27, 22, 0.16);
        }

        .about-stats {
          margin-top: 2.4rem;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.4rem;
        }

        .about-stats__item {
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(32, 27, 22, 0.08);
          border-radius: 18px;
          padding: 1.2rem 1rem;
          text-align: center;
          box-shadow: 0 18px 28px rgba(33, 27, 20, 0.08);
        }

        .about-stats__icon {
          font-size: 1.35rem;
          display: block;
          margin-bottom: 0.55rem;
        }

        .about-stats__label {
          display: block;
          font-size: 0.85rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(32, 27, 22, 0.62);
        }

        .about-stats__value {
          display: block;
          margin-top: 0.4rem;
          font-family: "Cormorant Garamond", "Times New Roman", serif;
          font-size: 1.4rem;
          color: #201b16;
        }

        .about-testimonials {
          background: rgba(255, 255, 255, 0.72);
        }

        .about-testimonials h2 {
          margin: 0 0 2rem;
          font-family: "Cormorant Garamond", "Times New Roman", serif;
          font-size: 2.2rem;
          letter-spacing: 0.05em;
          text-align: center;
          color: #1f1a15;
        }

        .about-press {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          font-family: "Playfair Display", "Times New Roman", serif;
          font-size: 1.1rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(33, 27, 20, 0.45);
          margin-bottom: 2.6rem;
        }

        .about-testimonials__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
        }

        .about-testimonials__grid article {
          background: rgba(255, 255, 255, 0.82);
          border-radius: 20px;
          padding: 1.8rem 2rem;
          border: 1px solid rgba(33, 27, 20, 0.08);
          box-shadow: 0 20px 36px rgba(33, 27, 20, 0.12);
        }

        .about-testimonials__grid p {
          margin: 0 0 1.6rem;
          font-size: 1.05rem;
          line-height: 1.8;
          color: rgba(32, 27, 22, 0.8);
        }

        .about-testimonials__grid footer {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(32, 27, 22, 0.6);
        }

        .about-testimonials__grid footer strong {
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          color: #201b16;
        }

        .about-features {
          background: rgba(32, 27, 22, 0.85);
          padding: 2.8rem 0;
          color: #f7f4ef;
        }

        .about-features__row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2.4rem;
        }

        .about-feature {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .about-feature__icon {
          font-size: 1.8rem;
        }

        .about-feature h3 {
          margin: 0 0 0.45rem;
          font-family: "Cormorant Garamond", "Times New Roman", serif;
          font-size: 1.35rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fefcfa;
        }

        .about-feature p {
          margin: 0;
          font-size: 0.95rem;
          color: rgba(255, 250, 242, 0.78);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .about-hero__content,
          .about-two-column {
            grid-template-columns: 1fr;
          }

          .about-hero__media,
          .about-two-column__media {
            order: 2;
          }

          .about-two-column__text {
            order: 1;
          }

          .about-stats {
            grid-template-columns: 1fr 1fr;
          }

          .about-features__row {
            grid-template-columns: 1fr;
            gap: 1.8rem;
          }
        }

        @media (max-width: 720px) {
          .about-container {
            padding: 0 1.5rem;
          }

          .about-hero {
            padding: 3.5rem 0 3rem;
          }

          .about-hero__text h1 {
            font-size: 2.4rem;
          }

          .about-press {
            flex-wrap: wrap;
            gap: 1.6rem;
            font-size: 0.95rem;
            letter-spacing: 0.18em;
          }

          .about-testimonials__grid {
            grid-template-columns: 1fr;
          }

          .about-stats {
            grid-template-columns: 1fr;
          }

          .about-feature {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
