import Image from "next/image";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    bg: "#1877f2",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8.3v-3h2.2V9.5c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .17 2 .17v2.2h-1.1c-1.1 0-1.4.68-1.4 1.4v1.7h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    bg: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5m0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5m5.75-3.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 6" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    bg: "#ff0000",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.55 7.2a2.8 2.8 0 0 0-1.96-2C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.59.4a2.8 2.8 0 0 0-1.96 2A29.3 29.3 0 0 0 0 12a29.3 29.3 0 0 0 .49 4.8 2.8 2.8 0 0 0 2 2c1.7.4 8.5.4 8.5.4s6.9 0 8.59-.4a2.8 2.8 0 0 0 1.96-2A29.3 29.3 0 0 0 24 12a29.3 29.3 0 0 0-.49-4.8M9.75 15.02V8.98L15.5 12z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    bg: "#0a66c2",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.4c0-1.3 0-3-1.83-3s-2.11 1.43-2.11 2.9v5.5H9.39V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.36-1.84c3.6 0 4.27 2.37 4.27 5.44zm-14.9-13A2.07 2.07 0 1 1 7.62 5a2.07 2.07 0 0 1-2.07 2.42m1.79 13H4.77V9h3.57z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    bg: "#0f1115",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 3h4.2l4.03 5.55L15.79 3H21l-6.8 8.72L21 21h-4.24l-4.45-6.05L7.54 21H3l7-9.33z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Snapchat",
    href: "#",
    bg: "#fffc00",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2c3.29 0 5.58 2.24 5.58 5.4 0 3.19 1 5.37 2.16 6.5.28.27.3.7.08 1.02-.53.76-1.54 1.06-2.39 1.18-.28.04-.46.3-.35.54.38.83 1.32 1.22 2.07 1.44.4.12.63.58.47.98-.23.56-1.16.69-1.9.6-1.03-.13-1.83-.32-2.6.42-.74.71-1.64 1.66-3.22 1.66s-2.48-.95-3.22-1.66c-.77-.74-1.57-.55-2.6-.42-.74.09-1.67-.04-1.9-.6-.16-.4.07-.86.47-.98.75-.22 1.69-.61 2.07-1.44.11-.24-.07-.5-.35-.54-.85-.12-1.86-.42-2.39-1.18-.22-.32-.2-.75.08-1.02C5.42 12.77 6.43 10.59 6.43 7.4 6.43 4.24 8.71 2 12 2z" fill="#0f0f0f" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    bg: "#010101",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16.5 3.42A4.72 4.72 0 0 0 15.89 1h3.04a7.78 7.78 0 0 0 1.32 3.53 6.24 6.24 0 0 0 3.24.95v3.1a9 9 0 0 1-3.18-.58v6.53c0 3.54-2.64 6.47-6.7 6.47a6.05 6.05 0 0 1-6.16-6.17A6.09 6.09 0 0 1 12 8.24v3.26a2.86 2.86 0 0 0-1.93-.76 2.66 2.66 0 0 0-2.78 2.68 2.66 2.66 0 0 0 2.78 2.68c1.3 0 2.37-.9 2.66-2.08.08-.33.11-.7.11-1.05V1h3.66z" fill="#ee1d52" />
        <path d="M16.5 3.42A4.7 4.7 0 0 0 15.89 1h1.88a5.82 5.82 0 0 0 1 2.64A6.24 6.24 0 0 0 22 4.59v1.62A9 9 0 0 1 18.82 5.6v6.53c0 3.54-2.64 6.47-6.7 6.47a6.05 6.05 0 0 1-6.16-6.17A6.09 6.09 0 0 1 12 8.24v1.58a2.86 2.86 0 0 0-1.93-.76 2.66 2.66 0 0 0-2.78 2.68 2.66 2.66 0 0 0 2.78 2.68c1.3 0 2.37-.9 2.66-2.08.08-.33.11-.7.11-1.05v-8h3.66z" fill="#69c9d0" opacity=".6" />
      </svg>
    ),
  },
];

