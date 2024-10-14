import { useEffect, useState } from 'react'
import './App.css'
type ProdutoType = {
  id:number,
  nome:string,
  preco:string,
  descricao:string,
  imagem:string
}

function App() {
  const [nome,  setNome] = useState("")
  const [produtos, setProdutos] = useState<ProdutoType []>([])
  //useEffects(o que fazer, quando fazer) []+=> hora do carregamento da página
  useEffect(()=>{
    setNome("Guilherme Terenciani")
    // buscar os dados do backEnd
    fetch("https://one022a-marketplace2.onrender.com/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>setProdutos(dados))
    // colocar em uma variável
  },[])

  return (
    <>
     <h1>{nome}</h1>
     <div className="produtos-container">
      {
        produtos.map(produto=> {
          return(
            <div key={produto.id} className="produto-item"> 
            <h1>{produto.nome}</h1>
            <img src={produto.imagem} alt="Imagem do celular"></img>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
          </div>
          )
        })
      }

     </div>
    </>
  )
}

export default App

