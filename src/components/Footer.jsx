import "../css/footer.css";

const Footer = () => {
    return (  
        <footer className="footer mt-3">
            <div className="container">
                <div className="row m-0">
                    <div className="col-md-6">
                        <div className="contacto">
                            <a href="https://api.whatsapp.com/send?phone=51958145472" target="__blank">
                                <p><i className="fab fa-whatsapp mb-4"></i> Whatsapp</p>
                                +51958145472
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contacto">
                            <p style={{color:"#f4dc00", fontWeight:"600"}}>Redes sociales</p>
                            <div className="redes__sociales mt-2">
                                <a href="https://www.facebook.com/PP000317" target="__blank">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/partidolibertariope/" target="__blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://twitter.com/Palipeperu" target="__blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCOGgceMZLxEtD45KNNfb9zA" target="__blank">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <p className="h6 ml-5" style={{color:"#f4dc00"}}>Copyright &copy; 2022 - Partido Libertario Peruano</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;