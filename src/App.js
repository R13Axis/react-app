
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';

function App() {
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

export default App;
