import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { MoralisProvider } from 'react-moralis'
import * as process from 'process'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <MoralisProvider appId={process.env.REACT_APP_APPID} serverUrl={process.env.REACT_APP_SERVER_URL}>
    <App />
  </MoralisProvider>
)
