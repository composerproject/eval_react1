import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ExpContextProvider from './utils/expContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExpContextProvider>  
      <App />
    </ExpContextProvider>
  </React.StrictMode>,
)
