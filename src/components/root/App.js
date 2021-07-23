import React from "react";
import { Container, Row } from "reactstrap";
import NavBar from "../nav/NavBar";
import Dashboard from "../root/Dashboard";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container className="p-2">
      <Row className="m-1">
        <NavBar></NavBar>
      </Row>
      <Row className="m-1">
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/products" exact component={Dashboard}></Route>
          <Route path="/cart" exact component={CartDetail}></Route>
          <Route
            path="/saveproduct/:productId"
            component={AddOrUpdateProduct}
          ></Route>
          <Route path="/saveproduct/" component={AddOrUpdateProduct}></Route>
          <Route path="/online-store/" exact component={Dashboard}></Route>
          <Route
            path="/online-store/products"
            exact
            component={Dashboard}
          ></Route>
          <Route path="/online-store/cart" exact component={CartDetail}></Route>
          <Route
            path="/online-store/saveproduct/:productId"
            component={AddOrUpdateProduct}
          ></Route>
          <Route
            path="/online-store/saveproduct/"
            component={AddOrUpdateProduct}
          ></Route>
          <Route exact component={NotFound}></Route>
        </Switch>
      </Row>
    </Container>
  );
}

export default App;
