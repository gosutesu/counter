/**
 * EntryPoint
 *
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counter from './reducers/counter'
import App from './components/App'

//ストアの登録
const store = createStore(counter)
render(
  //Provider配下のコンポーネントでStoreが使用可能になる
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
