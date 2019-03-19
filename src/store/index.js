import { createStore } from "redux";
import reducer from "../reducers";

const initialState = [
    {
        task: 'get some rest',
        isCompleted: true
    },
    {
        task: 'do something',
        isCompleted: false
    }
    ];

export const store = createStore(reducer, initialState);