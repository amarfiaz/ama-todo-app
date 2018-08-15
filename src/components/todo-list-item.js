import React from 'react';
import '../assets/App.css';

export default class TodosListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            isEditing: false
        };
    }

    renderTasksSection() {

        return this.props.isCompleted ?
            <td className="Task-isCompleted-true">{this.props.task}</td> :
            <td className="Task-isCompleted-false">{this.props.task}</td>;
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
                    <button>Delete</button>
                </td>
            )
    }

    render() {
        return (
            <tr>
                {this.renderTasksSection()}
                {this.renderActionsSection()}
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
