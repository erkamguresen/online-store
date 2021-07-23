import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import alertify from "alertifyjs";
import * as cartActions from "../../redux/actions/cartActions";

class CartDetail extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " has been removed from the cart");
  }

  render() {
    return (
      <div>
        <h1>Your Cart</h1>
        <div className="">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((cartItem) => (
                <tr key={cartItem.id}>
                  <th scope="row">{cartItem.product.id}</th>
                  <td>{cartItem.product.productName}</td>
                  <td>{cartItem.product.unitPrice}</td>
                  <td>{cartItem.quantity}</td>
                  <td>
                    <Button
                      color="danger"
                      onClick={() => this.removeFromCart(cartItem.product)}
                    >
                      X
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
