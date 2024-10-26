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
  nome: string;
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

    // buscar os dados do backEnd para produtos
    fetch("https://one022a-marketplace2.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados));

    // buscar os dados do backEnd para usuarios
    fetch("https://one022a-marketplace2.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados));
  }, []);

  return (
    <>
      <h1>{nome}</h1>
      <div className="produtos-container">
        {produtos.map(produto => (
          <div key={produto.id} className="produto-item">
            <h1>{produto.nome}</h1>
            <div className='container-imagem'>
              <img src={produto.imagem} alt="Imagem do celular" />
            </div>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
          </div>
        ))}
      </div>
      <div className="usuarios-container">
        {usuarios.map(usuario => (
          <div key={usuario.id} className="usuario-item">
            <h1>{usuario.nome}</h1>
            <p>{usuario.email}</p>
            <p>{usuario.created_at}</p>
            <p>{usuario.updated_at}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;




