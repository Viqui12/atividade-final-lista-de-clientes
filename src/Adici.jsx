const Adici= ({ texto, acao }) => {
  return (
    <button type="button" onClick={() => acao(texto)}>
      {texto}
      
    </button>
  );
};

export default Adici;