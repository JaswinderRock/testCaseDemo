import React, { Component } from 'react';
import { Counter } from './components/Screen/Counter';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './components/Screen/Login';
import CakeContainer from './components/Screen/CakeContainer';
import ToDoClass from './components/Screen/ToDoClass';
import IncrementDecrement from './components/Screen/Increment';

export class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='login' element={< Login />} />
          <Route path='counter' element={<Counter message={`The Count Value is`} />} />
          <Route path='cake' element={<CakeContainer />} />
          <Route path='todoList' element={<ToDoClass />} />
          <Route path="increment" element={<IncrementDecrement />} />
        </Routes>
        <nav>
          <ul>
            <li>
              <Link style={{ fontSize: '24px' }} to="counter">Counter</Link>
            </li>
            <li>
              <Link style={{ fontSize: '24px' }} to="cake">CakeContainor</Link>
            </li>
            <li>
              <Link style={{ fontSize: '24px' }} to="todoList">ToDoList</Link>
            </li>
            <li>
              <Link style={{ fontSize: '24px' }} to="increment">Increment</Link>
            </li>
            <li>
              <Link style={{ fontSize: '24px' }} to="login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}