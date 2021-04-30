
  const stories = [
    {img:"img/9gag.svg", nome:'9gag' },
    {img:"img/meowed.svg",nome:'mewoed'},
    {img:"img/barked.svg",nome:'barked'},
    {img:"img/nathanwpylestrangeplanet.svg",nome:'nathanwpylestrangeplanet'},
    {img:"img/wawawicomics.svg",nome:'wawawicomics'},
    {img:"img/respondeai.svg",nome:'respondeai'},
    {img:"img/filomoderna.svg",nome:'filomoderna'},
    {img:"img/memeriagourmet.svg",nome:'memeriagourmet'} 
  ]

  export default function Stories(){

    return(
        <div class="stories">
          {stories.map((elemento)=>
          <div class="story">
            <div class="imagem">
              <img src={elemento.img} alt={elemento.nome}/>
            </div>
            <div class="usuario">
              {elemento.nome}
            </div>
          </div>
          )}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
      </div>
    )
}