import styles from "./estilos.module.css"
import { useState } from "react"

export default function Edita(props) {
    const[nome, setNome] = useState(props.nome)
    const[email, setEmail] = useState(props.email)
 
    function ok(id) {
        if ( nome === '' || email === '' ) {
            alert('Todos os campos devem ser preenchidos.')
            return
        }
        var obj = {
            id: id,
            nome: nome,
            email: email
        }
        fetch(`http://localhost:3000/contatos/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(() => {
            alert('Contato alterado com sucesso.')
            setNome('')
            setEmail('')
            props.excluir(props.excluido == true ? false : true)
            props.editar(props.editado == true ? false : true)
        })
    }    
    return (
        <div>
            <input defaultValue={props.id}/>
            <input value={nome} onChange={e => setNome(e.target.value)}/>
            <input value={email} onChange={e => setEmail(e.target.value)}/>
            <button className={styles.bt} onClick={() => ok(props.id)}>Ok</button>
        </div>
        )
    }
