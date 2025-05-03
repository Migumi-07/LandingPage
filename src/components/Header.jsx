import "../styles/Header.css";

import logo from "../images/logo.png";

function Header() {
  return (
    <>
      <header className="mainHeader">
        <img className="mainLogo" src={logo} alt="Logo Conecta Poly" />
      </header>
    </>
  );
}

export default Header;
