import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTask extends Component {
  constructor() {
    super();
    this.initialState = {
      id: 0,
      title: '',
      date: '',
      time: '',
    };

    this.state = this.initialState;
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onCreate } = this.props;
    onCreate(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { title, date, time } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleInput}
        />
        <input type="date" name="date" value={date} onChange={this.handleInput} />
        <input type="time" name="time" value={time} onChange={this.handleInput} />
        <button type="submit">Adicionar</button>
      </form>
    );
  }
}

AddTask.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
