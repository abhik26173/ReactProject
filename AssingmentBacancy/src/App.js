import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { ProductList } from './components/ProductList';
import { ProductSummary } from './components/ProductSummary';
import { Cart } from './components/Cart';
import { useSelector } from 'react-redux';
import { Checkout } from './components/Checkout';

function App() {
	const user = useSelector((state) => state.user);
	const isAuth = Boolean(user.loggedInUser);

	return (
		<Switch>
			<Route exact path="/">
				{isAuth ? <Redirect to="/product-list" /> : <Redirect to="/login" />}{' '}
			</Route>
			<Route path="/login">{isAuth ? <Redirect to="/product-list" /> : <Login />}</Route>
			<Route path="/product-list">{isAuth ? <ProductList /> : <Redirect to="/login" />}</Route>
			<Route path="/product-summary/:productId">{isAuth ? <ProductSummary /> : <Redirect to="/login" />}</Route>
			<Route path="/cart">{isAuth ? <Cart /> : <Redirect to="/login" />} </Route>
			<Route path="/checkout">{isAuth ? <Checkout /> : <Redirect to="/login" />} </Route>
			<Route path="/signup" component={Signup} />
		</Switch>
	);
}

export default App;
