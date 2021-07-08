//Os atributos padrões de um pokemon
type PokemonBase = {
  tipo: string;
  atacar(): void;
};

//Aqui o exemplo de intersecção
//Agora esse tipo também contém as propriedades declaradas pelo tipo original
type PokemonOverpowered = PokemonBase & {
  ataquePotente(): void;
};

const pokemon = obtemUmPokemonQualquer();
const pokemonPoderoso = obtemUmPokemonPoderoso();

pokemon.atacar();
pokemon.ataquePoderoso();

pokemonPoderoso.atacar();
pokemonPoderoso.ataquePotente();

function obtemUmPokemonQualquer(): PokemonBase {
  return {
    tipo: "tipo",
    atacar: () => console.warn("Realiza um ataque"),
  };
}

function obtemUmPokemonPoderoso(): PokemonOverpowered {
  return {
    tipo: "tipo",
    atacar: () => console.warn("Realiza um ataque"),
    ataquePotente: () => console.warn("Realiza um ataque mais forte"),
  };
}
