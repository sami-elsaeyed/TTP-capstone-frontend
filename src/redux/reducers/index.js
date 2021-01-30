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
    } from './actions';

const initState = {
    user: "",
    Todo: [],
    weather: "",
    covid: "",
    news: "",
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
            const weather = await axios.get("http://localhost:8080/api/info/weather")
            console.log(weather.data);
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
            const covid = await axios.get("http://localhost:8080/api/info/covid")
            console.log(covid.data);
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
            const news = await axios.get("http://localhost:8080/api/info/news")
            console.log(news.data);
            dispatch(gotNews(news.data));
        }catch (error) { console.error(error) };
    };
};

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

export const loggingIn = (userInfo) => {
    console.log("Thunking - logging in now.");
    return async (dispatch) => {
        try {  
            console.log(userInfo);
            //login with dummy data
            const user = await axios.post('http://localhost:8080/auth/login', userInfo, {withCredentials: true});
            console.log(user);
            dispatch(logIn(user.data));
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
            payload: "",
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
            return axios.post('http://localhost:8080/api/tasks', data)
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
            return axios.delete(`http://localhost:8080/api/tasks/${id}`)
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
        default:
            return state;
    }
}

export default rootReducer;
