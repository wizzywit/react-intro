import React, { Component } from 'react';
import TodoItem from './TodoItem';


export default class Todos extends Component {

  render() {
    return (
        <div>
          { this.props.todos.map(todo=> 
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              markCompleted={this.props.markCompleted}
              deleteTodo={this.props.deleteTodo}
            />
           )}
        </div>
    )
  }
}

