import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
    // console.log(this.props.categories);
  }

  selectCategory(category) {
    this.props.actions.changeCategory(category);
    if (category !== "") {
      this.props.actions.getProducts(category.id);
    } else {
      this.props.actions.getProducts();
    }
  }

  render() {
    return (
      <div className="m-1">
        <h3>
          <Badge className="badge bg-warning text-dark">Categories</Badge>
        </h3>
        <ListGroup>
          <ListGroupItem
            active={this.props.currentCategory === "" || undefined || null}
            onClick={() => this.selectCategory("")}
            key={-1}
          >
            All Categories
          </ListGroupItem>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.currentCategory,
    categories: state.categoriesArray,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
