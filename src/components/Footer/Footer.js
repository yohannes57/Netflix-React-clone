import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer_social_link">
        <i class="fa-brands fa-facebook"></i>
        {/* <span>facebook</span> */}
        <i class="fa-brands fa-instagram"></i>
        {/* <span>instagram</span> */}
        <i class="fa-brands fa-twitter"></i>
        {/* <span>twitter</span> */}
        <i class="fa-brands fa-youtube"></i>
        {/* <span>youtube</span> */}
      </div>
      <div className="footer_links">
        <div className="footer_links_col1">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notions</li>
            <li>Do not Sell or Share my Personal Information</li>
          </ul>

          <div>
            <h4 className="service-code">Service-Code</h4>
            <p copy-right> &copy 1979-2023 Netflix,Inc.</p>
          </div>
        </div>
        <div className="footer_links_col2">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div className="footer_links_col3">
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate information</li>
          </ul>
        </div>
        <div className="footer_links_col4">
          <ul>
            <li>Media center</li>
            <li>privacy</li>
            <li>contact us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
