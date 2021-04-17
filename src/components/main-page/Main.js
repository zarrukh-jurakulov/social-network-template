import React, { useState, useEffect } from 'react'
import './main.css'
import { IoReloadCircleOutline } from 'react-icons/io5'
import axios from 'axios';
import info from '../../assets/info.png'
import close from '../../assets/close.png'
import { USER_LOGIN, GET_CAPTCHA } from './../../constants'

const Main = ({setAuthed}) => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [captchaValue, setCaptchaValue] = useState('')

    const [postRequest, setPostRequest] = useState([])
    const [captchaRequest, setCaptchaRequest] = useState([])
    
    const [closeMessage, setCloseMessage] = useState(false)
    const [alert, setAlert] = useState('')
    
    useEffect(() => {
        getCaptchaData()
    }, [])

    const handleEmailValue = (e) => {
        setEmailValue(e.target.value)
    }

    const handlePasswordValue = (e) => {
        setPasswordValue(e.target.value)
    }

    const handleCaptchaValue = (e) => {
        setCaptchaValue(e.target.value)
    }

    const handleRememberMe = () => {
              setRememberMe(true)
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(emailValue.length < 1){
            setAlert('error email cannot be empty')
            setCloseMessage(true)
        }else if(passwordValue.length < 4){
            setAlert("Error password cannot be less from 4")
            setCloseMessage(true)
        }else if (captchaValue.length < 1){
            setAlert("Error captcha cannot be empty")
            setCloseMessage(true)
        }else {
            sendInfo()
        }
    }

    const submit =  () => {
        getCaptchaData()
        //sendInfo()
    }

    // Send request email, password and captcha code with POST method 
    const sendInfo = async () => {
        let payload = {
            email: emailValue,
            password: passwordValue,
            rememberMe: false, 
            captcha: captchaValue
        };console.log(payload);
        let res = await axios.post(USER_LOGIN, payload);
            if(res.data.messages){
                setAlert(res.data.messages[0])
                setRememberMe(true)
                //4
            }
            console.log(res);
            setAuthed(res.resultCode === 0 && true)
            }

        // Get captcha image with GET method
    const getCaptchaData = async () => {
        await axios.get(GET_CAPTCHA)
            .then(res => {
                // console.log('h',res.config.url);
                setCaptchaRequest(res.config.url);
            });
    }

    const refreshBtn = () => {
        window.location.reload(false)
        //captchaRequest.location.reload(false)
    }   
               
              
    return (
        <div className='mainPage'>

            { closeMessage && <div className='messageContainer'>
                <img className='infoMessageImg' src={info} alt="infoLogo"/>
                <div className='verifyingMessage'>
                    <span>{alert}</span>
                </div>
                <button className='closeBtn' onClick={()=> setCloseMessage(!closeMessage)}>
                   <img className='closeMessageImg' src={close} alt="close"/>
               </button>
            </div>}   
            
            <form onSubmit={handleSubmit} noValidate>
               <p>Email</p>
               <input className="mainPageInput" onChange={handleEmailValue} type="email" name="email" id="email"/>
               <p>Password</p>
               <input className="mainPageInput" onChange={handlePasswordValue} type="password" name="password" id="password"/>
               
                <div className='mainPageChechbox'>
                    <input type="checkbox" onChange={handleRememberMe} name="checkbox" id="checkboxInput"/>
                    <p>Remember Me</p>
                </div>
                <div className='captcha'>
                    <div className='captchaCodeContainer'>
                       <div className='captcaCode'>
                          <img src={captchaRequest} alt='capcha-code' />
                       </div>
                       <div className='captchaReloadBtn' onClick={refreshBtn}><IoReloadCircleOutline /></div>
                    </div>
                    <div className='captchaInputContainer'>
                    <input onChange={handleCaptchaValue} className='mainPageInput'  type="text" name="" id=""/>
                    </div>
                </div>
                <button onClick={submit}>SIGN IN</button> 
            </form>
        </div>
    )
}

export default Main