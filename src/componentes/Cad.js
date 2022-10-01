import { useEffect, useState } from "react"
import Card from "./Card"
import './estilos.module.css'

export default function Cad() {
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[contatos, setContatos] = useState([])
    const[salvou, setSalvou] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/contatos')
        .then(data => data.json())
        .then(result => {
            setContatos(result)
            console.log(result)
        })
    },[salvou])

    function add() {
        if ( nome === '' || email === '' ) {
            alert('Todos os campos devem ser preenchidos.')
            return
        }
        var obj = {
            nome: nome,
            email: email
        }
        fetch('http://localhost:3000/contatos',
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(() => {
            alert('Contato cadastrado com sucesso.')
            setNome('')
            setEmail('')
            setSalvou(salvou === true ? false : true)
        })
    }

    return (
        <div>
            <h3>Cadastro de Contato</h3>
            <label className="label-control">Nome:</label>
            <input className="form-control" type="text" value={nome} onChange={e => setNome(e.target.value)}/>
            <label className="label-control">E-mail:</label>
            <input className="form-control" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <button className="btn btn-primary mt-3" onClick={add}>Add</button>
            <hr />
            <h3>Lista de Contatos</h3>
            {
                contatos.map((ct) => <Card id={ct.id} nome={ct.nome} email={ct.email} excluir={setSalvou} excluido={salvou}/>)
            }
        </div>
    )
}