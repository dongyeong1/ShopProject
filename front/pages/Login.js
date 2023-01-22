import React, { useCallback } from 'react'
import useInput from '../hooks/useInput';
import {Button} from 'antd'


function Login() {

    const [email,onChangeEmail,setEmail]=useInput()
    const [password,onChangePassword,setEmail]=useInput()


    const loginForm=useCallback((e)=>{
        e.preventDefault();
    },[])

  return (
    <>
    <form onSubmit={loginForm}>
        <div>
            <label htmlFor='user-id'>이메일</label>
            <br></br>
            <Input name="user-id" type='email' value={email} onChange={onChangeEmail} required />
        </div>

        <div>
            <label htmlFor='user-password'>비밀번호</label>
            <br></br>
            <Input type='password' name="user-password" value={password} onChange={onChangePassword} required />
        </div>

        
            <Button type='primary' htmlType='submit'>로그인 </Button>
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
    </form>
    </>
  )
}

export default Login