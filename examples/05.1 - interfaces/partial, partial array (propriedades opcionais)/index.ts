export {};

/**
 * Para definir que uma propriedade seja opcional, basta incluir um ? no nome da propriedade
 */
type PokemonComEvolucaoOpcional = {
  nome: string;
  evolucoes?: string[];
};

const pokemonSemEvolucao: PokemonComEvolucaoOpcional = {
  nome: "Ditto",
};
const pokemonComEvolucao: PokemonComEvolucaoOpcional = {
  nome: "Squirtle",
  evolucoes: ["Squirtle", "Wartortle", "Blastoise"],
};

type PokemonComEvolucao = {
  nome: string;
  evolucoes: string[];
};

type Pokemon = PokemonComEvolucao;

/**
 * Esse objeto requer que todos as propriedades sejam definidas
 */
const pokemonComEvolucaoRequerida: PokemonComEvolucao = {
  nome: "Squirtle",
  evolucoes: ["Squirtle", "Wartortle", "Blastoise"],
};
const pokemonSemEvolucaoRequerida: PokemonComEvolucao = {
  nome: "Squirtle",
  evolucoes: [""],
};

/**
 *
 *
 *
 *
 *
 *
 *
 *
 * Utilitário: Util para quando vamos definir um formulário por exemplo
 */

/**
 * Aqui em uma linha, convertemos todos as propriedades da definição
 * para que possam ser indefinidas em primeiro momento
 */
type PartialPokemon = Partial<Pokemon>;
type NonPartialPokemon = Partial<Pokemon>;
type partialPokemons = Partial<Pokemon>[];
type NonPartialPokemons = Array<Pokemon>;

const novoPartialPokemon: PartialPokemon = {
  evolucoes: [""],
};

const novoNonPartialPokemon: NonPartialPokemon = {
  evolucoes: [""],
  nome: "",
};

const partialPokemons: Partial<PartialPokemon>[] = [
  {
    evolucoes: [""],
  },
];

const nonPartialPokemons: Array<Pokemon> = [
  {
    evolucoes: [""],
    nome: "",
  },
];
