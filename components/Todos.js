import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, editTodo } from "../redux/action";

import styles from "../styles/Todos.module.css";

import Button from "@mui/material/Button";
import { InputLabel, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState("");

  const dispatch = useDispatch(); //wrap actions
  const selector = useSelector((state) => state.todoReducer.list); //fetch data


  const submitEditHandler = (e) => {
    setEditTask(e.target.value);
    const newTask = editTask;
    setTodo({ ...todo, newTask }); //to replace new task with old task

  };

  const handleChange = (e) => {
    setIsEditing(true);
    setEditTask(e.target.value);
    setTodo(editTask);

  };


  return (
    <div className={styles.container}>

      {/* --------- Add new tasks ----------- */}
      <div className={styles.inputBox}>
        <TextField
          variant="outlined"
          className={styles.inputField}
          value={todo}
          placeholder="Enter your Task..."
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          className={styles.addBtn}
          onClick={() => dispatch(addTodo(todo), setTodo(""))}
        >
          {isEditing ? "Update" : "Add"}
        </Button>
      </div>

      {/* --------- Edit tasks ----------- */}
      {isEditing ? (
        <div className={styles.editForm}>
          <TextField
            value={editTask}
            placeholder="Enter Updated value..."
            onChange={handleChange}
          />
          <Button
            variant="contained"
            onClick={submitEditHandler}
            style={{ marginLeft: "10px" }}
          >
            Update
          </Button>
        </div>
      ) : null}


      {/* --------- Show list ----------- */}
      {selector?.map((item) => {
        return (
          <div key={item.id} className={styles.taskRow}>
            <p>{item.data}</p>

            <div className={styles.taskBtns}>
              <Button
                onClick={() =>
                  dispatch(
                    editTodo(item.id),
                    setTodo(item.data),
                    dispatch(removeTodo(item.id))
                  )
                }
                style={{ color: "black" }}
              >
                <EditIcon />
              </Button>

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
  );
};

export default Todos;
