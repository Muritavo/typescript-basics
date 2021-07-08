type Fogo = {
  tipo: "fogo";
  soltarFogo(): void;
};

type Agua = {
  tipo: "agua";
  lancarAgua(): void;
};

type TipoPokemon = Fogo | Agua;

const UmaInstanciaDePokemon = deAlgumaFormaObtemUmPokemonQualquer() as TipoPokemon;

//Aqui há um erro pois não se conhece que
//tipo de pokemon que pode vir como resultado desta função
UmaInstanciaDePokemon.soltarFogo();

/** Aqui se garante que o tipo é fogo, logo a interface dentro deste escopo
 * é inferida para {@link Fogo} */
if (UmaInstanciaDePokemon.tipo === "fogo") {
  UmaInstanciaDePokemon.soltarFogo();
}

function deAlgumaFormaObtemUmPokemonQualquer(): TipoPokemon {
  return {
    tipo: "fogo",
    soltarFogo: () => console.warn("Lança chamas"),
  };
}
