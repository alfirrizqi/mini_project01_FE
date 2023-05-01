import ProductCarousel from "../component/CarouselPage"
import { Container} from "react-bootstrap";
import Navbar from '../component/Navbar'




const HomePage = () => {
    return(
        <>
        <Navbar />
        <div className="mt-5">
            <Container>
                <ProductCarousel />
            </Container>

        </div>
      
        
        </>
        
        
    )
}

export default HomePage