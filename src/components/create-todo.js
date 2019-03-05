import React, {Component}from 'react';
import '../assets/create-todo.css';


class CreateTodo extends Component {
    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input className="createInput" type="text" placeholder="what do i need to do next?" ref="createInput" />
                <button className="button">Create</button>
            </form>
        );
    }

    handleCreate(e) {
        e.preventDefault();
        if (this.refs.createInput.value !=="") {
            this.props.createTask(this.refs.createInput.value);
            this.refs.createInput.value = '';
        }
    }
}
export default CreateTodo

