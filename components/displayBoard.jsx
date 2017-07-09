

import React, {Component} from 'react';
import _ from 'lodash';

export default class DisplayBoard extends Component  {

/*constructor(props)  {
  super(props);
  this.state = {term: 'text'};
}*/

componentWillMount() {

  this.setState({ products:this.props.products  });

}

LoadItems() {
  return this.props.products.map((product) => {
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
