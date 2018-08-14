import React from 'react';
import '../assets/App.css';
import TodosList from './todos-list';
import CreateTodo from './create-todo';

const todos = [
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
                <CreateTodo/>
                <TodosList
                    todos={this.state.todos}
                />
            </div>
        );
    }
}

