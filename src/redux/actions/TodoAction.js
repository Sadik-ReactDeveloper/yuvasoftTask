export const addTodo = (data) => {;
    return {
        type: 'ADDTODO',
        payload: data
    };
};

export const deleteTODO =(id)=>{
    return{
        type:"DELETETODO",
        id: id
    }
}

export const EditTODO =(data,id)=>{
    return{
        type:"EditTODO",
        id: id,
        payload:data
    }
}
