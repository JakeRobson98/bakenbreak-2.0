

export const Types = {
    SIGN_IN_ERROR: 'auth/sign_in_error',
    SIGN_IN_REQUEST: 'auth/sign_in_request',
    SIGN_IN_SUCCESS: 'auth/sign_in_success'
};


export const signInUserRequest = () => ({
    type: Types.SIGN_IN_REQUEST
});

export const signInUserSuccess = (user) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: {
        user: user
    }
});

export const signInErrors = (error) => ({
    type: Types.SIGN_IN_ERROR,
    payload: {
        error
    }
});
