import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {numberWithCommas} from '../utilities/fontsNumber'



function CardProduct({data}) {
    console.log(data);
  return (
    
    <Card style={{ marginBottom: '20px'}}>
      <Card.Img variant="top" src="" />  
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.description}
          <Card.Text>
         Rp. {numberWithCommas(data.price)}
          </Card.Text>     
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
   
  );
}

export default CardProduct;