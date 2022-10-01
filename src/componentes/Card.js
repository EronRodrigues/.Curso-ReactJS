import styles from "./estilos.module.css"
import { useState } from "react"
import Edita from "./Edita"

export default function Card( props)  {
    const[showEditar, setShowEditar] = useState(false)

    function excluir(id) {
        fetch(`http://localhost:3000/contatos/${id}`,
        {
            method: 'DELETE',
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(() => {
            alert('Contato exclúido com sucesso.')
            props.excluir(props.excluido == true ? false : true)
        })
    }

    function editar() {
        setShowEditar(showEditar == true ? false : true)
    }
    
    return  (
        <div className={styles.container}>
            <label className="label-control">Nome:<span> {props.nome}</span></label>
            <label className="label-control">E-mail:<span> {props.email}</span></label>
            <button className={styles.bt} onClick={() => excluir(props.id)}>Excluir</button>
            <button className={styles.bt} onClick={editar}>Editar</button>
            {
              showEditar == true ? <Edita  id={props.id} nome={props.nome} email={props.email} excluir={props.excluir} excluido={props.excluido} editar={showEditar} editado={setShowEditar}/> : null
            }
            { showEditar}
        </div>
    )
}