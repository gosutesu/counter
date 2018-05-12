/**
 * Presentational Components
 *
 */
import React from 'react'

const CounterButton = (props) => (
  <button onClick={() => {props.onClick()}} >
  {props.name}
  </button>
)

export default CounterButton;
