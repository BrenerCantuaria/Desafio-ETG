import "./PokeCard.css";

function PokeCard({ pokemon }) {

  if (!pokemon) {
    return <div>CARREGANDO...</div>;
  }

  return (
    <div className="exibiPokemon">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div>
        <h2>{pokemon.name.toUpperCase()}</h2>
        <h2>Peso: {pokemon.weight} KG</h2>
        <h2>Altura: {pokemon.height} metros</h2>
        
        
      </div>
    </div>
  );
}

export default PokeCard;
