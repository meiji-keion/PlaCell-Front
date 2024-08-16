import React from 'react'
import logo from './logo.svg'
import './App.css'
import Hashimoto from './Hashimoto'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>プラセル</p>
        <Hashimoto />
      </header>
    </div>
  )
}

export default App
