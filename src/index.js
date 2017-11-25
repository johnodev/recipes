import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import './stylesheets/main.scss';
import App from './components/App';
import {reducers} from './reducers/index';


const recipes = [];
for (let i = 1; i < 10; i++) {
    recipes.push({
        id: i,
        category: 'entrees',
        recipeName: `test${i}`
    })
}

const initial_state = {
    recipeList: recipes,
}

const store = createStore(reducers, initial_state);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);


