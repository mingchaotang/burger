import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  // Comment code is used for checking interceptors removal
  // state = {
  //   show: true
  // };
  //
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 3000);
  // }

  render() {
    return (
      <div>
        {/*<Layout>{this.state.show ? <BurgerBuilder /> : null}</Layout>*/}
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
