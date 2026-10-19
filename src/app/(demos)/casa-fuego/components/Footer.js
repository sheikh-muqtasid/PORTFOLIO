export default function Footer() {
  return (
    <footer className="cf-footer">
      <div className="cf-footer-inner">
        <div className="cf-footer-top">
          <div>
            <h3 className="cf-display">Casa Fuego</h3>
            <p>
              A family-run taqueria &amp; cantina serving slow-marinated tacos, hand-shaken
              margaritas, and marigold-lit evenings in Houston&apos;s Montrose neighborhood.
            </p>
          </div>
          <nav aria-label="Footer">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#story">Our Story</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#reservations">Reservations</a>
              </li>
              <li>
                <a href="#visit">Visit Us</a>
              </li>
            </ul>
          </nav>
          <div>
            <h4>Find Us</h4>
            <address>
              2418 Dunlavy St
              <br />
              Houston, TX 77006
              <br />
              <a href="tel:+17135550237">(713) 555-0237</a>
            </address>
          </div>
        </div>

        <div className="cf-demo-banner" role="note">
          <p>
            <strong>Concept demo</strong> — a fictional restaurant website designed by Sheikh
            Muqtasid. Casa Fuego isn&apos;t a real restaurant; the address, phone number, menu, and
            hours are made up for this design.
          </p>
        </div>

        <p className="cf-copyright">
          © 2026 Casa Fuego (fictional). Website design concept by Sheikh Muqtasid.
        </p>
      </div>
    </footer>
  );
}
