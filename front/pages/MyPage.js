import React from 'react'
import ShopLayout from '../layouts/ShopLayout'
import {Col,Row} from 'antd'

function MyPage() {
  return (
<ShopLayout>
    <Row>
    <Col>
    프로필수정
    
    </Col>
    </Row>
    <Row>
        <Col>구매내역</Col>
    </Row>
   

</ShopLayout>
  )
}

export default MyPage