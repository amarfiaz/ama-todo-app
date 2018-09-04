import React from 'react';
import '../assets/create-todo.css';


export default class CreateTodo extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input className="createInput" type="text" placeholder="what do i need to do next?" ref="createInput" />
                <button className="button">Create</button>
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();
        if (this.refs.createInput.value !=="") {
            this.props.createTask(this.refs.createInput.value);
            this.refs.createInput.value = '';
        }
    }
}

