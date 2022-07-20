import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getThings} from '../redux/configureStore'

function Greetings() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetingsReducer);
  console.log('Greetings:', greeting);
  return (
    <div>
      <button onClick={() => dispatch(getThings())}>
        Get Greetings from the backend
      </button>
      <h1 key={greeting.id}>{greeting.message}</h1>
    </div>
  );
}

export default Greetings;
