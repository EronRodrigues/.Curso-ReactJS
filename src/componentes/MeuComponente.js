import './componentes.css'
export default function MeuComponente() {
    function ola() {
        var nome = document.getElementsByTagName("input")[0].value
        var idade = document.getElementsByTagName("input")[1].value
        var msg = 'maior'
        if ( idade < 18 ) 
            msg = 'menor'
        alert(`Olá ${nome}, você tem ${idade} anos de vida, portanto é ${msg} de idade.`)
    }

    return (
        <div className="container">
            <h1>MeuComponente</h1>
            <hr />
            <label className="instruction">Nome</label>
            <input type="text" placeholder="Informe o nome." />
            <hr />
            <label className="instruction">Idade</label>
            <input type="number" placeholder="Informe a sua idade." />
            <button onClick = {ola}>Clique aqui</button>
        </div>
    )
}