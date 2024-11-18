import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, FloatingLabel, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { updateProductAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import serverUrl from '../services/serverURL';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState({
    product: '',
    image: '',
    brand: '',
    category: '',
    price: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${serverUrl}/allProducts/${id}`);
      const data = await response.json();
      setProductDetails(data);
    };
    fetchProduct();
  }, [id]);

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateProductAPI(id, productDetails);
    if (result.status >= 200 && result.status < 300) {
      toast.success(`${result.data.product} updated successfully!`);
      navigate('/'); // Redirect to the view page
    } else {
      toast.error('Failed to update the product.');
    }
  };
  const handleCancel = () => {
    navigate('/'); // Redirect to the home page without saving changes
};
  return (
    <div className="container mt-5 w-50">
      <h3>Edit Product Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="border rounded p-3">
          <FloatingLabel controlId="floatingInputProduct" label="Product" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Product"
              name="product"
              value={productDetails.product}
              onChange={handleEdit}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputImage" label="Image" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Image"
              name="image"
              value={productDetails.image}
              onChange={handleEdit}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputBrand" label="Brand" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Brand"
              name="brand"
              value={productDetails.brand}
              onChange={handleEdit}
            />
          </FloatingLabel>

          <FormControl className="w-100 mb-3">
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="category"
              value={productDetails.category}
              label="Category"
              onChange={handleEdit}
              className='w-100'
            >
              <MenuItem value="" disabled>Select Category</MenuItem>
              <MenuItem value="Phone">Phone</MenuItem>
              <MenuItem value="Laptop">Laptop</MenuItem>
              <MenuItem value="Desktop">Desktop</MenuItem>
              <MenuItem value="SmartWatch">Smart Watch</MenuItem>
              <MenuItem value="Tablet">Tablet</MenuItem>
            </Select>
          </FormControl>
          <FloatingLabel controlId="floatingInputPrice" label="Price" className="my-3">
            <Form.Control
              type="text"
              placeholder="Price"
              name="price"
              value={productDetails.price}
              onChange={handleEdit}
            />
          </FloatingLabel>
          <div className='d-flex mt-4 justify-content-end'>
          <Button type="submit" className='btn btn-success'>Update</Button>
          <Button type="button" className='btn btn-warning ms-2 ' onClick={handleCancel}>Cancel</Button>
        </div>
        </div>
       
      </form>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
  );
};

export default Edit;