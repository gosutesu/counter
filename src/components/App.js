/**
 * Presentational Components
 *
 */
import React from 'react'
import ViewCount from '../containers/ViewCount'
import IncrementButton from '../containers/IncrementButton'
import DecrementButton from '../containers/DecrementButton'
import TitleBar from './TitleBar'

const App = () => (
  <div>
    <TitleBar />
    <DecrementButton />
    <ViewCount />
    <IncrementButton />
  </div>
)

export default App;
