import React, { useState, } from 'react';
import { useHistory } from 'react-router-dom';
import { userActions } from '../store/reducers/userReducer';
import { useDispatch } from 'react-redux';

const isValidEmail = (email) => {
	return email.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
};

export function Signup() {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errors, setErrors ] = useState([]);
	const [ info, setInfo ] = useState('');
	const history = useHistory();

	const dispatch = useDispatch();

	const createAccount = (e) => {
		e.preventDefault();

		const newErrors = [];
		if (!name) newErrors.push('Name is Mandatory');
		if (!email) newErrors.push('Email is Mandatory');
		if (!isValidEmail(email)) newErrors.push('Email is not in valid format');
		if (!password) newErrors.push('Password is Mandatory');

		if (newErrors.length > 0) {
			setErrors(newErrors);
			setInfo('');
		} else {
			setErrors([]);
			setName('');
			setEmail('');
			setPassword('');

			dispatch(userActions.signup({ name, email, password }));

			setInfo('Account Created, Please login');
		}
	};

	const backToLogin = () => {
		history.push('/login');
	};

	return (
		<div className="container mt-3">
			<h3 className="text-center">Signup</h3>

			{info && <p className="text-info">{info}</p>}
			{errors.map((error, index) => (
				<p className="text-danger" key={index}>
					{error}
				</p>
			))}

			<form autocomplete="off">
				<div className="form-group">
					<label htmlFor="email">Name:</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
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
				<button type="submit" className="btn btn-info" onClick={createAccount}>
					Create Account
				</button>

				<button type="submit" className="btn btn-primary mx-2" onClick={backToLogin}>
					Login
				</button>
			</form>
		</div>
	);
}
