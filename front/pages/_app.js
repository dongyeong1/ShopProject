import 'antd/dist/antd.css'
import React from 'react'
import Head from 'next/head'

const App=({Component,pageProps})=>{
    return(
        <>
        <Head>
            <title>dongShop</title>
        </Head>
        <Component></Component>
    {/* <Component {...pageProps}></Component> */}
        </>
    )
   
    
}

export default App