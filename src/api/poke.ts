import {instance} from "./base.api";

const endpoint = 'v2/pokemon/150';

export const poke = {
    getAll: function ({id}: {id: number}){
        return instance.get(endpoint, {params: {id}});
        }
}



