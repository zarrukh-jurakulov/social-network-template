

 
export const setEmail = (email) => {
    return {
        type : "SET_EMAIL",
        payload: email
    }
}

export const setPassword = (password) => {
    return {
        type : "SET_PASSWORD",
        payload: password
    }
}

export const setRememberMe = (rememberMe) => {
    return {
        type : "SET_REMEMBER_ME",
        payload: rememberMe
    }
}


export const setCaptcha = (captcha) => {
    return {
        type : "SET_CAPTCHA",
        payload: captcha
    }
}




