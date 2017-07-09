

import React, {Component} from 'react';
import _ from 'lodash';

export default class DisplayBoard extends Component  {

componentWillMount() {
this.setState({ products:this.props.products  });
this.setState({ productNames: _.map(this.props.products, 'product_name')  });
  this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(e) {
  let selectedProduct = e.target.value;

  let filteredProducts = _.filter(this.props.products,['product_name',selectedProduct]);

  console.log(filteredProducts);

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


LoadItems() {
  return this.state.products.map((product) => {
    return (

          <tr key={product.productId}>
          <td>{product.product_name}</td>
          <td>{product.color}</td>
          <td>{product.Size}</td>
          <td>{product.Quantity}</td>
        </tr>

    );
  });

}

  render()  {
    return (
      <div>

      <div>
        Product Name <br />
          {this.loadProducts()}

      </div> <br />

          <table>
              <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Qty</th>
                  </tr>
              </thead>

              <tbody>

                  {this.LoadItems()}

              </tbody>
          </table>

      </div>
    );
  }

}
