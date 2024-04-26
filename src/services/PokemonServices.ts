/* objeto com função, listar pokemons é uma função anonima, que
     vai receber parametros, para invocar esse metodo, o parametro tem que ser atendido---- usar Promise quando não tiver controle do fluxo*/
import { Axios, AxiosResponse } from "axios";
import { PokemonListInterface } from "../types/AppInterfaces";
import api from "./api";

interface PokemonServiceListarParams {
    itensPorPagina: number,
    pagina: number;
}

const PokemonService = {
    listarPokemons: async (params: PokemonServiceListarParams) : Promise<PokemonListInterface> => { 

        const {itensPorPagina, pagina} = params;
        const requestParams = `/?offset=${(pagina-1) * itensPorPagina}$limit=${itensPorPagina}`;
            //https://pokeapi.co/api/v2/pokemon?offset=0&limit=20
        try{
            const response: AxiosResponse<PokemonListInterface> =
                await api.get(requestParams); /* ponto de assincronismo */
            return response.data;
        }catch(err){
            throw new Error("Erro ao consultar a api"); /* possui vários tipos de erros e são classificados, nesse exemplo pode ocorrer qualquer tipo de rede
             thorow vc está aremessando a sua excessão ou seja lançou a sua excessão para a stack*/
        }
        

    }
}

export default PokemonService;