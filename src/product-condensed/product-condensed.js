import React, {Component} from 'react';
import './product-condensed.css';

class ProductCondensed extends Component {
    render() {
//		I put an extra row div to make this happen
        return(			
        	<li className="list-group-item single">	
				<div className="row">
					<a className="btn btn-outline-danger">X</a>
					<p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
				</div>
				
			</li>       
        );
    }
}

export default ProductCondensed;