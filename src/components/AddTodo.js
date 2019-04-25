import React, { Component } from 'react';
import uuid from 'uuid';


export default class AddTodo extends Component {
  state = {
    title: ""
  }

  handleChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() === ""){
      return
    }
    else {
    const todo = {
      id: uuid.v4(),
      title: this.state.title,
      completed: false
    };
    this.props.addTodo(todo);
    this.setState({title: ""});
  }
}


  render(){
    return (
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="title" 
            onChange={this.handleChange} 
            value={this.state.title} 
            placeholder="Add Todo..." />
          <input type="submit" value="Submit" className="btn" />
        </form>
    )
  }
}
