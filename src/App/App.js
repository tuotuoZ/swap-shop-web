import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import HttpService from '../services/http-service';


import Product from '../product/product';
import WishList from '../wishlist/wishlist';


const http = new HttpService();

class App extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {products: []};
        
        this.lodaData = this.loadData.bind(this);
        this.productList = this.productList.bind(this);
		
        this.loadData();
    }
    
    loadData = () => {
        var self = this;
        http.getProducts().then(data => {
            self.setState({products: data})
        }, err => {
            
        });
    }
	
	testFunc = () => {
		var num = 1;
		console.log(num);
	}
    
    productList = () => {
        const list = this.state.products.map((product) =>
			<div className="col-sm-4" key={product._id}>
                <Product title={product.title} price={product.price} imgUrl={product.imgUrl}/>
            </div>);
        return (list);
    }
    
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Swag shop!</h2>
            
          </div>
              
          <div className="container-fluid App-main">
              <div className="row">
				  <div className="col-sm-8">
				  	<div className="row">
				  		{this.productList()}
					</div>
				  </div>	
				  <div className="col-sm-4">
				  	<WishList />
				  </div>
              </div>
          </div>
        </div>
      );
    }
}

export default App;
