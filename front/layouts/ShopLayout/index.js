import React,{useEffect,useCallback}from 'react'
import {Container,Nav,Navbar, NavLink} from 'react-bootstrap'
import {Menu,Button,Row,Col,Input} from 'antd'
import {AiOutlineUser,AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
import { InputSearch,NavComponent } from './style'
import useSWR from 'swr'
import fetcher from '../../utils/fetcher'
import Router from "next/router";
import { Link } from 'react-router-dom'
import axios from 'axios'


function ShopLayout({children}) {

const {data:userData,error,revalidate,mutate}=useSWR('http://localhost:3065/user/users',fetcher)
const LogOut=useCallback(()=>{
    axios.post('http://localhost:3065/user/logout',null,{
        withCredentials:true
    })
    .then((res)=>{
        mutate(res.data)
        alert('로그아웃완료')
       
    })
    .catch((err)=>{
        console.log(err)
    })
},[mutate])


  return (
    <>
    <div>
     <Navbar bg="light" variant="light">
        <Container style={{position:'relative'}}>
          <Navbar.Brand href="#home">dongShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{marginLeft:50}} href="#home">Home</Nav.Link>
            <Nav.Link style={{marginLeft:20}} href="#features">Features</Nav.Link>
            <Nav.Link style={{marginLeft:20}} href="#pricing">Pricing</Nav.Link>
            <Nav.Link>
              <InputSearch placeholder='search'/>
              {/* <i class="fa-solid fa-magnifying-glass"></i> */}
              
              
    </Nav.Link>    
    {userData?<Nav.Link><Button onClick={LogOut}>LogOut</Button></Nav.Link>:null}
    <Nav.Link style={{position:'absolute',left:870,top:3 }} href="#pricing"><AiOutlineSearch  size={25}/></Nav.Link>
    {userData?<Nav.Link style={{marginLeft:250}} href="/MyPage"><AiOutlineUser size={25}/></Nav.Link>:<Nav.Link style={{marginLeft:250}}  href='/Login'>LOGIN</Nav.Link>}
            
            {userData?<Nav.Link style={{marginLeft:50}} href="/Cart"><AiOutlineShoppingCart size={25}/></Nav.Link>:null}
          </Nav>
        </Container>
      </Navbar>
        {/* {children} */}
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        {/* <Row>
            <Col xs={24} md={6}>
            
            </Col>
            
        </Row> */}
    </div>
    <div>
        {children}
    </div>
    </>
  )
}

export default ShopLayout