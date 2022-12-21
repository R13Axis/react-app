import React from 'react';
import './styles.css';
import {PRODUCTS} from '../../constants/products';
import Card from '../../components/card';



const Home = () => {

  return (
    <div className="container">
      <h1>Productos destacados</h1>
        <div className='products-container'>
        {PRODUCTS.map((product) => (
          <Card product={product} key={product.name} />
        ))}
      </div>

    </div>
  )
}

export default Home;