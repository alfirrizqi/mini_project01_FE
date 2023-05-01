import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import CardProduct from './card';
import {Col} from 'react-bootstrap'


export default function ProductList() {
    const [products, setProducts] = React.useState([]);

     const MenuProduct = () => {
         return(
            <>
            <ProductList />
            </>
         )
     }
     MenuProduct()

    const getProducts = async () => {
        const products = await axios.get('http://localhost:8000/auth/product/get').then(function (response) {
            //    console.log(response.data);
            setProducts(response.data.data)

        })
    }


    useEffect(() => {
        getProducts()
    }, []);

    if (products.length > 0) {
        return (
            products.map((product, index) => {
                console.log(product);
                return (
                        <Col md={4}>
                                <CardProduct data = {product}/>
                         </Col>
                    
        
                    //  <div className='product' key={product.product_id}>
                    //       <h3 className="product_name">{product.name}</h3>
                    //       <p className="product_price">{product.price}</p>
                    //       <p className="product_description">{product.description} </p>
                    //       <span className="product_fadeOut"></span>
                    //   </div>
                  
                )

            })


            
        )
    } else {
        return (<h3>Tidak ada data</h3>)
    }

}


