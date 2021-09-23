
import { Types } from "../actions/orders";
import update from 'react-addons-update';

const INITIAL_STATE = {
    orders: [],
    orderStatuses:{
        UNREAD: "unread",
        READ: "read",
        PREPARING: "preparing",
        DELIVERED: "delivered",
        ARCHIVED: "archived"
    },
    bakesData: [
        {
            name: "Bake n Break Tofu Cheeseburger Slider Tray",
            sku: ""
        }
    ]
};

//todo Add loading to the ORDER_REQUEST cases!!
export default function orders(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_ORDERS_SUCCESS: {
            return {
                ...state,
                orders: action.payload.orders
            }
        }
        case Types.GET_ORDERS_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case Types.SELECT_ORDER_SUCCESS: {
            console.log(action.payload.order)
            let index = state.orders.findIndex((element) => {return element.meta.order_number === action.payload.order})
            let valueToSet = state.orders[index].isSelected === undefined ? true : !(state.orders[index].isSelected)
            console.log(valueToSet)
            console.log(index)
            return {
                ...state,
                orders: state.orders.map(
                    (order, i) => i === index ? {...order, isSelected: valueToSet}
                        : order
                )
            }
        }
        case Types.SELECT_ORDER_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case Types.UPDATE_ORDER_SUCCESS: {
            return {
                ...state,
                orders: action.payload.orders
            }
        }
        case Types.UPDATE_ORDER_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}