import {instance} from "./base.api";

const endpoint = 'v2/pokemon/ditto';

export const poke = {
    getAll: function ({id}: {id: number}){
        return instance.get(endpoint, {params: {id}});
        }
}



