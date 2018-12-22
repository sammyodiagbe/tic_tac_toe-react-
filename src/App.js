import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import FormComponent from './components/form'
import TodosComponent from './components/todosComponent'

class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'walk the dog', done: false },
      { id: 2, content: 'Take a stroll down the road', done: true },
      { id: 3, content: 'Learn how to be a better human', done: false },
    ],
    text: ''
  }

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({
      text
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      console.log(e.target)
      e.target.children[0].style.background = 'red';
    } else {
      const id = this.state.todos.length + 1;
      const todos = [{ id: id, content: this.state.text, done: false }, ...this.state.todos];

      this.setState({
        todos,
        text: ''
      })
    }

  }

  handleDelete = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos
    })
  }

  handleCheck = (id) => {
    const todo = this.state.todos.filter((todo) => {
      return todo.id === id;
    })[0];
    todo.done = (todo.done) ? false : true;
    const todos = this.state.todos;
    todos[todos.indexOf(todo)] = todo;
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="App">

        <Navbar />
        <div className="container">

          <FormComponent value={this.state.text} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <TodosComponent handleCheck={this.handleCheck} handleDelete={this.handleDelete} todos={this.state.todos} />
        </div>

      </div>
    );
  }
}

export default App;
