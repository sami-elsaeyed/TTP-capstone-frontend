import axios from 'axios';

import { GOT_USER_PREFS, LOG_IN, CREATE_ACCOUNT, LOG_OUT } from './actions';

const initState = {
    user: "",
}

const gotUserPrefs = (payload) => ({
    type: GOT_USER_PREFS,
    payload
})

export const getUserPrefs = () => {
    console.log("Thunking - getting user prefs now.");
    return async (dispatch) => {
        try {
            console.log("We are getting user prefs now.");
            const user = await axios.get("http://localhost:8080/auth/me", {withCredentials: true})
            console.log(user.data);
            dispatch(gotUserPrefs(user.data));
        }catch (error) { console.log(error) };
    };
};

const logIn = (payload) => ({
    type: LOG_IN,
    payload
})

export const loggingIn = () => {
    console.log("Thunking - logging in now.");
    return async (dispatch) => {
        try {  
            //login with dummy data
            const data = await axios.post('http://localhost:8080/auth/login', {
                "email": "test@gmail.com",
                "password": "testpassword"
            }, {withCredentials: true});
            console.log(data);
            dispatch(logIn(data));
        }catch (error) { console.log(error) };
    }
}
export const createAccount =(data)=>({
    type: CREATE_ACCOUNT,
    payload: data
})
export const createAccountThunk =(data)=>{
    console.log("Signing you up")
    console.log(data)
    return (dispatch) => {
        return axios.post('http://localhost:8080/auth/signup', data, {withCredentials: true})
          .then(res => {
            console.log('data', res.data)  
            return dispatch(createAccount(res.data) )})
      }
    }

    const logout = () => {
        return {
            type: LOG_OUT,
            payload: {}
        }
    }
    export const logoutThunk = () => dispatch => {
        axios.delete('http://localhost:8080/auth/logout', {withCredentials: true})
        .then(data => {
            console.log("Test");
            console.log(data);
            return dispatch(logout())
        })
    }

const rootReducer = (state = initState, action) => {
    console.log("REDUCER IS PROCESSING DISPATCHED ACTION");
    console.log('state', state);
    console.log('action', action);
    switch (action.type) {
      case GOT_USER_PREFS:
        return { ...state, user: action.payload };
    case LOG_IN:
        return { ...state, user: action.payload };
    case CREATE_ACCOUNT:
            return{...state, user: action.payload} ;
    case LOG_OUT: 
        return {...state, user: action.payload}
    default:
        return state;
    }
}

export default rootReducer;
