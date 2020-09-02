import React, { useEffect } from 'react';
import { productActions } from '../store/reducers/productReducer';
import { useDispatch } from 'react-redux';
import { NavBar } from './NavBar';

export const Checkout = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productActions.clearCart());
	}, []);

	return (
		<div className="container">
			<NavBar />

			<div className="alert alert-success">
				<strong>Booking Success!!!</strong> Thanks for shopping with us. Our customer representative will
				contact you.
			</div>
		</div>
	);
};
