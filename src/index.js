import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import Corpo from "./Corpo";
import Mobile from "./Mobile";
function App(){
    return(
        <>
            <Navbar />
            <Corpo />
            <Mobile />    
        </>
    )
}

const app = App();
ReactDOM.render(app, document.querySelector(".root"));