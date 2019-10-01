import React, {Component} from 'react';
import './wishlist.css';

import ProductCondensed from '../product-condensed/product-condensed'

class WishList extends Component {
	
	constructor(props) {
		super(props);
		this.state = {wishList:[
			{
				title:"Werewolf",
				price:32.99,
				_id:"safefslifej"
			},
			{
				title:"Werewolf tony zhang",
				price:329,
				_id:"safefsffdsfifej"
			},
			{
				title:"Werewolf xila lu",
				price:2.99,
				_id:"werwefwe"
			}
		]}
		//bind functions
		this.createWishList = this.createWishList.bind(this);
	}	
	
	createWishList = () => {
		const list = this.state.wishList.map((product) =>
			<ProductCondensed product={product} key={product.id} />			
		);
		return list;
		
	}
    render() {
        return(
            <div className="card">
				<div className="card-block">
					<h4 className="card-title">Wish List</h4>
					<ul className="list-group">
						{this.createWishList()}
					</ul>
				</div>
			</div>            
        );
    }
}

export default WishList;