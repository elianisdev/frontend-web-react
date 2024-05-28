import {instance} from "./base.api";

const endpoint = 'v2/pokemon/ditto';

export const poke = {
    getAll: function ({gameIndex}: {gameIndex: number}){
        return instance.get(endpoint, {params: {gameIndex}});
        }
}



