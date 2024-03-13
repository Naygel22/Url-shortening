type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps) {
  return <button className="navBarButton">{text}</button>;
}

export function NavBar() {
  return (
    <nav className="navBar">
      <div className="logoAndButtonsContainer">
        <img
          src="public/images/logo.svg"
          alt="shortly-logo"
          className="logoImg"
        />
        {["Features","Pricing","Resources"].map(el=><Button key={el} text={el} />)}
      </div>

      <div className="logoAndButtonsContainer">
        {["Login","Sign Up"].map(el=><Button key={el} text={el} />)}
        
      </div>
    </nav>
  );
}
