import React, {Component} from 'react';
import './product-condensed.css';
import DataService from '../services/data-service';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

let ds = new DataService();
class ProductCondensed extends Component {
    
    constructor(props) {
        super(props);
        
        
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }
    
    onButtonClicked = () => {
        ds.removeWishListItem(this.props.product);

    }
    
    
    render() {
//		I put an extra row div to make this happen
        return(			
        	<li className="list-group-item single">	
				<div className="row">
					<a onClick={() => this.onButtonClicked()} className="btn btn-outline-danger">X</a>
					<p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
				</div>
				
			</li>       
        );
    }
}

export default ProductCondensed;