import React, { useEffect, useState } from 'react'
import { deleteProductAPI, getAllProductsAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const View = ({uploadProductResponse}) => {
    const [allProducts, setAllProducts] = useState([])

    const getAllProducts = async () => {
        const result = await getAllProductsAPI()
        if (result.status >= 200 && result.status < 300) {
            setAllProducts(result.data)
        }
    }
    console.log(allProducts);


    const removeProduct=async(productId)=>{
        await deleteProductAPI(productId)
        getAllProducts()
    }


    useEffect(() => {
        getAllProducts()
    }, [uploadProductResponse])

    return (
        <>
            <div className='container text-center'>
                <table className='table table-striped '>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.product}</td>
                                <td><img src={product.image} alt={product.product} style={{ width: '80px', height: '80px', objectFit: 'cover' }} /></td>
                                <td>{product.brand}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/edit/${product.id}`} className="btn btn-outline-info me-2">EDIT</Link>
                                    <button className="btn btn-outline-danger" onClick={() => removeProduct(product.id)}>DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default View