import React from 'react'
import './App.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer,Count} from './pages/Counter'


function App() {

  const store =createStore(reducer)


  return (
    <>
   <Provider store={store}>
    <Count/>
   </Provider>
    </>
  )
}

export default App
