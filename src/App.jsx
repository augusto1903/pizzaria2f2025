import { useState} from "react";

function App() {

  const [nome,setNome] = useState("Memphis")

  // var nome = "Neymar Jr";

const Formulario = () => {
  return (
    <div>
      <input
      className="nome"
      name = "nome"
      onChange={(e)=>{nome=e.target.value}}
      placeholder="Digite um nome..."
      type="text"/>
      <button 
      className="botao"
      onClick={()=>{alert(nome)}}>
        CLIQUE AQUI
      </button>
    </div>
  )
}

  return (
    <div>
      <h3>Pizzaria 2F</h3>
      <Formulario/>
    </div>
  )
}

export default App