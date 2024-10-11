import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [viteLogo, setViteLogo] = useState(reactLogo);

  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div id="app">

      <header class="main-header">
        <div className="container-fluid">
          {viteLogo ? <img className="navbar-logo" src={viteLogo} /> :
          <a className="navbar-brand" href="#">Voice Search Optimization</a>}
        </div>
      </header>
      <main id="main" className="main-body">
        <div >
          <p>
            <span>Warning:</span> Enrollment <span>closes on Thursday, {date} at midnight.</span>
          </p>

          <h2 id="main-description">Unlock This secret feature to be one of the top local companies for your services on Google, alexa, and apple siri.</h2>
        </div>
        <div>
          <div>
            <span>
              
            </span>
            <span>

            </span>
            " Greg is Online. "
          </div>
        </div>
        
      </main>
    </div>
  )
}

export default App
