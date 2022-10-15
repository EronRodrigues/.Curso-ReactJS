import Componente3 from "./componente3"

export default function Componente2(props) {
    return (
        <div>
            <h1>Componente 2</h1>
            <p>Usuário: {props.user}</p>
            <hr/>
            <Componente3 user={props.user}/>
        </div>
    )
}