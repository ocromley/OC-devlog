import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Remove the <BrowserRouter> tags from here if they are present */}
    <App />
  </React.StrictMode>,
)