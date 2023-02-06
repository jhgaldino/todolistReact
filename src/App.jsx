import React, { Component } from 'react';
import AddTask from './components/AddTask';
import Task from './components/Task';

class App extends Component {
constructor() {
super();
this.state = {
tasks: []
};
this.createTask = this.createTask.bind(this);
this.removeTask = this.removeTask.bind(this);
this.editTask = this.editTask.bind(this);
}

componentDidMount() {
const tasks = JSON.parse(localStorage.getItem('tasks'));
if (tasks) {
this.setState({ tasks });
}
}

createTask(newTask) {
const { tasks } = this.state;
this.setState({
tasks: [...tasks, newTask]
});
localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
}

removeTask(id) {
const { tasks } = this.state;
const updatedTasks = tasks.filter(task => task.id !== id);
this.setState({
tasks: updatedTasks
});
localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

editTask(id) {
const { tasks } = this.state;
const updatedTasks = tasks.map(task => {
if (task.id === id) {
task.editing = true;
}
return task;
});
this.setState({
tasks: updatedTasks
});
localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

render() {
const { tasks } = this.state;
return (
<>
<AddTask onCreate={this.createTask} />
{tasks.map(task => (
<Task key={task.id} data={task} onRemove={this.removeTask} onEdit={this.editTask} />
))}
</>
);
}
}

export default App;