import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../action";

const initialState = {
  list: [],
  text: "",
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { data, id } = action.payload;
      return {
        ...state,
        list: [...state.list, { data, id }],
        text: "",
      };

    case REMOVE_TODO:
      let newList = state.list.filter((newItem) => newItem.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case EDIT_TODO:
      const updatedTodo = state.list.map((todo) => {
        if (todo.id === action.id) {
          return { ...state, list: action.payload, text:state.list[action.payload] };
        }
        return state;
      });
      return {
        ...state,
      };





    default:
      return state;
  }
};
