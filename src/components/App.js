/**
 * Presentational Components
 *
 */
import React from 'react'
import ViewCount from '../containers/ViewCount'
import IncrementButton from '../containers/IncrementButton'
import DecrementButton from '../containers/DecrementButton'

const App = () => (
  <div>
    <DecrementButton />
    <ViewCount />
    <IncrementButton />
  </div>
)

export default App;
