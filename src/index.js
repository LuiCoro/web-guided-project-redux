import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';

import {createStore} from "redux";


import titleReducer from "./reducers/titleReducer";

import {Provider} from "react-redux";

const store = createStore(titleReducer)

console.log('store:', store.getState())

function App() {
  return (
    < Provider store={store}>
      <div className="App">
        <Title/>
        <DragonList/>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
