import { useState } from 'react';
import './styles.css';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onHandlerCart = () => {
    setIsOpen(!isOpen)
  }



  return (
    <div className="App">
      <header className="App-header">
        <Sidebar onClose={onHandlerCart} isOpen={isOpen}>
          <h3>Item list</h3>
        </Sidebar>
        <Navbar numberOfItems={0} onHandlerCart={onHandlerCart}>
        </Navbar>
      </header>
    </div>
  );
}

export default Home;