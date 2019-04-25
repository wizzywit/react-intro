import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoCompleted extends Component {

    render () {
        const TodoCompleted = this.props.todos.filter(todos => todos.completed === true)
        
        if ( TodoCompleted.length === 0) {
            return (
                <div className="comp">No Completed Todos... Please work on some task</div>
            )
        }
        else {
            return (
            <div>
                { TodoCompleted.map(todo=> 
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
}