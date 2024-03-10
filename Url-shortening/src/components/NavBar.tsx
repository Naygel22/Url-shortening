type ButtonProps = {
  text: string;
}; 

function Button({text}: ButtonProps) {
  return (
    <button>{text}</button>
  )
}



export function NavBar() {
  return (
    <nav className="navBar">
      <div className="logoAndButtonsContainer">
        <img src="public/images/logo.svg" alt="shortly-logo" className="logoImg"/>
        <Button text = 'Features'/>
        <Button text = 'Pricing'/>
        <Button text = 'Resources'/>
      </div>

      <div className="logoAndButtonsContainer">
        <Button text = "Login"/>
        <Button text = "Sign Up"/>
      </div>
      
    </nav>
    
  )
}
