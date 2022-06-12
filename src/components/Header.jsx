import logo from "../assets/logo.png";
import "../css/header.css";

const Header = () => {
    return (  
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img className="img__logo" src={logo} alt="Logo PLP" />
                        <span className="contenido"></span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="nav__items collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav lista__items">
                            <li className="nav-item">
                                <a className="nav-link" href="#inicio">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#videos">Videos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#ideario">Ideario</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Redes sociales
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/">
                                        <i className="fab fa-facebook"></i>
                                        <a className="item__redes" href="https://www.facebook.com/PP000317" target="__blank"> Facebook</a>
                                    </a>
                                    <a className="dropdown-item" href="/">
                                        <i className="fab fa-instagram"></i>
                                        <a className="item__redes" href="https://www.instagram.com/partidolibertariope/" target="__blank"> Instagram</a>
                                    </a>
                                    <a className="dropdown-item" href="/">
                                        <i className="fab fa-twitter"></i>
                                        <a className="item__redes" href="https://twitter.com/Palipeperu" target="__blank"> Twitter</a>
                                    </a>
                                    <a className="dropdown-item" href="/">
                                        <i className="fab fa-youtube"></i>
                                        <a className="item__redes" href="https://www.youtube.com/channel/UCOGgceMZLxEtD45KNNfb9zA" target="__blank"> Youtube</a>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;