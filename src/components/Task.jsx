import React from "react";

const Task = ({ data, onRemove, onEdit }) => (
  <div>
    <p>Texto: {data.text}</p>
    <p>Data: {data.date}</p>
    <p>Hora: {data.time}</p>
    <p>Duração: {data.duration}</p>
    <button onClick={() => onRemove(data.id)}>Remover</button>
    <button onClick={() => onEdit(data.id)}>Editar</button>
  </div>
);

export default Task;
