import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greetings from './Components/Greetings';
import { store } from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Greetings />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
