import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todo-list-item';

export default class TodosList extends React.Component {
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
    renderItems() {
        const {todos, ...props} = this.props; // all props except for todos

        return this.props.todos.map((todo, index) =>
            <TodosListItem
                key={index}
                {...todo}
                {...props}
            />)
    }
}



