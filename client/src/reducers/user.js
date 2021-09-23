
import {Types} from "../actions/user";
const INITIAL_STATE = {
    user: {},
    authenticated: false,
};
export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SIGN_IN_SUCCESS: {
            return {
                ...state,
                authenticated: true,
                user: action.payload
            }
        }
        case Types.SIGN_IN_FAILURE:{
            return {
                ...state,
                authenticated: false,
            }
        }
        default: {
            return state;
        }
    }
}