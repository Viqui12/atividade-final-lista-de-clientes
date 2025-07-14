import { useState } from "react";
import Adici from "../Adici";

// Componente de botão reutilizável
const MeuBotao = ({ texto, acao }) => {
  return <button onClick={() => acao(texto)}>{texto}</button>;
};

function ClientForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [clientes, setClientes] = useState([]);

  const handleSubmit = (msg) => {
    if (nome.trim() && telefone.trim()) {
      const novoCliente = { nome, telefone };
      setClientes([...clientes, novoCliente]);
      setNome("");
      setTelefone("");
      alert(`Cliente adicionado: ${msg}`);
    }
  };

  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label htmlFor="telefone">Telefone</label>
      <input
        type="tel"
        name="telefone"
        id="telefone"
        value={telefone}
        onChange={(e) => {
          const valor = e.target.value.replace(/\D/g, "").slice(0, 11);
          setTelefone(valor);
        }}
        placeholder="Ex: 31991234567"
        maxLength={11}
      />

      

    <Adici texto="Adicionar" acao={handleSubmit} />

      {/* Lista de clientes */}
      <ul>
        {clientes.map((cliente, index) => (
          <li key={index}>
            <strong>{cliente.nome}</strong> — {cliente.telefone}
          </li>
        ))}
      </ul>
    </form>
  );
}export default ClientForm;