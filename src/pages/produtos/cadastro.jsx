import './produtos.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CadastroProduto = () => {
    //estado para guardar dados
    const [dados, setDados] = useState([])

    const montaJson = () => {
        setDados({
        "nome":nome.value,
        "descricao":descricao.value,
        "tipo":tipo.value,
        "categoria_id":categoria_id.value,
    })
    alert(JSON.stringify(dados))
}   
    return (
        <div className="CadastroProduto">
    <imput type="text" placeholder='0' id="id" disabled/>
    <imput type="text" placeholder='Nome do Produto' id="nome"/>
    <imput type="text" placeholder='Descrição' id="descricao"/>
    <imput type="text" placeholder='0.00' id="preco"/>
    <imput type="text" placeholder='tipo do produto' id="tipo"/>
    <imput type="text" placeholder='1' id="categoria_id" disabled/>
  
    <imput type="button" value={"Cadastrar"}
       onClick={() => {alertJson()}} />
    </div>
    )
}
export default CadastroProduto

