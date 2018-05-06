import { ADD_ITEM } from "../constants/action-types";

interface IStateType {
    items:any[]
}

const initialState = {
    items: []
};

const rootReducer = (state:IStateType = initialState, action: any) => {
    switch (action.type) {
        case ADD_ITEM:
            state = { ...state, items: [state.items, action.payload] };
            return state;
        default:
            return state;
    }
};

export default rootReducer;