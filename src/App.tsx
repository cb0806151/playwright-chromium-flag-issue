import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isCameraOn, setIsCameraOn] = useState(false)

  const toggleCamera = () => {
    navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then((stream) => {
      setIsCameraOn(true)
    })
    .catch((err) => {
      console.error(`you got an error: ${err}`);
    });
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={toggleCamera}>
          turn camera on
        </button>
        {isCameraOn && <button>
          turn camera off
        </button>}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
