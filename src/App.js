import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

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
        </Layout>
      </div>
    );
  }
}

export default App;
