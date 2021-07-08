type Acao = "atacar" | "recuar";

type TipoInimigo = "fogo" | "agua";
//type TipoInimigo = "fogo" | "agua" | "terra" | "ar";

//Aqui estamos dizendo que sempre temos que ter uma acao baseada no tipo de inimigo
function oQueFazer(tipoInimigo: TipoInimigo): Acao {
    //No momento em que um tipo de inimigo novo passa a ser incluido, temos que incluir um novo caso, senão a compilação falha
    //Experimente remover o comentário do novos tipos de inimigo
    switch (tipoInimigo) {
        case "fogo":
            return "atacar";
        case "agua":
            return "recuar";
    }
}