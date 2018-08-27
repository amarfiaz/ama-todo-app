import React from 'react';
import '../assets/App.css';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todo-list-item';

export default class TodosList extends React.Component {

    renderItems() {
        const {todos, ...props} = this.props;

        return this.props.todos.map((todo, index) => <TodosListItem key={index}
        {...todo} {...props} />)
    }


    render() {
        return (
            <table>
                <TodosListHeader/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}

