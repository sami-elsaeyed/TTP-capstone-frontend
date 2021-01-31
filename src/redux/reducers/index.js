import axios from 'axios';

import { GOT_USER_PREFS, 
        LOG_IN, 
        CREATE_ACCOUNT, 
        LOG_OUT,
        GET_TODO_ITEMS, 
        ADD_TODO_ITEM, 
        DELETE_TODO_ITEM, 
        GOT_WEATHER,
        GOT_NEWS,
        GOT_COVID,
        EDIT_PREFERENCES,
        CAUGHT_ERROR
    } from './actions';

const initState = {
    user: "",
    Todo: [],
    weather: "",
    covid: "",
    news: "",
    error: ''
}

const gotWeather = (payload) => ({
    type: GOT_WEATHER,
    payload
})

export const getWeather = () => {
    console.log("Thunking - getting weather now");
    return async (dispatch) => {
        try{
            console.log("Getting weather");
            const weather = await axios.get("https://ttp-capstone-widgethub.herokuapp.com/api/info/weather")
            dispatch(gotWeather(weather.data));
        }catch (error) { console.error(error) };
    };
};

const gotCovid = (payload) => ({
    type: GOT_COVID,
    payload
})

export const getCovid = () => {
    console.log("Thunking - getting covid now");
    return async (dispatch) => {
        try{
            console.log("Getting covid");
            const covid = await axios.get("https://ttp-capstone-widgethub.herokuapp.com/api/info/covid")
            dispatch(gotCovid(covid.data));
        }catch (error) { console.error(error) };
    };
};

const gotNews = (payload) => ({
    type: GOT_NEWS,
    payload
})

export const getNews = () => {
    console.log("Thunking - getting news now");
    return async (dispatch) => {
        try{
            console.log("Getting news");
            const news = await axios.get("https://ttp-capstone-widgethub.herokuapp.com/api/info/news")
            dispatch(gotNews(news.data));
        }catch (error) { console.error(error) };
    };
};

export const editPreferencesThunk = (newPrefs) => {
    console.log("Thunking - getting user prefs now.");
    return async (dispatch) => {
        try {
            console.log("We are getting user prefs now.");
            const user = await axios.put(`https://ttp-capstone-widgethub.herokuapp.com/api/preferences/${newPrefs.id}`, newPrefs)
            dispatch(editPreferences(user.data));
        }catch (error) { console.log(error) };
    };
};

const editPreferences = (payload) => ({
    type: EDIT_PREFERENCES,
    payload
})


const gotUserPrefs = (payload) => ({
    type: GOT_USER_PREFS,
    payload
})

export const getUserPrefs = () => {
    console.log("Thunking - getting user prefs now.");
    return async (dispatch) => {
        try {
            console.log("We are getting user prefs now.");
            const user = await axios.get("https://ttp-capstone-widgethub.herokuapp.com/auth/me", {withCredentials: true})
            console.log(user.data);
            dispatch(gotUserPrefs(user.data));
        }catch (error) { console.log(error) };
    };
};

const caughtError = payload => ({
    type:CAUGHT_ERROR,
    payload
})

const logIn = (payload) => ({
    type: LOG_IN,
    payload
})

export const loggingIn = (userInfo) => {
    console.log("Thunking - logging in now.");
    return async (dispatch) => {
        try {  
            console.log(userInfo);
            const user = await axios.post('https://ttp-capstone-widgethub.herokuapp.com/auth/login', userInfo, {withCredentials: true});
            console.log(user);
            dispatch(logIn(user.data));
        }
        catch (error) { 
            return dispatch(caughtError(error.response.data))
        };
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
        return axios.post('https://ttp-capstone-widgethub.herokuapp.com/auth/signup', data, {withCredentials: true})
          .then(res => {
            console.log('data', res.data)  
            return dispatch(createAccount(res.data) )
        })
        .catch(error => {
            return dispatch(caughtError(error.response.data))
        })
      }
    }

    const logout = () => {
        return {
            type: LOG_OUT,
            payload: "",
        }
    }
    export const logoutThunk = () => dispatch => {
        axios.delete('https://ttp-capstone-widgethub.herokuapp.com/auth/logout', {withCredentials: true})
        .then(data => {
            console.log("Test");
            console.log(data);
            return dispatch(logout())
        })
    }

    export const getTodoItems = (payload)=>({
        type: GET_TODO_ITEMS,
        payload,
    })    
    export const getTodoItemsThunk=()=>{
        return async (dispatch) => {
            try {
                console.log("We are getting todo items now.");
                const items = await axios.get("")
                console.log(items.data);
                dispatch(getTodoItems(items.data));
            }catch (error) { console.log(error) };
        };
    };

    export const addTodoItem =(payload)=>({
        type: ADD_TODO_ITEM,
        payload,
    })
    export const addTodoItemThunk =(data)=>{
        console.log("Adding Item")
        console.log(data)
        return (dispatch) => {
            return axios.post('https://ttp-capstone-widgethub.herokuapp.com/api/tasks', data)
              .then(res => {
                console.log('data', res.data)  
                return dispatch(addTodoItem(res.data) )})
          }
    }

    export const deleteTask =(payload)=>({
        type: DELETE_TODO_ITEM,
        payload,
    })
    export const deleteTaskThunk=(id)=>{
        return (dispatch) => {
            return axios.delete(`https://ttp-capstone-widgethub.herokuapp.com/api/tasks/${id}`)
              .then(() => {
                dispatch( deleteTask (id))
              })
          };
        }    

const rootReducer = (state = initState, action) => {
    console.log("REDUCER IS PROCESSING DISPATCHED ACTION");
    console.log('state', state);
    console.log('action', action);
    switch (action.type) {
      case GOT_USER_PREFS:
        return { ...state, 
            user: action.payload 
             };
        case LOG_IN:
            return { ...state, 
                user: action.payload
             };
        case CREATE_ACCOUNT:
            return{...state, 
                user: action.payload
            } ;
        case LOG_OUT: 
            return {...state, 
                user: action.payload
            };
        case GET_TODO_ITEMS:
            return {...state, 
                Todo: action.payload
            } 
        case ADD_TODO_ITEM:
            return {...state, 
                Todo:[...state.Todo, action.payload]
            }    
        case DELETE_TODO_ITEM:
            return {...state, 
                Todo: state.Todo.filter(task => task.id != action.payload)
            }
        case GOT_WEATHER:
            return {...state,
                weather: action.payload
            }  
        case GOT_COVID:
            return {...state,
                covid: action.payload
            }  
        case GOT_NEWS:
            return {...state,
                news: action.payload
            }  
        case EDIT_PREFERENCES:
            return {...state} 
        case CAUGHT_ERROR: 
            return {...state, error: action.payload}
        default:
            return state;
    }
}

export default rootReducer;
