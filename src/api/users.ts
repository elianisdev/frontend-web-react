import {instance} from "./base.api";

const endpoint = 'v1/users';

export const getUsers = {
    getAll: function ({name}:{name?:string} ){
        return instance.get(endpoint, {params:{
                name
            }
        });
},
    getById: function ({ id }:{id:string | undefined }){
    return instance.get(`${endpoint}/${id}` );
}
}

