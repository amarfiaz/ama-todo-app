import React,  { Component } from 'react';
import TodosList from './components/todos-list';
import CreateTodo from './components/create-todo';
import {store} from './store';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: store.getState()
        };
    }

    render() {
        return (
            <div>
                <h1>ama TODO app</h1>
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
        console.log('task to delete: ' + taskToDelete);
        const newTodoList = (this.state.todos).filter(item => item.task !== taskToDelete);
        this.setState({todos: newTodoList});
    }
}
export default App;


