import React, { useEffect, useState } from "react";
import PokemonService from "../../services/PokemonServices";
import { PokemonListInterface, PokemonItemListInterface} from "../../types/AppInterfaces";

const PokemonList: React.FC = () => {
    const [pagina, setPagina] = useState<number>(1);
    const [itensPorPagina, setItensPorPagina] = useState<number>(20);
    const [pokemonItens, setPokemonItena] = useState<PokemonItemListInterface[]>([]);



    const handleListarDados = async () => {
       const responseData: PokemonListInterface = await PokemonService.listarPokemons({
            itensPorPagina: itensPorPagina,
            pagina:pagina
        });
        if (responseData.results.length > 0){

        }
        console.log("responseData", responseData)
    }
    useEffect (() => {
        handleListarDados()
    }, [handleListarDados]);
    
    return(
        <React.Fragment>oya oya</React.Fragment>
    )
}

export default PokemonList