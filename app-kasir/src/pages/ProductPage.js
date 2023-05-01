import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Navbar } from '../component';


import MenuProduct from '../component/ProductList'
import ListCategories from '../component/Category'
// export default function App() {

//     return (
//         <div className="App">
//             <Navbar />
//             <div className="mt-3">
//                 <Container fluid>
//                     <h1 style={{ marginBottom: '15px' }}><strong>Daftar Produk</strong></h1>
//                     <Row className="justify-content-md-center">
//                         <ProductList />
//                     </Row>
//                 </Container>
//             </div>
//         </div>
//     )
// }


const ProductPage = () => {
    return (
        <div className="App">
            <Navbar />
            <Row>
                <Col>
                <h1 style={{ marginBottom: '15px' }}><strong>Daftar Kategori</strong></h1>
                <ListCategories />
                </Col>  
                <Col> 
                    <Row>
                    <h1 style={{ marginBottom: '15px', flexDirection: 'row-reverse' }}><strong>Daftar Produk</strong></h1>
                    <hr />
                     <MenuProduct />
                    </Row>
                </Col>

            </Row>



        </div>

    )
}

export default ProductPage

