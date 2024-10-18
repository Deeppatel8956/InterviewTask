import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap5/src/css/bootstrap.min.css'
// import Home from './CRUD/Home'
// import ShowData from './CRUD/ShowData'
import { Provider } from 'react-redux'
import store from './store'

import {
  BrowserRouter,
  
} from "react-router-dom";
import Axiosget from './CRUD/Axiosget.jsx'
import Tshow from './Todo/Tshow.jsx'
import Thome from './Todo/Thome.jsx'
import Axiosshow from './Todo/Axiosshow.jsx'
import Axioshome from './Todo/Axioshome.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* */}
{/* <Provider store={store}> */}
  {/* <BrowserRouter>   */}
  {/* <ShowData/> */}
  {/* <Home/>  */}
  {/* <App /> */}
  {/* </BrowserRouter> */}

{/* </Provider> */}

{/* Tested Data */}
{/* <Axiosget/>
<Tshow/>
<Thome/> */}
{/* <Axiosshow/>
<Axioshome/> */}
  </React.StrictMode>,
)
