import React, { Component } from 'react';


export default class TodoItem extends Component {
  handleChange = e => {
    this.props.markCompleted(this.props.todo.id)
  }

  handleClick = e => {
    this.props.deleteTodo(this.props.todo.id)
  }

  render() {
    return (
      <div className={"todo-item " + (this.props.todo.completed ? 'is-complete': '')}>
        <p>
          <input type="checkbox" onChange={this.handleChange}/>
          { this.props.todo.title }
          <button className="del" onClick={this.handleClick}>x</button>
        </p>
      </div>
    )
  }
}
