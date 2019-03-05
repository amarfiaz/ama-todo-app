

import { createStore } from "redux";
import reducer from "../reducers";




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

export const store = createStore(reducer, todos);