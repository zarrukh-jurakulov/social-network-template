import {UserTypes} from '../contants/userTypes'

const initialState = {
      email : "zarrukhjurakulov474@gmail.com",
      password : "zarrux6064691",
      rememberMe: false,
      captcha : "npveB"
} 

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_EMAIL":
            return {...state, email: action.payload};  
        case "SET_PASSWORD":
            return {...state, password: action.payload} 
        case "SET_REMEMBER_ME":
            return {...state, rememberMe: action.payload}
        case "SET_CAPTCHA":
            return {...state, captcha: action.payload}
        default:
            return state;
    }
}