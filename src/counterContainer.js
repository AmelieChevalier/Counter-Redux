import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  count: state
});

const CounterComponent = ({ count, dispatch }) => (
  <div>
    <p>{count}</p>
    <button onClick={() => dispatch({ type: 'ADD1' })}>+ 1</button>
    <button onClick={() => dispatch({ type: 'REMOVE1' })}>- 1</button>
    <button onClick={() => dispatch({ type: 'ADD10' })}>+ 10</button>
    <button onClick={() => dispatch({ type: 'REMOVE10' })}>- 10</button>
    <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
  </div>
)

export default connect(mapStateToProps)(CounterComponent);