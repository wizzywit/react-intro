import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoNotCompleted extends Component {

    render () {
        const TodoNotCompleted = this.props.todos.filter(todos => todos.completed === false)
        
        if ( TodoNotCompleted.length === 0) {
            return (
                <div className="comp">Hurray!!!! you have completed all your task...</div>
            )
        }
        else {
            return (
            <div>
                { TodoNotCompleted.map(todo=> 
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