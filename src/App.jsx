
import React, {Component} from "react";
import AddTask from "./components/AddTask";
class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: [],
    };
    this.createTask = this.createTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }
  componentDidMount(){
    const tasks = localStorage.getItem("tasks");
    localStorageTasks = JSON.parse(localStorageTasks);
    if(tasks){
      this.setState({
        tasks: JSON.parse(tasks),
      });
    }
  }

  loadTasksfromLocalStorage(){
    let localStorageTasks = localStorage.getItem("tasks");
    if(localStorageTasks){
      this.setState({
        tasks:localStorageTasks,
      });
    }
  }


  createTask(newTask){
    
    const {tasks} = this.state;
    this.setState({
      tasks: [...tasks, newTask]
    });

    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));

  }

  removeTask(id){
    const {tasks} = this.state;
    const updatedTasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks: updatedTasks,
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  editTask(id){
    const {tasks} = this.state;

    const updatedTasks = tasks.map(task => {
      if(task.id === id){
        task.editing = true;
      }
      return task;
    }
    );
    this.setState({
      tasks: updatedTasks,
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }



  render() {
    const {tasks} = this.state;
    return (
      <>
      <AddTask onCreate={this.createTask}/>
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          data={task}>
          onRemove={this.removeTask}
          onEdit={this.editTask} 
        />
      ))}
      </>
    );
  }
}
export default App;
