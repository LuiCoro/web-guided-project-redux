import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';

// STep 1
//First our imports at top level
import {createStore} from "redux";

// Step 2
// then input our reducer
import titleReducer from "./reducers/titleReducer";

// after import our provider
import {Provider} from "react-redux";

// Step 1 Continued
// Store can be named anything
const store = createStore(titleReducer)

console.log('store:', store.getState())

function App() {
  return (
    // This needs to have store
    // Step 2
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
