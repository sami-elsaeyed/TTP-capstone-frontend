import axios from 'axios';
import { CREATE_ACCOUNT } from './actions';

const initState={
    allAccounts: [
        {
        },
],
}
export const createAccount =(data)=>({
    type: CREATE_ACCOUNT,
    data: data
})

export const createAccountThunk =(data)=>{
    console.log("Signing you up")
    return (dispatch) => {
        return axios.post('', data)
          .then(res => res.data)
          .then(json => {
            dispatch({ createAccount, data })
          })
      }
    }

const rootReducer = (state= initState, action)=>{
    switch (action.type) {
        case 'CREATE_ACCOUNT':
            return{...state, allAccounts:[...state.allAccounts, action.data]}
        default:
            return state;
    }
} 
export default rootReducer   