import React from 'react';
import '../assets/create-todo.css';


export default class CreateTodo extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="what do i need to do next?" ref="createInput" />
                <button className="button">Create</button>
            </form>
        );
    }
    handleCreate(event) {
        event.preventDefault();
        console.log(this.refs.createInput.value);
        if (this.refs.createInput.value !=="") {
            this.props.createTask(this.refs.createInput.value);
            this.refs.createInput.value = '';
        }
    }
}

