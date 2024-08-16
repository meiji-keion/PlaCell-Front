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
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <Hashimoto />
        </a>
      </header>
    </div>
  )
}

export default App
