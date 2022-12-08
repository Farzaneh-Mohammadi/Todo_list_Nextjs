import { ADD_TODO } from "../action";

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
  
        default:
            return state;
        }
      };
      