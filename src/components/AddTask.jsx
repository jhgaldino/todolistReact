import React, { Component } from 'react';
import PropTypes from 'prop-types';
import generators from '../lib/generators';

export default class AddTask extends Component {
  constructor(){
    super();
    this.Initialstate = {
      id : 0 ,
      title: '', 
      dateTime: '', 
      durationTime: '', 
      isCompleted: false,
    };
  
    this.state = this.Initialstate;

    this.handleImput = this.handleImput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleImput (event) {
    const {randomId} = generators;
    this.setState({
    id : randomId(999999),  
    title : event.target.value,
    dateTime : event.target.value,
    durationTime : event.target.value,
  });
}

handleSubmit = (event) => {
  event.preventDefault();
  const {onCreate} = this.props;
  const {id} = this.state;
  if(id > 0){
  onCreate(this.state);
  this.setState(this.Initialstate);
  }
}
    render() {
      const {title} = this.state;
      const {date} = this.state;  
      const {time} = this.state;
    return (
        <form onSubmit={(event)=> this.handleSubmit(event)}>
          <input type="text" value={title} onChange={this.handleImput.title}/>
          <input type="datetime-local" value={dateTime} onChange={this.handleImput.datetime}/>
          <input type="time" value={durationTime} onChange={this.handleImput.durationtime}/>
          <button type="submit">Adicionar</button>
        </form>
    )
  }
}

AddTask.propTypes = {
  onCreate: PropTypes.func}.isRequired;