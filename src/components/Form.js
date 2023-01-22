import React from "react";

export default function Form(props) {
  function submitHandler(event) {
    event.preventDefault();
    
    if (!name){
      return
    } else {
      props.addTask(name);
      setName("");
    }
  }

  const [name, setName] = React.useState("");

  function changeHandler(event) {
    setName(event.target.value);
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <h2 className="form__header">What is the next task?</h2>
      <input
        type="text"
        className="form__input"
        name="text"
        autoComplete="off"
        onChange={changeHandler}
        value={name}
      ></input>
      <button type="submit" className="form__submit">
        Add task
      </button>
    </form>
  );
}
