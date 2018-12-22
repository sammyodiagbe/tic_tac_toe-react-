import React, { Component } from 'react'

class TodosComponent extends Component {
    testing = (e) => {
        console.log('working');
    }
    render() {
        const { todos, handleDelete, handleCheck } = this.props;

        const todolist = (todos.length) ? (todos.map((todo) => {
            const className = (todo.done) ? 'todo done' : 'todo ';
            return (
                <span className={className} key={todo.id}>
                    <h2>{todo.content}</h2>
                    <div>
                        <p><a className="delete" href="javascript:void(0)" onClick={() => { handleDelete(todo.id) }} label='delete todo'><i className='fa fa-trash'></i></a></p>
                        <p><a className="check" href="javascript:void(0)" onClick={() => { handleCheck(todo.id) }} label='check todo'><i className='fa fa-check'></i></a></p>
                    </div>
                </span >
            )

        })) : (
                <p>You do not have any thing to do</p>
            )


        return (
            <div className='todo-container' >
                {todolist}
            </div>
        )
    }
}

export default TodosComponent;