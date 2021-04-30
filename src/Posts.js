const postagens = [
  {img:"img/meowed.svg", nome:"meowed", postagem:"img/gato-telefone.svg", imgPerfilCurtidor:"img/respondeai.svg", userPerfilCurtidor:"respondeai", qntCurtidas:"outras 101.523 pessoas"},
  {img:"img/barked.svg", nome:"barked", postagem:"img/dog.svg", imgPerfilCurtidor:"img/adorable_animals.svg", userPerfilCurtidor:"adorable_animals", qntCurtidas:"outras 99.159 pessoas"}
]

export default function Posts(){
    return(
      <div class="posts">
        {postagens.map((elemento)=>
            <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={elemento.img} alt={elemento.nome} />
                {elemento.nome}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>
  
            <div class="conteudo">
              <img src={elemento.postagem} alt="imagem" />
            </div>
  
            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>
  
              <div class="curtidas">
                <img src={elemento.imgPerfilCurtidor} alt={elemento.userPerfilCurtidor} />
                <div class="texto">
                  Curtido por <strong>{elemento.userPerfilCurtidor}</strong> e <strong>{elemento.qntCurtidas}</strong>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )}