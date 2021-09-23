import {combineReducers} from 'redux';
import UserReducer from "./user"
import OrdersReducer from "./orders"
import CostingsReducer from "./costings"


export default combineReducers({
	user: UserReducer,
    orders: OrdersReducer
});