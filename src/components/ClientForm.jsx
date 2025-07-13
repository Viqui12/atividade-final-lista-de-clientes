import { useState } from "react";

function ClientForm() {
  // Estados para armazenar os dados do formulário
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  // Estado para guardar a lista de clientes cadastrados
  const [clientes, setClientes] = useState([]);

  // Função que será chamada quando o botão "Adicionar" for clicado
  const handleSubmit = () => {
    if (nome.trim() && telefone.trim()) {
      const novoCliente = { nome, telefone };

      // Adiciona novo cliente à lista existente
      setClientes([...clientes, novoCliente]);

      // Limpa os campos do formulário
      setNome("");
      setTelefone("");
    }
  };

  return (
    <form>
      {/* Campo de nome */}
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      {/* Campo de telefone */}
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
    // Só permite números e até 11 dígitos
      placeholder="Ex: 31991234567"
  maxLength={11}

        
      />
      

      {/* Botão que adiciona cliente */}
      <button type="button" onClick={handleSubmit}>
        Adicionar
      </button>

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
}

export default ClientForm;





