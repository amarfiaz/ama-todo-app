import React from 'react';
import '../assets/todo-list-item.css';
import DateSelector from './date-picker';

export default class TodosListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            isEditing: false
        };
    }

    renderTasksSection() {
        return this.props.isCompleted ?
            <td className="Task-isCompleted-true"
                onClick={this.props.toggleTask.bind(this, this.props.task)}>{this.props.task}
            </td> :
            <td className="Task-isCompleted-false"
                onClick={this.props.toggleTask.bind(this, this.props.task)}>{this.props.task}
            </td>;
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }
            return (
                <td>
                    <button onClick={this.onEditClick.bind(this)}>Edit</button>
                    <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
                </td>
            )
    }

    renderCalenderSection() {

        return (
            <td>
                <DateSelector/>
            </td>
        )
    }


    render() {
        return (
            <tr>
                {this.renderTasksSection()}
                {this.renderActionsSection()}
                {this.renderCalenderSection()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({isEditing: true})
    }

    onCancelClick() {
        this.setState({isEditing: false})
    }

}
