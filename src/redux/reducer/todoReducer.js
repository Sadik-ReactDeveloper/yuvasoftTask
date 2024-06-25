const initialState = [];

export const TodoReducer = (state = initialState, action) => {
    const { type, payload ,id} = action;

    console.log(state)
    switch (type) {
        case "ADDTODO":
            return [...state, payload]; // Assuming payload is the new todo object

        case "DELETETODO":
            return state.filter((ele, index) => index !== id)

        case "EditTODO":
         state.splice(id,1,payload)
        default:
            return state;
    }
};
