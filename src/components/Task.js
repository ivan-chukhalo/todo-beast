import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Task(props) {
  const [isEditing, setEditing] = React.useState(false);
  const [newName, setNewName] = useState(props.name);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setEditing(false);
  }

  // коли шось міняємо
  const editingTemplate = (
    <form className="editing__form" onSubmit={(e) => handleSubmit(e)}>
      <input
        id={props.id}
        className="editing__input"
        type="text"
        value={newName}
        onChange={handleChange}
      />
      <div className="editing__btn-group">
        <button type="submit" className="editing__btn">
        <span className="material-symbols-outlined">
            <CheckCircleIcon />
          </span>
        </button>
        <button
          type="button"
          className="editing__btn"
          onClick={() => setEditing(false)}
        >
          <span className="material-symbols-filled">
            <CancelIcon />
          </span>
        </button>
      </div>
    </form>
  );
  // режим огляду
  const viewTemplate = (
    <li className="task">
      <input
        type="checkbox"
        id={props.id}
        className="task__checkbox"
        defaultChecked={props.isCompleted}
        onChange={() => props.toggleTaskCompleted(props.id)}
      ></input>
      <label htmlFor={props.id} className="task__description">
        {props.name}
      </label>
      <div className="task__buttons-group">
        <button
          type="button"
          className="task__btn task__btn_edit"
          onClick={() => setEditing(true)}
        >
          <span className="material-symbols-outlined">
            <EditIcon />
          </span>
        </button>
        <button
          type="button"
          className="task__btn task__btn_delete"
          onClick={() => props.deleteTask(props.id)}
        >
          <span className="material-symbols-outlined">
            <DeleteIcon />
          </span>
        </button>
      </div>
    </li>
  );

  return isEditing ? editingTemplate : viewTemplate;

  // <li className="task">
  //   <input
  //     type="checkbox"
  //     id={props.id}
  //     className="task__checkbox"
  //     defaultChecked={props.isCompleted}
  //     onChange={() => props.toggleTaskCompleted(props.id)}
  //   ></input>
  //   <label htmlFor={props.id} className="task__description">
  //     {props.name}
  //   </label>
  //   <div className="task__buttons-group">
  //     <button type="button" className="task__btn task__btn_edit">
  //       <span className="material-symbols-outlined">
  //         <EditIcon />
  //       </span>
  //     </button>
  //     <button
  //       type="button"
  //       className="task__btn task__btn_delete"
  //       onClick={() => props.deleteTask(props.id)}
  //     >
  //       <span className="material-symbols-outlined">
  //         <DeleteIcon />
  //       </span>
  //     </button>
  //   </div>
  // </li>
}
