const Produtos = () => {
    //Objeto com a lista de pizzas
    const pizza = [
        'Pizza de Muçarela',
        'Pizza de Calabresa',
        'Pizza Baiana', 'Pizza Quatro Queijos'
    ]
    // Iteraçãoi da lista de pizzas
    const ListaPizzas = pizzas.map(pizza=><li>{pizza}</li>)
    return (
        <div>
            <ul>
                <li>Pizza De Muçarela</li>
                <li>Pizza de Calabreza</li>
                <li>Pizza Portuguesa</li>
                <li>Pizza Baiana</li>
            </ul>
        </div>
    )
}

export default Produtos