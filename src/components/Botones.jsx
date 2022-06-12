import Ficha from "../docs/FICHA-LIBERTARIOS.pdf";
import Ideario from "../docs/Ideario-PLP.pdf";
import "../css/botones.css";

const Botones = () => {

    const Registrate = "https://forms.gle/P59XysqxDXCyzHux7";

    const ClickIdeario = () => {
        window.open(Ideario);
    }
    const ClickFicha = () => {
        window.open(Ficha);
    }

    return (  
        <div className="container">
            <div className="contenedor__botones">
                <button className="btn btn-warning btn-lg">
                    <i className="fas fa-book"></i>
                    <a href={Registrate} target="__blank"> Registrate</a>
                </button>
                <button className="btn btn-warning btn-lg" onClick={ClickFicha}>
                    <i className="fas fa-pencil-alt"></i> Ficha de afilación
                </button>
                <button className="btn btn-warning btn-lg" onClick={ClickIdeario}>
                    <i className="fas fa-lightbulb"></i> Ideario
                </button>
            </div>
        </div>
    );
}
 
export default Botones;