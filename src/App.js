import React, { Component } from 'react';
import Header from './components/Header/Header';
import ProductListContainer from './components/ProductList/ProductListContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProductListContainer />
      </div>
    );
  }
}

export default App;
