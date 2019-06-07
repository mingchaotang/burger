import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[OrderSummary] componentDidUpdate');
  }

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      igKey => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCancel} btnType="Success">
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinue} btnType="Danger">
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
