import React, { useState } from "react";

const AddTask = ({ onCreate }) => {
  const [task, setTask] = useState({
    text: "",
    date: "",
    time: "",
    duration: ""
  });

  const handleChange = event => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newTask = { ...task, id: Date.now() };
    onCreate(newTask);
    setTask({ text: "", date: "", time: "", duration: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={task.text}
        placeholder="Digite sua tarefa"
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={task.date}
        onChange={handleChange}
      />
      <input
        type="time"
        name="time"
        value={task.time}
        onChange={handleChange}
      />
      <input
        type="text"
        name="duration"
        value={task.duration}
        placeholder="Tempo de duração"
        onChange={handleChange}
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default AddTask;
