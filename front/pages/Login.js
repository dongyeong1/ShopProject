import React, { useCallback, useEffect } from 'react'
import useinput from '../hooks/useInput';
import {Button, Form,Input} from 'antd'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import Link from 'next/link';
import styled from 'styled-components'
import Router from "next/router";
import useSWR from 'swr'
import fetcher from '../utils/fetcher';
import { formatCountdown } from 'antd/lib/statistic/utils';
import { redirect } from 'next/dist/server/api-utils';

const ButtonWrapper=styled.div`
margin-top:10px;
`

// const FormWrapper=styled(formatCou)`
//     padding:10px;
//     `

function Login() {
    const [email,onChangeEmail]=useinput()
    const [password,onChangePassword]=useinput()

    const {data:userData,error,revalidate,mutate}=useSWR('http://localhost:3065/user/users',fetcher)




     const loginForm=useCallback((e)=>{
        axios.post('http://localhost:3065/user/login',
        {
             email,
             password
         },{
             withCredentials:true
    
         })
         
         .then((res)=>{
             alert('로그인성공')
             // revalidate()
             mutate(res.data)
             // console.log('asdsadasd',userData)
             // 
         })
         .catch((err)=>{
             console.log(err)
         })
        },[email,password])
    

    useEffect(()=>{
        if(userData){
            Router.push('/Home')

        }
    },[userData])

    // if(userData){
    //     // return Router.push("/")
    //     return <redirect></redirect>
    //     return <Redirect to={{
    //         pathname:'/Home'
    //     }}></Redirect>
    // }

  return (
    <>
    <Form onFinish={loginForm}>
        <div>
            <label htmlFor='user-id'>이메일</label>
            <br></br>
            <Input name="user-id" type='email' onChange={onChangeEmail} />
        </div>

        <div>
            <label htmlFor='user-password'>비밀번호</label>
            <br></br>
            <Input type='password' name="user-password" onChange={onChangePassword} />
        </div>

        <ButtonWrapper  style={{marginTop:10}}>
            <Button type='primary' htmlType='submit' >로그인 </Button>
            <Link href="/signup"><button>회원가입</button></Link>
        </ButtonWrapper>
    </Form>
    </>
  )
}

export default Login