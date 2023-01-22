import React from 'react'
import {Container,Nav,Navbar, NavLink} from 'react-bootstrap'
import {Menu,Button,Row,Col,Input} from 'antd'
import {AiOutlineUser,AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
import { InputSearch,NavComponent } from './style'

function ShopLayout({children}) {
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
    <Nav.Link style={{position:'absolute',left:870,top:3 }} href="#pricing"><AiOutlineSearch  size={25}/></Nav.Link>
            <Nav.Link style={{marginLeft:250}} href="#pricing"><AiOutlineUser  size={25}/></Nav.Link>
            <Nav.Link style={{marginLeft:50}} href="#pricing"><AiOutlineShoppingCart size={25}/></Nav.Link>
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