import React , {Component} from 'react';
import DetailsOfProduct from '../Detailsofproduct/DetailsOfProduct';
import { ProductInfo , CardInfo } from '../../utils/services/Services'
import SliderCart from '../SliderCart/SliderCart';

class Product extends Component{
    render(){
  
        
        return(
            <div>
                    <DetailsOfProduct ProductInfo={ProductInfo}  />
                    <SliderCart CardInfo={CardInfo}/>
            </div>
        )
    }
} 

export default Product;