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
};

const contentReducer = (state = [], action) => {
    if(action.type === "UNDERSTOOD_CONTENT") {
        return action.payload;
    }

    return state;
};

const supportReducer = (state = [], action) => {
    if(action.type === "UNDERSTOOD_CONTENT") {
        return [...state, action.payload];
    }

    return state;
};

const SummaryReducer = (state = [], action) => {
    if(action.type === "ADD_FEEDBACK") {
        return action.payload;
    }

    return state;
};


const storeInstance = createStore(
    combineReducers({
        FeelingsReducer,
        contentReducer,
        supportReducer,
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

