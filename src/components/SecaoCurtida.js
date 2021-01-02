import React from "react";

const SecaoCurtida = ({ nomeArtigo, qtdCurtidas, setInformacoesArtigo }) => {
  const curteArtigo = async () => {
    const result = await fetch(`/api/artigos/${nomeArtigo}/curtida`, {
      method: "post",
    });
    const body = await result.json();
    setInformacoesArtigo(body);
  };
  return (
    <div id="upvotes-section">
      <button onClick={() => curteArtigo()}>Curtir</button>
      <p>Este artigo foi curtido {qtdCurtidas} vezes</p>
    </div>
  );
};

export default SecaoCurtida;
