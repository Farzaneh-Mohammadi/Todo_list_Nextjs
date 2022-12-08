import React, { useState } from "react";

import Button from "@mui/material/Button";
import {TextField } from "@mui/material";

import styles from "../styles/Todos.module.css";


const Todos = (props) => {
    const [todo, setTodo] = useState("");

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
        >
          Add
        </Button>
        </div>


        </div>
    )

}

export default Todos;
