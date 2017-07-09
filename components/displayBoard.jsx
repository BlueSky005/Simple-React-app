

import React, {Component} from 'react';
import LoadProducts from './loadProducts';
import _ from 'lodash';

export default class DisplayBoard extends Component  {

constructor(props)  {
  super(props);
  this.handleInputChange = this.handleInputChange.bind(this);
}

componentWillMount() {
  this.setState({ products:this.props.products  });
  this.setState({ productNames: _.map(this.props.products, 'product_name')});
}

handleInputChange(e) {
  let selectedProduct = e.target.value;
  let filteredProducts = _.filter(this.props.products,['product_name',selectedProduct]);
  this.setState({products: filteredProducts});
}

loadProducts()  {

  let productNames = _.uniqWith(this.state.productNames, _.isEqual);
  return productNames.map((productName) => {
    return (
              <div>
                <input type="radio" name="names" value={productName} key={productName} onChange={this.handleInputChange} />{productName}<br />
              </div>
           );
  });
}

  render()  {
    return (
      <div>
        Product Name <br />
          {this.loadProducts()}
          <br />
        <LoadProducts products={this.state.products} />
      </div>
    );
  }
}
