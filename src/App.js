import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart";
import store from './store/store';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
          <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
          </BrowserRouter>
     </Provider>
    </div>
  )
}

export default App
