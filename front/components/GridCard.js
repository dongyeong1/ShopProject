import React from 'react'
import {Card} from 'antd'
import Meta from 'antd/lib/card/Meta'
function GridCard({v}) {
    // const [state,setState]=useState([{id:1},{id:2},{id:3},{id:4}])

  return (
    <Card key={v.id}
         hoverable  
      style={{width: 240, }}
      cover={<img src='https://contents.lotteon.com/itemimage/_v160739/LE/12/07/72/45/05/_1/24/20/74/52/2/LE1207724505_1242074522_1.jpg/dims/optimize/dims/resizemc/400x400'></img>}
      >
          <Meta title="운동화" description="200만원"></Meta>

      </Card>
  )
}

export default GridCard