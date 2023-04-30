// import Carousel from 'react-bootstrap/Carousel';
import Foto from '../../src/assets/pecellele.jpg';
import Foto1 from '../../src/assets/gadogado.jpg';
import Foto2 from '../../src/assets/ayambakar.jpg'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const slider = (
  <AwesomeSlider animation="cubeAnimation">
    <div data-src={Foto}/>
    <div data-src={Foto1} />
    <div data-src={Foto2} />
  </AwesomeSlider>
);

export default slider;







// function ProductCarousel() {
//   return (
//     <Carousel >
//       <Carousel.Item>
//         <img style={img}
//           className="d-block w-100"
//           src={Foto}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>Pecel Lele Spesial Komplit</h3>
//           <p>Lele, nasi, sambel, tahu, tempe, lalapan</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img style={img}
//           className="d-block w-100"
//           src={Foto1}
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h3>Gado Gado Tradisional</h3>
//           <p>Gado Gado khas dengan racikan tradisional</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img style={img}
//           className="d-block w-100"
//           src={Foto2}
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h3>Ayam Bakar Sambal ijo</h3>
//           <p>
//             Ayam Bakar dengan sambal ijo yang khas
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

//  export default ProductCarousel;

// const img = {
//   height: '800px',
//   objectFit: 'cover',
// }