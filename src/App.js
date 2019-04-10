import React, { Component } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

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
      ]
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


  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos 
          todos={this.state.todos} 
          markCompleted={this.markCompleted} 
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
