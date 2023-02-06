import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Task extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      id: data.id,
      isCompleted: false,
    };
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  handleCheckBox(event) {
    this.setState({
      isCompleted: event.target.checked,
    });
  }

  render() {
    const { isCompleted } = this.state;
    const { data, onRemove, onEdit } = this.props;
    const { id, title, date, time } = data;
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheckBox} checked={isCompleted} />
        {title} {date} {time}
        <button type="button" onClick={() => onRemove(id)}>Remover Tarefa</button>
        <button type="button" onClick={() => onEdit(id)}>Editar Tarefa</button>
      </div>
    )
  }
}

Task.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }),
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
