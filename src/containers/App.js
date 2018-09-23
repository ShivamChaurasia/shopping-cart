import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from 'react-notify-toast';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CartContainer from './CartContainer';
import ProductsPage from './ProductsPage';
import ProductDetails from './ProductDetails';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { getCartProducts } from '../reducers';

const App = ({ fetching, products}) => (
  <Router>
    <main>
      <Layout>
        {fetching && <Loader />}
        <Header itemsInCart={products.length}/>
        <Layout.Content>
          <Switch>
            <Route
              path="/"
              exact
              component={ProductsPage}
            />
            <Route
              path="/product/:id"
              exact
              component={ProductDetails}
            />
            <Route
              path="/cart"
              exact
              component={CartContainer}
            />
            <Redirect to="/"/>
          </Switch>
        </Layout.Content>
      </Layout>
      <Notifications />
    </main>
  </Router>
);

App.propTypes = {
  fetching: PropTypes.bool,
  products: PropTypes.array.isRequired
}


const mapStateToProps = (state) => ({
  fetching: state.products.fetching,
  products: getCartProducts(state),
})

export default connect(
  mapStateToProps,
)(App)
