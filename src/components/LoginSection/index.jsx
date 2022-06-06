import React from 'react'
import { LoginContainer, LoginForm, LoginInput, LoginWrapper } from './LoginElements'
import { AiOutlineLock } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

import LoginBg from '/Users/jacobdominguez/Documents/club-indomita/src/components/images/pass4.gif'
const LoginSection = () => {
  let navigate = useNavigate();
    const verify = () =>{
        let pass = document.getElementById("password").value;
        if(pass == 'libertad'){
            navigate('/home')
        }
        
    }
  return (
    <LoginContainer style={{ backgroundImage: `url(${LoginBg}) ` }} >
      <LoginForm>
         <LoginWrapper> 
            <AiOutlineLock/>
            <LoginInput placeholder='password' type='password' id='password' onInput={verify}/>
        </LoginWrapper>
      </LoginForm>
    </LoginContainer>
  )
}

export default LoginSection

