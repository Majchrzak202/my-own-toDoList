import React from "react";

const Form = ({ input, setInput, todos, setTodos, setError, setStatus }) => {
  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (input.length === 0) {
      setError({
        title: "Error, no Input!",
        message: "Please provide some inupt!",
      });
      return;
    }

    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.random() * 50 },
    ]);
    setInput("");
  };

  const filterHanlder = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={input}
        onChange={inputChangeHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterHanlder} className="filter-todo">
          <option value="all">All</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
