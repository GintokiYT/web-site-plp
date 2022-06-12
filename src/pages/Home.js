import { Fragment } from "react";

import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Botones from "../components/Botones";
import Videos from "../components/Videos";
import Footer from "../components/Footer";
import Ideario from "../components/Ideario";

const Home = () => {
    return ( 
        <Fragment>
            <Header />
            <Jumbotron />
            <Botones />
            <Videos />
            <Ideario />
            <Footer />
        </Fragment>
    );
}
 
export default Home;