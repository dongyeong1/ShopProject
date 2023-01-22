import React, { useState } from 'react'
import Link from 'next/link'
import {Button,Card, Col, Row} from 'antd'
import ShopLayout from '../layouts/ShopLayout'
import GridCard from '../components/GridCard'
// import { Button } from 'react-bootstrap';
function index() {
  const [state,setState]=useState([{id:1},{id:2},{id:3},{id:4},{id:1},{id:2},{id:3},{id:4}])

  return (
    <ShopLayout>
        <div style={{textAlign:'center'}}>
        <img style={{width:1300, marginTop:30,marginBottom:30
      }} src='https://ssl.pstatic.net/melona/libs/1420/1420834/3372c07b58109e564a9a_20230120095410814.jpg'></img>
        </div>
      
      <h1 style={{marginLeft:100}}>인기상품</h1>
        {/* <Button>asd</Button> */}
        <Row gutter={[16,16]} justify='center' style={{marginLeft:80}} >
           {state.map((v)=>(
        <Col span={6}><GridCard v={v}></GridCard></Col>
        ))}
      

        </Row>
      
      
      </ShopLayout>
  )
}

export default index