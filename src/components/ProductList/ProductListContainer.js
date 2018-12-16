import { connect } from 'react-redux';
import ProductList from './ProductList';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../../actions';

const mapDispatchToProps = dispatch => ({
  addToCart: () => {
    dispatch({ type: ADD_TO_CART });
  },
  removeFromCart: () => {
    dispatch({ type: REMOVE_FROM_CART });
  }
});

const ProductListContainer = connect(
  () => ({}),
  mapDispatchToProps
)(ProductList);

export default ProductListContainer;
