import Usuario from "./Usuario";
import Links from "./Links";
import Copyright from "./Copyright";

const sugestoes = [
  {img:"img/bad.vibes.memes.svg", user:"bad.vibes.memes", mutual:"Segue você"},
  {img:"img/chibirdart.svg", user:"chibirdart", mutual:"Segue você"},
  {img:"img/razoesparaacreditar.svg", user:"razoesparaacreditar", mutual:"Novo no Instagram"},
  {img:"img/adorable_animals.svg", user:"adorable_animals", mutual:"Segue você"},
  {img:"img/smallcutecats.svg", user:"smallcutecats", mutual:"Segue você"},
]

export default function Sugestoes(){
    return(
      <div class="sidebar">
        <Usuario username="catanacomics" name="Catana" img="img/catanacomics.svg" alt="catanacomics"/>
        <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugestoes.map((elemento)=>
        <div class="sugestao">
          <div class="usuario">
            <img src={elemento.img} alt={elemento.user}/>
            <div class="texto">
              <div class="nome">
                {elemento.user}
              </div>
              <div class="razao">
                {elemento.mutual}
              </div>
            </div>
          </div>
          <div class="seguir">Seguir</div>
        </div>
        )}
        </div>
        <Links />
        <Copyright />
        </div>
    )}