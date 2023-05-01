import Carousel from 'react-bootstrap/Carousel';
import Foto from '../../src/assets/pecellele.jpg';
import Foto1 from '../../src/assets/gadogado.jpg';
import Foto2 from '../../src/assets/ayambakar.jpg'


function ProductCarousel() {
  return (
    <Carousel  >
      <Carousel.Item interval={3000}>
        <img style={img}
          className="d-block w-100"
          src={Foto}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Pecel Lele Spesial Komplit</h3>
          <p>Lele, nasi, sambel, tahu, tempe, lalapan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img style={img}
          className="d-block w-100"
          src={Foto1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Gado Gado Tradisional</h3>
          <p>Gado Gado khas dengan racikan tradisional</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img style={img}
          className="d-block w-100"
          src={Foto2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Ayam Bakar Sambal ijo</h3>
          <p>
            Ayam Bakar dengan sambal ijo yang khas
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;

const img = {
  height: '800px',
  objectFit: 'cover',
}