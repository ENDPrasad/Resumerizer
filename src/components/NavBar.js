import logo from "../assets/Resumerizer_logo.png";

import "../App.css";

const NavBar = () => {
  return (
    <header className="section-header">
      <div className="logo">
        <img className="img-logo" src={logo} alt="Resumerizer logo" />
      </div>
    </header>
  );
};

export default NavBar;
