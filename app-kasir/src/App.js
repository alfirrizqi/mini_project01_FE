import React from "react";
import { Container } from "react-bootstrap";
import {Navbar} from './component';
import HomePage from './pages/HomePage'

export default function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="mt-3">
        <Container fluid>
        <HomePage/>
      
        {/* <img src="assets/pecellele.jpg"/>
        <Carousel /> */}
        {/* <h1 style={{ marginBottom: '15px'}}><strong>Daftar Produk</strong></h1>
        <Row className="justify-content-md-center">
        <ProductList />
        </Row>
        */}
          {/* <Row> */}
            {/* <Col>
            <h4><strong>Daftar Kategori</strong></h4>
            <Category />
            </Col> */}
{/*            
            <Col sm={3}>   
              <hr />
            </Col> */}
            {/* <Result /> */}
          {/* </Row> */}
        </Container>
      </div>
    </div>
  )
}




