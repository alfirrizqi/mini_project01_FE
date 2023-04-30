import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import { Navbar, Result, Category, ProductList } from '../component';

export default function App() {

    return (
        <div className="App">
            <Navbar />
            <div className="mt-3">
                <Container fluid>
                    <h1 style={{ marginBottom: '15px' }}><strong>Daftar Produk</strong></h1>
                    <Row className="justify-content-md-center">
                        <ProductList />
                    </Row>
                </Container>
            </div>
        </div>
    )
}





