import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getThings} from '../redux/configureStore'

function Greetings() {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetingsReducer);
  console.log('Greetings:', greetings);
  return (
    <div>
      <button onClick={() => dispatch(getThings())}>
        Get Greetings from the backend
      </button>
      {greetings.map((greet) => {
        return <h1 key={greet.id}>{greet.message}</h1>;
      })}
    </div>
  );
}

export default Greetings;
