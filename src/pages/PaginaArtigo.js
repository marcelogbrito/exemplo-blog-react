import React from 'react';
import ListaArtigos from '../components/ListaArtigos';
import conteudoArtigo from './ConteudoArtigo'
import PaginaNaoEncontrada from './PaginaNaoEncontrada';

const PaginaArtigo = ({match}) => {
    const nome = match.params.nome
    const artigo =  conteudoArtigo.find(artigo => artigo.nome === nome)
    if(!artigo) return <PaginaNaoEncontrada />
    const outrosArtigos = conteudoArtigo.filter(artigo => artigo.nome !== nome)


    return (
        <div>
            <>
        <h1>{artigo.titulo}</h1>
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