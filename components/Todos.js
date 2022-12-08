import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo} from "../redux/action";


import Button from "@mui/material/Button";
import {TextField } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';



import styles from "../styles/Todos.module.css";


const Todos = (props) => {
    const [todo, setTodo] = useState("");

    
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todoReducer.list);


    return (
        <div className={styles.container}>

             {/* --------- Add new tasks ----------- */}
      <div className={styles.inputBox}>
                    <TextField
                              className={styles.inputField}

          variant="outlined"
          value={todo}
          placeholder="Enter your Task..."
          onChange={(e) => {setTodo(e.target.value)}}

        />
        <Button
                  className={styles.addBtn}

          variant="contained"
          color="secondary"
          onClick={() => dispatch(addTodo(todo), setTodo(""))}

        >
          Add
        </Button>
        </div>




        {selector?.map((item) => {
        return (
          <div key={item.id} className={styles.taskRow}>
            <p>{item.data} </p>
            <div>

              <Button
                onClick={() => dispatch(removeTodo(item.id))}
                style={{ color: "red" }}
              >
                <DeleteIcon />
               
              </Button>



            </div>
          </div>
        );
      })}



        </div>
    )

}

export default Todos;
