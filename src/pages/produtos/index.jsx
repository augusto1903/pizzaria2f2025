import axios from "axios"
const Produtos = () => {
    //consumo de um endpoint com as pizzas
    axios.get("http://viacep.com.br/ws/01010000/json")
    .then(responde=>{
        console.log(Response.data)
    })


    // Iteraçãoi da lista de pizzas
    const ListaPizzas = pizzas.map(pizza=><li>{pizza}</li>)
    return (
        <div>
            <ul>
             {ListaPizzas}
            </ul>
        </div>
    )
}

export default Produtos