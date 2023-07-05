import React , {Component} from "react";
import './Card.css';
import {HiHeart} from 'react-icons/hi'

class Card extends Component{
 
    state={
        counter : 1,
    }
     addqty = () =>{
       this.setState({
        counter : this.state.counter+1
       })
        const cart = document.getElementById('cart');
        cart.innerText=this.state.counter;
        
    }
    render(){
        
        
        const {img , code , description , price} = this.props;
        return(
            <div class='slider'>
               <div class='cart-slider'>
                    <img src={img} />
                    <h5>{code}</h5>
                    <p>{description}</p>
                    <p>{price}EGP</p>
                    <div class='btn'>
                        <button onClick={this.addqty}>Add To Cart</button>
                        <HiHeart class='icon' />
                    </div>
               </div>
            </div>
        )
    }
}

export default Card;