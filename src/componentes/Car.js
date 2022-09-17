import './card.css'
export default function Car(props) {
    return (
        <div className="container2">
            <div className="container-foto">
                <img src={require(`../imagens/${props.foto}`)} alt="Imagem não existente." />   
            </div>
            <div>
                <p><span>Placa:</span> {props.placa}</p>
                <p><span>Modelo:</span> {props.modelo}</p>
                <p><span>Marca:</span> {props.marca}</p>
            </div>
        </div>
    )
}