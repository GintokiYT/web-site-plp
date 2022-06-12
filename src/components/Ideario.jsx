import "../css/ideario.css";
import ideario from "../docs/Ideario-PLP.pdf";

const Ideario = () => {
    
    return (  
        <div className="container" id="ideario">
            <h2 className="titulo__ideario text-center my-3">Ideario</h2>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={ideario} allowFullScreen title="Facebook"></iframe>
            </div>
        </div>
    );
}
 
export default Ideario;