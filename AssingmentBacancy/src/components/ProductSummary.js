import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavBar } from './NavBar';
import { productActions } from '../store/reducers/productReducer';

export const ProductSummary = () => {
	const { productId } = useParams();
	const productState = useSelector((state) => state.product);

	const product = productState.products.find((product) => product.product_id === productId);
	const dispatch = useDispatch();

	const handleAddToCart = (productId) => {
		dispatch(productActions.addToCart(productId));
	};

	const handleRemoveFromCart = (productId) => {
		dispatch(productActions.removeFromCart(productId));
	};

	const getCartOptions = (productId) => {
		console.log(Boolean(productState.cart.find((product) => product.product_id === productId)));

		const isAvailInCart = Boolean(productState.cart.find((product) => product.product_id === productId));

		if (isAvailInCart)
			return (
				<button className="btn btn-outline-danger" onClick={() => handleRemoveFromCart(productId)}>
					Remove From Cart
				</button>
			);
		else
			return (
				<button className="btn btn-outline-danger" onClick={() => handleAddToCart(productId)}>
					Add to Cart
				</button>
			);
	};

	return (
		<Fragment>
			<NavBar />
			<div className="container">
				<div className="row ">
					<div className="col-6">
						<img src={product.image} alt={product.product_name} style={{ width: '50%', height: 230 }} />
					</div>
					<div className="col-6">
						<p>Name: {product.product_name}</p>
						<p>Type: {product.type}</p>
						<p>Category: {product.category}</p>
						<p>
							Price:{' '}
							{Number(product.unit_price).toLocaleString('en-US', { style: 'currency', currency: 'INR' })}
						</p>

						{product.quantity ? (
							<p className="text-success">{'In Stock'}</p>
						) : (
							<p className="text-danger">{'Out of Stock'}</p>
						)}
						{Boolean(product.quantity) && getCartOptions(product.product_id)}
					</div>
				</div>
			</div>
		</Fragment>
	);
};
