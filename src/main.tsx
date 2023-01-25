import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navigation from './components/Navigation'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navigation />

  </React.StrictMode>,
)
