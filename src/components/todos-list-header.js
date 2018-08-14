import React from 'react';
import '../assets/App.css';




export default class TodosListHeader extends React.Component {
    render() {
        return (
            <thead>
            <tr>
                <th>Tasks</th>
                <th>Actions</th>
            </tr>
            </thead>
        );
    }
}

