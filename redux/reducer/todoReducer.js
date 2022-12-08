import { ADD_TODO, REMOVE_TODO } from "../action";

const initialState = {
  list: [],
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        const { data, id } = action.payload;
        return {
          ...state,
          list: [...state.list, { data, id }],
        };
  

        case REMOVE_TODO:
            let newList = state.list.filter((newItem) => newItem.id !== action.id);
            return {
              ...state,
              list: newList,
            };

            

        default:
            return state;
        }
      };
      