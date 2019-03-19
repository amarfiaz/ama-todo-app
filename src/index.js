import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import {store} from './store/';
import registerServiceWorker from './registerServiceWorker';






const render = function() {
    ReactDOM.render(<App />, document.getElementById("root"))
};

store.subscribe(render);
render();

registerServiceWorker();