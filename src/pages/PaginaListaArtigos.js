import React from 'react';
import ListaArtigos from '../components/ListaArtigos';
import conteudoArquivo from './ConteudoArtigo'

const PaginaListaArtigos = props => {

    return (
        <div>
            <>
        <h1>Articles</h1>
        <ListaArtigos artigos={conteudoArquivo} />
    
    </>
        </div>
    );
};

PaginaListaArtigos.propTypes = {
    
};

export default PaginaListaArtigos;