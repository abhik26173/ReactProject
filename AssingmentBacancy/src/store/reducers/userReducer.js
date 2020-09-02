const initialState = {
	usersInDb: [],
	loggedInUser: null
};

export const userReducer = (state = initialState, action) => {
	const newState = { ...state };

	if (action.type === 'SIGNUP') {
		newState.usersInDb = [ ...newState.usersInDb, action.payload ];
	} else if (action.type === 'LOGIN') {
		newState.loggedInUser = action.payload;
	} else if (action.type === 'LOGOUT') {
		newState.loggedInUser = null;
	}

	return newState;
};

export const userActions = {
	login: (user) => ({ type: 'LOGIN', payload: user }),
	logout: () => ({ type: 'LOGOUT' }),
	signup: (newUser) => ({ type: 'SIGNUP', payload: newUser })
};
