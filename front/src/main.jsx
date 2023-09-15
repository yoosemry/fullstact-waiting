import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Globalprovider } from './component/contantApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Globalprovider>
    <App />
    </Globalprovider>

  </React.StrictMode>,
)
