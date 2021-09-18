import React, { useReducer } from 'react';

import {connect} from "react-redux";

// import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  // Step 4 Continued
  //No longer used thanks to props
  // const [state, dispatch] = useReducer(titleReducer, initialState);
  console.log(props)

  const handleToggleEditing = () => {
    //Step 4 Continued : remember to add 'props' in the front
    props.dispatch(toggleEditing());
  }

  const handleTitleUpdate = (title) => {
    props.dispatch(updateTitle(title));
  }

  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ?
          <TitleDisplay title={props.title} handleToggleEditing={handleToggleEditing}/>:
          <TitleForm handleTitleUpdate={handleTitleUpdate}/>
      }
    </div>
  );
};

//Step 4
// This preety much connects us to our state
const mapStateToProps = (state) => {
  return ({
    title: state.title,
    editing: state.editing,
    appName: state.appName
  })
}

//Step 5:
const mapDispatchToProps = {
  updateTitle,
  toggleEditing
}

export default connect(mapStateToProps , mapDispatchToProps)(Title);

//If you need to access just your actions pull 'null' as the first parameter!
