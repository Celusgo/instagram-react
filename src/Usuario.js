export default function Usuario(props){
    return(
        <div class="usuario">
        <img src={props.img} alt={props.alt} />
        <div class="texto">
          <strong>{props.username}</strong>
          {props.name}
        </div>
      </div>
    )
}