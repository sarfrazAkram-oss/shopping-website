export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        <div className="site-footer__features">
          <div className="site-footer__feature" aria-label="Fast Delivery">
            <span className="site-footer__icon" aria-hidden="true">⚡</span>
            <span>Fast Delivery</span>
          </div>
          <div className="site-footer__feature" aria-label="Premium Quality">
            <span className="site-footer__icon" aria-hidden="true">✔</span>
            <span>Premium Quality</span>
          </div>
          <div className="site-footer__feature" aria-label="Secure Payments">
            <span className="site-footer__icon" aria-hidden="true">🔒</span>
            <span>Secure Payments</span>
          </div>
        </div>
        <div className="site-footer__meta">
          <div className="site-footer__legal">
            <p>© 2026 SHOESCO. All rights reserved.</p>
            <div className="site-footer__links">
              <a href="#">Privacy Policy</a>
              <span aria-hidden="true">|</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="site-footer__social" aria-label="Social media">
            <a href="#" aria-label="Visit Facebook">Facebook</a>
            <a href="#" aria-label="Visit Twitter">Twitter</a>
            <a href="#" aria-label="Visit Instagram">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
