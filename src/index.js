import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import Stories from "./Stories";
import Posts from "./Posts";
import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import Links from "./Links";
import Copyright from "./Copyright";
import Mobile from "./Mobile";
function App(){
    return(
        <>
            <Navbar />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <div class="sidebar">
                    <Usuario />
                    <Sugestoes />
                    <Links />
                    <Copyright />
                </div>
            </div>
            <Mobile />    
        </>
    )
}

const app = App();
ReactDOM.render(app, document.querySelector(".root"));