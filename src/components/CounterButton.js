/**
 * Presentational Components
 *
 */
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12,
  width: '50%',
};

const CounterButton = (props) => (
  <RaisedButton label={props.name} primary={true} style={style} onClick={() => {props.onClick()}} />
)

export default CounterButton;
