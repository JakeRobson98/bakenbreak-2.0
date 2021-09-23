import axios from 'axios';

export const Types = {
    GET_ORDERS_ERROR: 'orders/get_orders_error',
    GET_ORDERS_REQUEST: 'orders/get_orders_request',
    GET_ORDERS_SUCCESS: 'orders/get_orders_success',

    SELECT_ORDER_ERROR: 'orders/select_order_error',
    SELECT_ORDER_REQUEST: 'orders/select_order_request',
    SELECT_ORDER_SUCCESS: 'orders/select_order_success',

    UPDATE_ORDER_ERROR: 'orders/update_order_error',
    UPDATE_ORDER_REQUEST: 'orders/update_order_request',
    UPDATE_ORDER_SUCCESS: 'orders/update_order_success'
};



const api = axios.create({
    baseURL: 'https://us-central1-bake-n-break.cloudfunctions.net/app',
    timeout: 10000,
});

export const fetchOrders = () => {
    return dispatch => {
        dispatch(getOrdersRequest())
        api.get("/orders").then(orders => {
            dispatch(getOrdersSuccess(orders.data))
        }).catch(e => {
            dispatch(getOrdersErrors(e))
        })
    }
}

export const selectUnselectOrder = (orderNumber) => {
    console.log(orderNumber + "reducer")
    return dispatch =>{
        dispatch(selectOrderRequest())
        try {
            dispatch(selectOrderSuccess(orderNumber))
        } catch (error) {
            dispatch(selectOrderErrors(error))
        }
    }
}

export const updateOrder = (order) => {
    console.log("calls initial action")
    return dispatch =>{
        dispatch(updateOrderRequest())
        console.log(order)
        api.post("/orders/updateOrder", order).then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log("ERRORING", error)

            dispatch(updateOrderErrors(error))
        })
    }
}

export const getOrdersRequest = () => ({
    type: Types.GET_ORDERS_REQUEST
});

export const getOrdersSuccess = (orders) => ({
    type: Types.GET_ORDERS_SUCCESS,
    payload: {
        orders
    }
});

export const getOrdersErrors = (error) => ({
    type: Types.GET_ORDERS_ERROR,
    payload: {
        error
    }
});


export const selectOrderRequest = () => ({
    type: Types.SELECT_ORDER_REQUEST
});

export const selectOrderSuccess = (order) => ({
    type: Types.SELECT_ORDER_SUCCESS,
    payload: {
        order
    }
});

export const selectOrderErrors = (error) => ({
    type: Types.SELECT_ORDER_ERROR,
    payload: {
        error
    }
});

export const updateOrderRequest = () => ({
    type: Types.UPDATE_ORDER_REQUEST
});

export const updateOrderSuccess = (order) => ({
    type: Types.UPDATE_ORDER_SUCCESS,
    payload: {
        order
    }
});

export const updateOrderErrors = (error) => ({
    type: Types.UPDATE_ORDER_ERROR,
    payload: {
        error
    }
});
