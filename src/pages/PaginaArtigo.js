import React, { useState, useEffect } from "react";
import FormularioAdicionaComentario from "../components/FormularioAdicionaComentario";
import ListaArtigos from "../components/ListaArtigos";
import ListaComentarios from "../components/ListaComentarios";
import SecaoCurtida from "../components/SecaoCurtida";
import conteudoArtigo from "./ConteudoArtigo";
import PaginaNaoEncontrada from "./PaginaNaoEncontrada";

const PaginaArtigo = ({ match }) => {
  const nome = match.params.nome;
  const artigo = conteudoArtigo.find((artigo) => artigo.nome === nome);

  const [informacoesArtigo, setInformacoesArtigo] = useState({
    curtidas: 0,
    comentarios: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/artigos/${nome}`);
      const body = await result.json();
      setInformacoesArtigo(body);
    };
    fetchData();
  }, [nome]);

  if (!artigo) return <PaginaNaoEncontrada />;
  const outrosArtigos = conteudoArtigo.filter((artigo) => artigo.nome !== nome);

  return (
    <div>
      <>
        <h1>{artigo.titulo}</h1>
        <SecaoCurtida
          nomeArtigo={nome}
          qtdCurtidas={informacoesArtigo.curtidas}
          setInformacoesArtigo={setInformacoesArtigo}
        />
        {artigo.conteudo.map((paragrafo, key) => (
          <p key={key}>{paragrafo}</p>
        ))}
        <ListaComentarios comentarios={informacoesArtigo.comentarios} />
        <FormularioAdicionaComentario
          nomeArtigo={nome}
          setInformacoesArtigo={setInformacoesArtigo}
        />
        <h3>Outros Artigos:</h3>
        <ListaArtigos artigos={outrosArtigos} />
      </>
    </div>
  );
};

export default PaginaArtigo;
