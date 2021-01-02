import React from "react";

const ListaComentarios = ({ comentarios }) => (
  <>
    <h3>Comentários:</h3>
    {comentarios.map((comentario) => (
      <div className="comment">
        <h4>{comentario.nomeusuario}</h4>
        <p>{comentario.texto}</p>
      </div>
    ))}
  </>
);

export default ListaComentarios;
