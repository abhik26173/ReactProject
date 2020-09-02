import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../store/reducers/userReducer';

export function Login() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errors, setErrors ] = useState([]);
	const history = useHistory();

	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleLogin = (e) => {
		e.preventDefault();

		const loggedInUser = user.usersInDb.find((user) => user.email === email && user.password === password);

		if (loggedInUser) {
			dispatch(userActions.login(loggedInUser));
			history.push('/product-list');
		} else {
			setErrors([ 'Invalid Email/Password' ]);
		}
	};

	const handleSignup = () => {
		history.push('/signup');
	};

	return (
		<div className="container mt-3">
			<h3 className="text-center">Login</h3>

			{errors.map((error, index) => (
				<p className="text-danger" key={index}>
					{error}
				</p>
			))}
			<form autoComplete="off">
				<div className="form-group">
					<label htmlFor="email">Email address:</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="pwd">Password:</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter password"
						id="pwd"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary" onClick={handleLogin}>
					Login
				</button>
				<button type="submit" className="btn btn-info mx-2" onClick={handleSignup}>
					Signup
				</button>
			</form>
		</div>
	);
}
