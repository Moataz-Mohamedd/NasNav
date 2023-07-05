import React , {Component} from "react";
import './SliderCart.css'
import Card from "../Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class SliderCart extends Component{
    render(){

    const {CardInfo} = this.props;

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

        return(
            <div class='slide-part'>
                   <h1>You May Also Like</h1>
                   
                    <Carousel responsive={responsive} >
                      {CardInfo.items.map((items , index)=>(
                          <Card {...items}  key={index} />
                       ))}
                  </Carousel>
              
                   
            </div>
        )
    }
}

export default SliderCart;