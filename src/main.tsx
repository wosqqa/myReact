import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider} from 'react-redux'
import App from './App'
import store from './demo/store'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)
