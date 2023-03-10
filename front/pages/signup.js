import React ,{useCallback, useState}from 'react'
import {Input} from 'antd'
import useInput from '../hooks/useInput'
import styled from '@emotion/styled';
import axios from 'axios'

function SignUp() {


 const Error = styled.div`
color: #e01e5a;
margin: 8px 0 16px;
font-weight: bold;
`;
 const Success = styled.div`
color: #2eb67d;
font-weight: bold;
`;
    const [email,onChangeEmail,setEmail]=useInput()
    const [nickname,onChangeNickname,setNickname]=useInput()
    // const [password,onChangePassword,setPassword]=useInput()
    const [password,setPassword]=useState();
    // const [passwordCheck,onChangePasswordCheck,setPasswordCheck]=useInput()
    const [passwordCheck,setPasswordCheck]=useState();
    const [passwordInputStart,setPasswordInputStart]=useState(false);
    const [passwordCheckSuccess,setPasswordCheckSuccess]=useState(false);
    const [mismatchError, setMismatchError] = useState(false);
    const [signUpError, setSignUpError] = useState('');
    const [signUpSuccess, setSignUpSuccess] = useState(false);

    const onChangePassword=(e)=>{
        console.log(e.target.value)
        setPassword(e.target.value)
        if(e.target.value===''){
            setPasswordInputStart(false)        }
    }

   

    const onChangePasswordCheck=useCallback((e)=>{
        setPasswordInputStart(true)
        setPasswordCheck(e.target.value)
            if(e.target.value!==password){
                setMismatchError(true)
                console.log(mismatchError)
                setPasswordCheckSuccess(false)


            }else{
                setPasswordCheckSuccess(true)
                setMismatchError(false)
                console.log(mismatchError)

            }
    },[passwordCheck,password,mismatchError,passwordInputStart])

    const onSubmit=useCallback((e)=>{
        console.log('asasa')
        
            e.preventDefault()
            axios.post('http://localhost:3065/user/signUp',{
                email,
                nickname,
                password
            })
            .then((res)=>{
                console.log(res.data)
            })
            .catch((error)=>{
                console.log(error.response.data)
            })
    },[])
  return (
      <>
    <form onSubmit={onSubmit}>
      <label for="email">????????? ??????</label>
      <div>
        <input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
      </div>

    
      <span>?????????</span>
      <div>
        <input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
      </div>
    
   
      <span>????????????</span>
      <div>
        <input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
      </div>
    
    
      <span>???????????? ??????</span>
      <div>
        <Input
          type="password"
          id="password-check"
          name="password-check"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />
      </div>
      {passwordInputStart?mismatchError && <Error>??????????????? ???????????? ????????????.</Error>:null}
      {passwordCheckSuccess&& <Success>??????????????????????????????.</Success>}
      {!nickname && <Error>???????????? ??????????????????.</Error>}
      {signUpError && <Error>{signUpError}</Error>}
      {signUpSuccess && <Success>???????????????????????????! ?????????????????????.</Success>}
    
    <button type="submit">????????????</button>
  </form>
  </>
  )
}

export default SignUp