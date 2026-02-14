import "./Footer.css";
import logo from "../../assets/vmt-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img
        src={logo}
        alt="Viral Marketing Trends"
        className="footer-logo"
      />

      <p>Pune-based digital marketing agency focused on measurable growth.</p>

      <a
        href="https://viralmarketingtrends.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Main Website →
      </a>
    </footer>
  );
}
