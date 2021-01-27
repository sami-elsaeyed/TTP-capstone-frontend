import axios from 'axios';
import { GOT_USER_PREFS } from './actions';

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
            const user = await axios.get('http://localhost:8080/auth/me')
            console.log(user);
            dispatch(gotUserPrefs(user));
        }catch (error) { console.log(error) };
    };
};

const rootReducer = (state = initState, action) => {
    console.log("REDUCER IS PROCESSING DISPATCHED ACTION");
    console.log('state', state);
    console.log('action', action);
    switch (action.type) {
      case GOT_USER_PREFS:
        return { ...state, user: action.payload };
      default:
        return state;
    }
}

export default rootReducer;