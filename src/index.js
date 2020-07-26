import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const FeelingsReducer = (state = 'feelings', action) => {
    if(action.type === "FELT_ABOUT_DAY") {
        return action.payload;
    }

    return state;
}

const SummaryReducer = (state = [], action) => {
    if(action.type === "ADD_FEEDBACK") {
        return [...state, action.payload];
    }

    return state;
}


const storeInstance = createStore(
    combineReducers({
        FeelingsReducer,
        SummaryReducer,
    }),
    applyMiddleware(logger)
);


ReactDOM.render(
<Provider store={storeInstance}>
    <App />
 </Provider>, 
document.getElementById('root'));
registerServiceWorker();

