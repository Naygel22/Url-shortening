export function Footer() {
  return (
    <div className="footer">
      <div className="footerLogo">Shortly</div>

      <div className="footerLinks column3">
        <div className="footerLinksTitle">Features</div>
        <div>Link shortening</div>
        <div>Branded Links</div>
        <div>Analytics</div>
      </div>

      <div className="footerLinks column4">
        <div className="footerLinksTitle">Resources</div>
        <div>Blog</div>
        <div>Developers</div>
        <div>Support</div>
      </div>

      <div className="footerLinks column5">
        <div className="footerLinksTitle">Company</div>
        <div>About</div>
        <div>Our Team</div>
        <div>Careers</div>
        <div>Contact</div>
      </div>

      <div className="footerIcons column6">
        <img src="public/images/icon-facebook.svg" alt="facebook icon" />
        <img src="public/images/icon-twitter.svg" alt="twitter icon" />
        <img src="public/images/icon-pinterest.svg" alt="pinterest icon" />
        <img src="public/images/icon-instagram.svg" alt="instagram icon" />
      </div>
    </div>
  );
}