const footerColumns = [
  {
    title: "Information About",
    links: ["About Us", "Our Ecosystem", "3U1M Program", "Scholarship Program"],
  },
  {
    title: "Customer Services",
    links: [
      "Prospective Undergraduates",
      "Prospective Postgraduates",
      "Alumni",
      "International Students",
      "International Partnerships",
    ],
  },
  {
    title: "Quick Links",
    links: ["Get in Touch", "Careers", "Research Week 2024", "HR Department", "The Campus Shop"],
  },
];

const paymentLogos = [
  {
    name: "Mastercard",
    icon: (
      <svg viewBox="0 0 60 36" aria-hidden="true">
        <circle cx="24" cy="18" r="12" fill="#eb001b" />
        <circle cx="36" cy="18" r="12" fill="#f79e1b" opacity=".9" />
      </svg>
    ),
  },
  {
    name: "Visa",
    icon: (
      <svg viewBox="0 0 60 36" aria-hidden="true">
        <path d="M6 26l4.2-16h5.7l-4.2 16zm30.9-9.8c-.1-1.9-1.7-3.5-4.7-3.5-2.4 0-4.4.8-4.4.8l-.7 3.1s1.6-.7 3.6-.7c1.3 0 2.2.5 2.2 1.3s-.9 1.2-2.1 1.2h-1.5l-.7 2.7h1.4c1.2 0 2.4.5 2.4 1.6 0 1.6-2.3 2.1-3.4 2.1a9.64 9.64 0 0 1-3.8-.8l-.7 3c.9.3 2.4.6 4 .6 4.2 0 7.3-1.9 7.4-4.8.1-2-1.2-3.2-2.9-3.7 1.2-.5 2.5-1.5 2.3-3.1zm17.7-6.2h-4.6c-1.4 0-2 .8-2.3 1.6l-7 14.4h5.2l1-2.7h6.3l.6 2.7H59zm-6.9 9.3L50.8 13l1.1 5.3zM19.3 10l-3.4 16H21l3.4-16z" fill="#1a1f71" />
      </svg>
    ),
  },
  {
    name: "JazzCash",
    icon: (
      <svg viewBox="0 0 60 36" aria-hidden="true">
        <text x="12" y="20" fill="#d81f26" fontSize="12" fontWeight="600" fontFamily="Arial, sans-serif">Jazz</text>
        <text x="23" y="26" fill="#fdd306" fontSize="12" fontWeight="600" fontFamily="Arial, sans-serif">Cash</text>
      </svg>
    ),
  },
  {
    name: "Easypaisa",
    icon: (
      <svg viewBox="0 0 60 36" aria-hidden="true">
        <path d="M8 22c6-3 9-9 14-9 4 0 6.6 3 8.9 5.8 1.6 1.8 3.4 3.1 6.3 3.2-2.2 3.7-6.4 6-11.4 6-6.7 0-12.4-3.7-17.8-6z" fill="#6bc048" />
        <text x="21" y="24" fill="#0d341c" fontSize="10" fontWeight="600" fontFamily="Arial, sans-serif">easypaisa</text>
      </svg>
    ),
  },
  {
    name: "Mobicash",
    icon: (
      <svg viewBox="0 0 60 36" aria-hidden="true">
        <text x="10" y="22" fill="#e31837" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">mobi</text>
        <text x="31" y="22" fill="#f39200" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">cash</text>
      </svg>
    ),
  },
  {
    name: "DigitalPay",
    icon: (
      <svg viewBox="0 0 60 36" aria-hidden="true">
        <rect x="10" y="9" width="12" height="18" rx="2" fill="#0052cc" />
        <rect x="22" y="9" width="12" height="18" rx="2" fill="#2684ff" />
        <text x="36" y="23" fill="#0f1a3a" fontSize="10" fontWeight="700" fontFamily="Arial, sans-serif">DigitalPay</text>
      </svg>
    ),
  },
];

const contactDetails = [
  {
    label: "+923001234567",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.62 10.79a15 15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.58.57 1 1 0 0 1 1 1v3.51a1 1 0 0 1-1 1 17 17 0 0 1-17-17 1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.58 1 1 0 0 1-.25 1z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "info@shoesco.pk",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m0 2v.24l8 5 8-5V7zm16 10V9.76l-7.55 4.72a1 1 0 0 1-1 0L4 9.76V17z" fill="currentColor" />
      </svg>
    ),
  },
];

const policyLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="lux-footer" role="contentinfo">
      <div className="lux-footer__gradient" aria-hidden="true" />
      <div className="lux-footer__container">
        <div className="lux-footer__social">
          <h2 className="lux-footer__social-title">Follow ShoesCo</h2>
          <div className="lux-footer__social-icons">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="lux-footer__social-button"
                aria-label={`Visit ${item.name}`}
                style={{ background: item.bg }}
              >
                {item.icon}
                <span className="sr-only">{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="lux-footer__main">
          <div className="lux-footer__columns">
            {footerColumns.map((column) => (
              <div key={column.title} className="lux-footer__column">
                <h3 className="lux-footer__heading">{column.title}</h3>
                <ul className="lux-footer__list">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a className="lux-footer__link" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lux-footer__product" aria-hidden="true">
            <div className="lux-footer__product-light" />
            <div className="lux-footer__product-base" />
            <div className="lux-footer__product-items">
              <div className="lux-footer__bottle">
                <Image
                  src="/images/perfumes/perfume5.jfif"
                  alt="Sneaker perfume bottle"
                  width={140}
                  height={260}
                  sizes="(max-width: 768px) 40vw, 140px"
                />
              </div>
              <div className="lux-footer__bottle lux-footer__bottle--gold">
                <Image
                  src="/images/perfumes/perfume5.jfif"
                  alt="Gold sneaker perfume bottle"
                  width={140}
                  height={260}
                  sizes="(max-width: 768px) 40vw, 140px"
                />
              </div>
              <div className="lux-footer__sneaker">
                <Image
                  src="/images/shoes/shoes4.jfif"
                  alt="White sneaker"
                  width={320}
                  height={240}
                  sizes="(max-width: 768px) 55vw, 320px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lux-footer__payments">
          <h3 className="lux-footer__payments-title">Payments &amp; Shipping</h3>
          <div className="lux-footer__payment-logos">
            {paymentLogos.map((logo) => (
              <div key={logo.name} className="lux-footer__payment-logo" aria-label={logo.name} role="img">
                {logo.icon}
              </div>
            ))}
          </div>
        </div>

        <div className="lux-footer__contact-row">
          <div className="lux-footer__brand-block">
            <div className="lux-footer__logo-mark" aria-hidden="true">
              <svg viewBox="0 0 64 64">
                <path d="M14 38c7 2 14 2 21-.8 4.4-1.9 8.2-5.3 10.8-10.6 1.1-2.2 2.4-5 1-7.1-1.4-2-4.8-2.5-7.4-2.3a35 35 0 0 0-6.8 1L27 19c-6.6-2.4-12.2 1.1-14.7 7.5C10.2 31.5 10.7 36 14 38z" fill="#ffffff" opacity=".9" />
                <path d="M18 45c9.3 3.2 18.4 3.2 27 0-2.7 5.1-8 8.7-13.5 8.7S20.7 50.1 18 45z" fill="#cfa448" />
              </svg>
            </div>
            <div className="lux-footer__brand-text">
              <span className="lux-footer__brand-name">ShoesCo</span>
              <span className="lux-footer__brand-tagline">Sneaker Perfumes</span>
            </div>
          </div>

          <div className="lux-footer__contact-list">
            {contactDetails.map((item) => (
              <div key={item.label} className="lux-footer__contact-item">
                <span className="lux-footer__contact-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="lux-footer__policy-links">
            {policyLinks.map((link) => (
              <a key={link.label} href={link.href} className="lux-footer__link">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="lux-footer__security">
          <div className="lux-footer__security-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 2l7 3v6.7c0 4.6-3 8.9-7 10.3-4-1.4-7-5.7-7-10.3V5z" fill="#cfa448" />
              <path d="M12 6a3 3 0 0 0-3 3v1.5a3 3 0 0 0 1.5 2.6V16h3v-2.9A3 3 0 0 0 15 10.5V9a3 3 0 0 0-3-3z" fill="#1c253e" />
            </svg>
          </div>
          <div className="lux-footer__security-copy">
            <span className="lux-footer__security-title">Safe &amp; Secure Shopping</span>
            <p>Your information is protected with the highest level of security.</p>
          </div>
        </div>

        <div className="lux-footer__divider" aria-hidden="true" />

        <div className="lux-footer__bottom">
          <p>© 2024 ShoesCo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
