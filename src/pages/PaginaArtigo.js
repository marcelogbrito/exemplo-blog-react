import React, { useState, useEffect } from "react";
import ListaArtigos from "../components/ListaArtigos";
import conteudoArtigo from "./ConteudoArtigo";
import PaginaNaoEncontrada from "./PaginaNaoEncontrada";

const PaginaArtigo = ({ match }) => {
  const [informacoesArtigo, setInformacoesArtigo] = useState({
    curtidas: 0,
    comentarios: [],
  });

  useEffect(() => {
    setInformacoesArtigo({
      curtidas: 3,
    });
  });
  const nome = match.params.nome;
  const artigo = conteudoArtigo.find((artigo) => artigo.nome === nome);
  if (!artigo) return <PaginaNaoEncontrada />;
  const outrosArtigos = conteudoArtigo.filter((artigo) => artigo.nome !== nome);

  return (
    <div>
      <>
        <h1>{artigo.titulo}</h1>
        <p>Este artigo foi curtido {informacoesArtigo.curtidas} vezes</p>
        {artigo.conteudo.map((paragrafo, key) => (
          <p key={key}>{paragrafo}</p>
        ))}
        <h3>Outros Artigos:</h3>
        <ListaArtigos artigos={outrosArtigos} />
      </>
    </div>
  );
};

export default PaginaArtigo;
