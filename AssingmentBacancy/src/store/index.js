import { userReducer } from './reducers/userReducer';
import { productReducer } from './reducers/productReducer';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
	user: userReducer,
	product: productReducer
});

const store = createStore(rootReducer);

store.subscribe(() => console.log('State update', store.getState()));

export default store;
