import Componente4 from "./componente4"

export default function Componente3(props) {
    return (
        <div>
            <h1>Componente 3</h1>
            <p>Usuário: {props.user}</p>
            <hr/>
            <Componente4 user={props.user}/>
        </div>
    )
}