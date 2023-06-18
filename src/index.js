// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
//import reportWebVitals from './reportWebVitals'

import ThemeProvider from './providers/ThemeProvider' // +
// теперь корневой компонент у нас не App, а Root
import Root from './components/Root' 

// поменяли css на scss
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

      // import React from 'react';
      // import ReactDOM from 'react-dom/client';
      // import reportWebVitals from './reportWebVitals'

      // import { App } from 'components/App';
      // import './index.css';

      // ReactDOM.createRoot(document.getElementById('root')).render(
      //   <React.StrictMode>
      //     <App />
      //   </React.StrictMode>
      // );
