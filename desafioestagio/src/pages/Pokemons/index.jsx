import PokeCard from "../../components/PokeCard";
import PokeApi from "../../api";
import { useState } from "react";
import "./Pokemons.css";
import Cabecalho from "../../components/Cabecalho";

function Pokemons() {
  const [valor, setValor] = useState("");
  const [pokemon, setPokemon] = useState(null);

  function enviaParaApi(e) {
    e.preventDefault();
    async function exibirPokemon() {
      const valorRecebido = await PokeApi(valor);
      setPokemon(valorRecebido);
    }
    exibirPokemon();

    setValor("");
  }

  return (
    <div>
      <Cabecalho />
      <div className="principal">
        <form onSubmit={enviaParaApi}>
          <input
            value={valor}
            onChange={(valorDigitado) => {
              setValor(valorDigitado.target.value);
            }}
            placeholder="Digite o nome do Pokemon"
          />
          <button>PESQUISAR</button>
        </form>
      </div>
      <div>{pokemon && <PokeCard pokemon={pokemon} />}</div>
    </div>
  );
}

export default Pokemons;
