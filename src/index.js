import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider appId="BPhKCjQFqIc4tOXXqwMojwfPozQkxm5fzaXsAvXa" serverUrl="https://mh84fwponw1u.usemoralis.com:2053/server">
    <App />
  </MoralisProvider>
)
