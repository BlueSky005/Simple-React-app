
import React, {Component} from 'react';

export default class LoadProducts extends Component {

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
    return  (
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
    );
  }
}
