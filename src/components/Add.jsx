import React, { useState } from 'react'
import { Button, FloatingLabel, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { uploadProductAPI } from '../services/allAPI';


const Add = ({ setUploadProductResponse }) => {
  const [productDetails, setProductDetails] = useState({
    id: "", product: "", image: "", brand: "", category: "", price: ""
  })
  console.log(productDetails);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = async () => {
    console.log("Inside handleUpload function");
    const { product, image, brand, category, price } = productDetails
    if (product && image && brand && category && price) {
      const result = await uploadProductAPI(productDetails)
      console.log(result);
      if (result.status >= 200 && result.status) {
        handleClose()
        setProductDetails({ product: "", image: "", brand: "", category: "", price: "" })
        toast.success(`${result.data.product} added to the Product List`)
        setUploadProductResponse(result)
      }

    } else {
      toast.warning("Please fill the form completely")
    }
  }

  return (
    <>
      <div className='d-flex ms-auto align-items-center'>
        <button onClick={handleShow} className='btn btn-success ms-3 my-2'> <i className="fa-solid fa-circle-plus"></i> ADD NEW PRODUCT</button>
      </div>


      {/* Modal */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Upload New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel controlId="floatingInputProduct" label="Product" className="mb-3" >
              <Form.Control type="text" placeholder="Product" onChange={e => setProductDetails({ ...productDetails, product: e.target.value })} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputImage" label="Image" className="mb-3" >
              <Form.Control type="text" placeholder="Image" onChange={e => setProductDetails({ ...productDetails, image: e.target.value })} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputBrand" label="Brand" className="mb-3" >
              <Form.Control type="text" placeholder="Brand" onChange={e => setProductDetails({ ...productDetails, brand: e.target.value })} />
            </FloatingLabel>

            <FormControl className=" w-100">
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={productDetails.category} name='category' label="category" onChange={e => setProductDetails({ ...productDetails, category: e.target.value })} className='w-100' >
                <MenuItem value="" disabled>Select Category</MenuItem>
                <MenuItem value="Phone">Phone</MenuItem>
                <MenuItem value="Laptop">Laptop</MenuItem>
                <MenuItem value="Desktop">Desktop</MenuItem>
                <MenuItem value="SmartWatch">Smart Watch</MenuItem>
                <MenuItem value="Tablet">Tablet</MenuItem>
              </Select>
            </FormControl>
            <FloatingLabel controlId="floatingInputPrice" label="Price" className="my-3" >
              <Form.Control type="text" placeholder="Price" onChange={e => setProductDetails({ ...productDetails, price: e.target.value })} />
            </FloatingLabel>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn btn-warning' onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-success'>Add</Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Add