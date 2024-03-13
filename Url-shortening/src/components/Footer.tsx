const footerLinks={
  column1: {
    title: "Features",
    links: ["Link shortening","Branded Links","Analytics"]
  },
  column2: {
    title: "Resources",
    links: ["Blog","Developers","Support"]
  },
  column3: {
    title: "Company",
    links: ["About","Our Team","Careers", "Contact"]
  }
}

export function Footer() {
  return (
    <div className="footer">
      <div className="footerLogo">Shortly</div>

      <div className="footerLinks column3">
        <div className="footerLinksTitle">{footerLinks.column1.title}</div>
      {footerLinks.column1.links.map(el=> <div key={el}>{el}</div>)} 
       
      
      </div>

      <div className="footerLinks column4">
        <div className="footerLinksTitle">{footerLinks.column2.title}</div>
        {footerLinks.column2.links.map(el=> <div key={el}>{el}</div>)}
      </div>

      <div className="footerLinks column5">
        <div className="footerLinksTitle">{footerLinks.column3.title}</div>
        {footerLinks.column3.links.map(el=> <div key={el}>{el}</div>)} 
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