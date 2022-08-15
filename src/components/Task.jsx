import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Task extends Component {
    constructor(props){
        super(props);
        const {data} = this.props;
        this.state = {
            id: data.id,
            isCompleted: false,
        };
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }
    handleCheckBox (event)  {
        this.setState({
        isCompleted: event.target.checked,
    });
}
    render() {
    const { isCompleted } = this.state;    
    const {data, onRemove, onEdit, checked } = this.props;
    const {id,title,dateTime,durationTime} = data;     
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheckBox} checked={isCompleted}/>
        {title}{dateTime}{durationTime}
        <button type="button" onClick={()=>onRemove(id)}>Remover Tarefa</button>
        <button type="button" onClick={()=>onEdit(id)}>Editar Tarefa</button>
        checked={task.isCompleted}
      </div>
    )
  }
}

Task.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string
    }),
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
    checked: PropTypes.bool,
}.isRequired;
