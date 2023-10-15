import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter.jsx'
import './App.css'
import DataProvider from './Components/DataContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <DataProvider>
    <AppRouter />
    </DataProvider>
    </React.StrictMode>
)
