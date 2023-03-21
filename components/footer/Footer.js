import Nav from "../navi/Nav.js";

export default function Footer() {
  return (
    <footer className="layout">
      <div className="layout-item">
        <section>
          <img src="/footer-logo.png" alt="little lemon logo" />
        </section>
        <section>
          <h3>Doormat Navigation</h3>
          <Nav></Nav>
        </section>
        <section>
          <h3>Contact</h3>
          <ul>
            <li>43 Hazel st. Chicago IL US</li>
            <li>(+213) 789-792-2679</li>
            <li>contact@little.lemon.com</li>
          </ul>
        </section>
        <section>
          <h3>Social Media Links</h3>
          <ul>
            <li>Follow on Instagram</li>
            <li>Follow on Twitter</li>
            <li>Follow on Facebook</li>
            <li>Subscribe on Youtube</li>
          </ul>
        </section>
      </div>
    </footer>
  );
}