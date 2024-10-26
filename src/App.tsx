import { useEffect, useState } from 'react';
import './App.css';

type ProdutoType = {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
  imagem: string;
};

type UserType = {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};

function App() {
  const [nome, setNome] = useState("");
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const [usuarios, setUsuarios] = useState<UserType[]>([]);

  useEffect(() => {
    setNome("Guilherme Terenciani");

   
    fetch("https://one022a-marketplace-001o.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados));

  
    fetch("https://one022a-marketplace-001o.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados));
  }, []);

  return (
    <>
      <h1 className="app-title">Cadastro de produtos e usuários</h1>
      <div className="main-container">
        <div className="produtos-container">
          <h2 className="section-header">Produtos</h2> 
          {produtos.map(produto => (
            <div key={produto.id} className="produto-item">
              <h1>{produto.nome}</h1>
              <div className='container-imagem'>
                <img src={produto.imagem} alt="Imagem do produto" />
              </div>
              <p>{produto.preco}</p>
              <p>{produto.descricao}</p>
            </div>
          ))}
        </div>
        
        <div className="usuarios-container">
          <h2 className="section-header">Usuários</h2> 
          {usuarios.map(usuario => (
            <div key={usuario.id} className="usuario-item">
              <h1>{usuario.name}</h1>
              <p>{usuario.email}</p>
              <p>{usuario.created_at}</p>
              <p>{usuario.updated_at}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;



