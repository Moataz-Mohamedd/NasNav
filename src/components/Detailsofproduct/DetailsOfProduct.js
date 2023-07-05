import React , {Component} from "react";
import {StarIcon  } from "@heroicons/react/24/solid";
import {MinusIcon , PlusIcon } from '@heroicons/react/24/outline';
import {AiOutlinePlus , AiOutlineMinus , } from 'react-icons/ai';
import {HiHeart} from 'react-icons/hi'
import './DetailsOfProduct.css';
import degree from '../../utils/images/hover (2).svg'

class DetailsOfProduct extends Component{
    render(){
            const {ProductInfo} = this.props;
            
        return(
         <div class='product'>
            <div class='product-img'>
                <div className="side-img">
                    {ProductInfo.imgs.map((img , index)=>{
                        return(
                                <div key={index} class='details-img'>
                                        <img src={img} />
                                </div>
                        )
                    }       
                    )}
                
                </div>
                <div class='full-img'>
                    <div class='discount'>
                            <p>10% Off</p>
                    </div>
                    <img src={ProductInfo.fullimg} />
                </div>
            </div>





            <div class="product-text">
                <div className="title">
                    <div className="title-1">
                        <h2>{ProductInfo.title}</h2>
                        <div class='star'>
                            <p><StarIcon /></p>
                            <p><StarIcon /></p>
                            <p><StarIcon /></p>
                            <p><StarIcon /></p>
                            <p><StarIcon /></p>
                        </div>
                        
                        
                    </div>
                    <div>
                        <img src={degree} />
                    </div>
                </div>
                <div className="description">
                    <p class='price'>{ProductInfo.price}EGP</p>
                    <p>{ProductInfo.description}</p>
                </div>
                <div class='size'>
                        <p>Size</p>
                        <div class='size-1'>
                            {ProductInfo.size.map((info , index)=>{
                                return( 
                                    <div class='border-size' key={index}>
                                         <p>{info}</p>
                                    </div>
                                    
                                )
                            })}
                        </div>
                        
                       
                </div>
                <div class="color">
                    <p>Color</p>
                   <div class='color-1'>
                        <div class='color-bg'></div>
                        <div class='color-bg1'></div>
                        <div class='color-bg2'></div>
                        <div class='color-bg3'></div>
                   </div>
                   
                </div>
                <div class="offer">
                    <div class="qty">
                        <button class="qty-btn" > <AiOutlineMinus class='icon'/> </button>
                        <p>1</p>
                        <button class='qty-btn'><AiOutlinePlus class='icon' /> </button>
                    </div>
                    <button class='buy'>BUY NOW</button>
                </div>
             
            </div>
            
         </div>
        )
    }
}

export default DetailsOfProduct

