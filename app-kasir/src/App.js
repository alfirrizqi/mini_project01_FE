import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Navbar, Result, Category, ProductList } from './component'


export default function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <Col>
            <Category />
            </Col>
            <Col>
              <h4><strong>Daftar Produk</strong></h4>
              <ProductList />
              <hr />
            </Col>
            <Result />
          </Row>
        </Container>
      </div>
    </div>
  )
}




