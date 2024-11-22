import React from 'react';
const Contato = ({ nome, sobrenome, cpf, telefone, email }) => {
  return (
    <div style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
      <h3>{`Nome: ${nome} ${sobrenome}`}</h3>
      <p>{`CPF: ${cpf}`}</p>
      <p>{`Contato: ${telefone}`}</p>
      <p>{`Email: ${email}`}</p>
    </div>
  );
};
const App = () => {
  const contatos = [
    { nome: 'José', sobrenome: 'João', cpf: '000.000.000-00', telefone: '(84) 00000-0000', email: 'jj@email.com' },
    { nome: 'Maria', sobrenome: 'Silva', cpf: '111.111.111-11', telefone: '(84) 11111-1111', email: 'maria@email.com' },
    { nome: 'Carlos', sobrenome: 'Souza', cpf: '222.222.222-22', telefone: '(84) 22222-2222', email: 'carlos@email.com' },
    { nome: 'Fernanda', sobrenome: 'Pereira', cpf: '333.333.333-33', telefone: '(84) 33333-3333', email: 'fernanda@email.com' },
    { nome: 'Pedro', sobrenome: 'Almeida', cpf: '444.444.444-44', telefone: '(84) 44444-4444', email: 'pedro@email.com' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Contatos</h1>
      {contatos.map((contato, index) => (
        <Contato key={index} {...contato} />
      ))}
    </div>
  );
};

export default App;