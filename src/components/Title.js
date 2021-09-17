import React, { useReducer } from 'react';

// Step 3
//import react-reduc after adding the store in index.js ( top level )
import {connect} from "react-redux";

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  const [state, dispatch] = useReducer(titleReducer, initialState);
  console.log(props)

  const handleToggleEditing = () => {
    dispatch(toggleEditing());
  }

  const handleTitleUpdate = (title) => {
    dispatch(updateTitle(title));
  }

  return (
    <div>
      <h1>{state.appName}</h1>
      {
        !state.editing ? 
          <TitleDisplay title={state.title} handleToggleEditing={handleToggleEditing}/>: 
          <TitleForm handleTitleUpdate={handleTitleUpdate}/>
      }
    </div>
  );
};

// Step 3 Continued . after connect we create this
const mapStateToProps = (state) => {
  return ({
    title: state.title,
    editing: state.editing,
    appName: state.appName
  })
}

export default connect(mapStateToProps)(Title);
