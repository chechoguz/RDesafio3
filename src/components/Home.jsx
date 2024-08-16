import React from 'react';
import pizzas from './pizzas';
import CardPizza from './CardPizza'; 

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <CardPizza 
              name={pizza.name}
              img={pizza.img}
              desc={pizza.desc}
              ingredients={pizza.ingredients}
              price={pizza.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;