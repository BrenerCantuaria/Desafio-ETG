async function PokeApi(valor = "metapod") {
    
    const conecta = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor.toLowerCase()}`);
    const conexaoConvertida = await conecta.json();
    
    return conexaoConvertida;
}

export default PokeApi;
