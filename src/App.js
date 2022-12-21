
import { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Router from './router';
import { Link } from 'react-router-dom';
import {Home} from './pages';


const App = () => {

const [isOpen, setIsOpen] = useState(false)

const onHandlerCart = () => {
    setIsOpen(!isOpen)
  }

  return (

    <div className='container-app'>

      
      <Sidebar onClose={onHandlerCart} isOpen={isOpen}>
          <h3>Item list</h3>
          <Link to ='/cart' className='button-cart'>Go to cart</Link>
      </Sidebar>
      <Navbar numberOfItems={0} onHandlerCart={onHandlerCart}>
      </Navbar>
      <Router />
    
    </div>

  )
  }

export default App;
