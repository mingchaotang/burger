import React from 'react';

import classes from './Order.css';
import Button from '../UI/Button/Button';

const Order = props => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientsOutput = ingredients.map(ig => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          padding: '5px',
          border: '1px solid #ccc'
        }}
      >
        {' '}
        {ig.name} ({ig.amount}){' '}
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price: <strong>CAD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
      <Button btnType="Danger" clicked={props.deleteOrder}>
        Delete Order
      </Button>
    </div>
  );
};

export default Order;
