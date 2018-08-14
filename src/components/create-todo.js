import React from 'react';
import '../assets/App.css';


export default class CreateTodo extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="what do i need to do next?" />
                <button>Create</button>
            </form>
        );
    }
}

