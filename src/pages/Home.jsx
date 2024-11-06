import React, { useState } from 'react'
import View from '../components/View'
import Add from '../components/Add'

const Home = () => {
  const [uploadProductResponse, setUploadProductResponse] = useState("")
  return (
    <>
      <div className='container'>
        <h3 className='text-center pt-5'>PRODUCT LIST</h3>

        <Add setUploadProductResponse={setUploadProductResponse} />
        <View uploadProductResponse={uploadProductResponse} />
      </div>
    </>
  )
}

export default Home