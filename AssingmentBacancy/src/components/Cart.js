import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavBar } from './NavBar';
import { productActions } from '../store/reducers/productReducer';
import { useHistory } from 'react-router-dom';

export const Cart = () => {
	const { cart } = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const totalPrice = cart.reduce((total, product) => total + +product.unit_price, 0);
	const history = useHistory();

	const handleRemoveFromCart = (productId) => {
		dispatch(productActions.removeFromCart(productId));
	};

	const handleCheckout = () => {
		history.push('/checkout');
	};

	return (
		<div className="container">
			<NavBar />

			{cart.length === 0 ? (
				<h5 className="text-center text-danger">Cart is Empty</h5>
			) : (
				<Fragment>
					<table className="table table-hover">
						<thead>
							<tr>
								<th>Name</th>
								<th>Price</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((product) => (
								<tr key={product.product_id}>
									<td>{product.product_name}</td>
									<td>
										{Number(product.unit_price).toLocaleString('en-US', {
											style: 'currency',
											currency: 'INR'
										})}
									</td>
									<td>
										<button
											className="btn btn-outline-danger"
											onClick={() => handleRemoveFromCart(product.product_id)}
										>
											Remove
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<hr />
					<div className="mt-1">
						<h4>
							Total: {Number(totalPrice).toLocaleString('en-US', { style: 'currency', currency: 'INR' })}
						</h4>
					</div>
					<div className="mt-1">
						<button className="btn btn-success" onClick={handleCheckout}>
							Checkout
						</button>
					</div>
				</Fragment>
			)}
		</div>
	);
};
