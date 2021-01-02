import React from "react";

const ListaComentarios = ({ comentarios }) => (
  <>
    <h3>Comentários:</h3>
    {comentarios.map((comentario, index) => (
      <div className="comment" key={index}>
        <h4>{comentario.nomeUsuario}</h4>
        <p>{comentario.texto}</p>
      </div>
    ))}
  </>
);

export default ListaComentarios;
