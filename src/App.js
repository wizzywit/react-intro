import React, { Component } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import TodoCompleted from './components/TodoCompleted'
import TodoNotCompleted from './components/TodoNotCompleted'

class App extends Component {
  state = {
    todos: [
//      {
//        id: 1,
//        title: "Todos 1",
//        completed: false
//      },
//      {
//        id: 2,
//        title: "Todos 2",
//        completed: true,
//      },
//      {
//        id: 3,
//        title: "Todos 3",
//        completed: false
//      }
      ],

      loadCompleted: false,
      loadNotCompleted: false
  }

  markCompleted = id => {
    const todo = this.state.todos.filter(todo=>todo.id === id)[0]
    const index = this.state.todos.findIndex(todo=>todo.id === id)
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        {...todo, completed: !todo.completed },
      ...this.state.todos.slice(index+1)
      ]
    })
  }

  addTodo = todo => {
    this.setState({
      todos: [...this.state.todos, todo ]
    })
  }

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo=>todo.id !== id)
    })
  }

  handleComplete = () => {
    this.setState ({
      loadCompleted: true,
      loadNotCompleted: false
    })
  }

  handleTodos = () => {
    this.setState ({
      loadCompleted: false,
      loadNotCompleted: false
    })
  }

  handleNoComplete = () => {
    this.setState ({
      loadCompleted: false,
      loadNotCompleted: true 
    })
  }


  render() {
    const loadCompleted = this.state.loadCompleted;
    const loadNotCompleted = this.state.loadNotCompleted;
    let todos;

    if (!loadCompleted && !loadNotCompleted) {
      todos = <Todos 
      todos={this.state.todos} 
      markCompleted={this.markCompleted} 
      deleteTodo={this.deleteTodo}
    />
    }
    if (loadNotCompleted) {
      todos = <TodoNotCompleted
      todos={this.state.todos} 
      markCompleted={this.markCompleted} 
      deleteTodo={this.deleteTodo} />
      
    }

    if(loadCompleted) {
      todos = <TodoCompleted
      todos={this.state.todos} 
      markCompleted={this.markCompleted} 
      deleteTodo={this.deleteTodo} />
      
    }
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        {todos}
        <div className='comp'>
          <button onClick={this.handleComplete} className='btn co'>Completed Todos</button>
          <button onClick={this.handleTodos} className='btn co'>All Todos</button>
          <button onClick={this.handleNoComplete} className='btn co'>Not Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
