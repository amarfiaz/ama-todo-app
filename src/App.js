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
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = (this.state.todos).find(todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }


    createTask(task) {
        this.state.todos.push({
         task: task,
         isCompleted: false
         });
        this.setState({todos: this.state.todos});
    }

    deleteTask(taskToDelete) {
        console.log('got here: '+ taskToDelete);
        this.state.todos.remove(todo => todo.task === taskToDelete);
        this.setState({todos: this.state.todos});
    }
}

