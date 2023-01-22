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

    const onChangePassword=useCallback((e)=>{
        console.log(e.target.value)
        setPassword(e.target.value)
        if(e.target.value===''){
            setPasswordInputStart(false)        }
    },[])

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
      <label for="email">이메일 주소</label>
      <div>
        <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
      </div>

    
      <span>닉네임</span>
      <div>
        <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
      </div>
    
   
      <span>비밀번호</span>
      <div>
        <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
      </div>
    
    
      <span>비밀번호 확인</span>
      <div>
        <Input
          type="password"
          id="password-check"
          name="password-check"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />
      </div>
      {passwordInputStart?mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>:null}
      {passwordCheckSuccess&& <Success>비밀번호가일치합니다.</Success>}
      {!nickname && <Error>닉네임을 입력해주세요.</Error>}
      {signUpError && <Error>{signUpError}</Error>}
      {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
    
    <button type="submit">회원가입</button>
  </form>
  </>
  )
}

export default SignUp