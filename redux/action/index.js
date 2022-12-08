export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";


export const addTodo = (data) => {
    return {
      type: ADD_TODO,
      payload: {
        data: data,
        id: new Date().getTime().toString(),
      },
    };
  };
  

  export const removeTodo = (id) => {
    return {
      type: REMOVE_TODO,
      id,
    };
  };


  export const editTodo = (data, id) => {
    return {
      type: EDIT_TODO,
      payload: {
        data: data,
        id,
      },
     
    };
  };
  
  


