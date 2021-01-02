import React, { useState } from "react";

const FormularioAdicionaComentario = ({ nomeArtigo, setInformacoesArtigo }) => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [textoComentario, setTextoComentario] = useState("");

  const adicionaComentario = async () => {
    const result = await fetch(`/api/artigos/${nomeArtigo}/novo-comentario`, {
      method: "post",
      body: JSON.stringify({
        nomeUsuario: nomeUsuario,
        texto: textoComentario,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    setInformacoesArtigo(body);
    setTextoComentario("");
    setNomeUsuario("");
  };
  return (
    <div id="add-comment-form">
      <label>
        Nome:
        <input
          type="text"
          value={nomeUsuario}
          onChange={(event) => setNomeUsuario(event.target.value)}
        />
      </label>

      <label>
        Comentário:
        <textarea
          rows="4"
          cols="50"
          value={textoComentario}
          onChange={(event) => setTextoComentario(event.target.value)}
        />
      </label>
      <button onClick={() => adicionaComentario()}>Adiciona Comentário</button>
    </div>
  );
};

export default FormularioAdicionaComentario;
