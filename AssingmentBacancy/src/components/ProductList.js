import React from 'react';
import { NavBar } from './NavBar';
import { useSelector } from 'react-redux';
import { Product } from './Product';

export const ProductList = () => {
	const product = useSelector((state) => state.product);

	return (
		<div className="container">
			<NavBar />

			<div className="card-deck">
				{product.products.map((product) => <Product key={product.product_id} product={product} />)}
			</div>
		</div>
	);
};
