import { Link } from 'react-router-dom'
import './Start.css'

function Start (){
    return( 
        <div className='container'>
            <div className='conteudo'>
                <p>Pokémon é uma série animada e uma franquia de jogos que se tornou popular em todo o mundo desde sua criação em 1996. A história segue um jovem treinador de Pokémon chamado Ash Ketchum, que viaja pelo mundo em busca de novos Pokémon para capturar, treinar e competir em batalhas. Com suas criaturas fictícias únicas, tipos de Pokémon, batalhas e amizade entre treinadores, a franquia Pokémon continua a encantar jogadores e fãs de todas as idades até os dias de hoje.</p>
                <h4>CLIQUE NO BOTÃO ABAIXO PARA CONHECER CADA POKEMON</h4>
                <div>
                <Link to="/Pokemons" > <button>COMEÇAR</button> </Link>

                </div>
            </div>
        </div>
    )
}

export default Start