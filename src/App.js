import React from 'react';
import './assets/App.css';
import TodosList from './components/todos-list';
import CreateTodo from './components/create-todo';

let todos = [
    {
        task: 'make a react app',
        isCompleted: false
    },
    {
        task: 'get some rest',
        isCompleted: true
    }
];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    render() {
        return (
            <div>
                <h1>Ama TODO app</h1>
                <CreateTodo createTask={this.createTask.bind(this)} />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                />
            </div>
        );
    }

    toggleTask(task) {

    }
    createTask(task) {
        this.state.todos.push({
         task: task,
         isCompleted: false
         });
        this.setState({todos: this.state.todos});
    }
}

