import "../css/jumbotron.css";
import imagen from '../assets/imagen.jpg';

const Jumbotron = () => {
    return (  
        <div className="jumbotron my-3" id="inicio">
            <div className="container">
                <h1 className="h1 titulo">Bienvenido al partido libertario peruano</h1>
                <hr className="my-4" />
                <p className="lead parrafo">El Partido Libertario Peruano surge como respuesta y necesidad de la ciudadanía al secuestro que de sus derechos y libertades fundamentales se ha venido realizando desde las diversas instancias del poder político. <br />
                Somos un partido que propone por tanto establecer una verdadera y auténtica república. </p>
                <img className='img-fluid' src={imagen} alt="Partido libertario peruano" />
            </div>
        </div>
    );
}
 
export default Jumbotron;