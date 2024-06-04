import {instance} from "./base.api";


export const poke = {
    getAll: function ({id}: {id: number}){
        return instance.get(`v2/pokemon/${id}`);
    }
}



