import React from "react";
import { Link } from "react-router-dom";

const ListaArtigos = ({ artigos }) => {
  return (
    <div>
      {artigos.map((artigo, key) => (
        <Link
          className="article-list-item"
          key={key}
          to={`/artigo/${artigo.nome}`}
        >
          <h3>{artigo.titulo}</h3>
          <p>{artigo.conteudo[0].substring(0, 150)} ... </p>
        </Link>
      ))}
    </div>
  );
};

export default ListaArtigos;
