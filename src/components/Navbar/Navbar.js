import React , {Component} from 'react';
import './Navbar.css'
import img1 from '../../utils/images/Rectangle 5052 (5).png';
import img2 from '../../utils/images/Rectangle 5052 (6).png';
import img3 from '../../utils/images/Rectangle 5052 (8).png'
import {TrashIcon} from '@heroicons/react/24/outline';

class Navbar extends Component{

    state = {
        popcart: false,
    }
    handle = ()=>{
        this.setState({
           popcart:!this.state.popcart,
        })
    }

    render(){
        console.log(this.state.popcart)
        return(
            <div class='container-navbar'>
                <div class='nav-list'>
                      <div class='brand'>
                            <a ><img src='images/AlignLeftText.svg' /></a>
                      </div>
                      <div class='list'>
                            <ul>
                                <li><a href='#'>Prodcut</a> </li>
                                <li><a href='#'>Best Seller</a></li>
                                <li><a href='#'>New Arrival</a></li>
                                <li><a href='#'>About us</a></li>
                                <li><a href='#'>Contact Us</a></li>
                            </ul>
                      </div>
                      
                </div>
                     
                 <div class='options'>

                 <div class="dropdown">
                         <button onClick={()=>this.handle()} class="dropbtn">
                            <img src='images/vuesax-linear-shopping-cart 1.svg' />
                            <div id='cart' class='qtn'>0</div>
                        </button>
                                 
                                 {this.state.popcart && (
                                    <div class="dropdown-content">
                                        <div class='content' >
                                            <div class='img-size'>
                                                <img src={img3} />
                                            </div>
                                            <div class='content-text'>
                                                <p>product</p>
                                                <p>size:2*3m</p>
                                                <p>color:black</p>
                                                <h4>400EGP</h4>
                                                <button><TrashIcon class='trash' /></button>
                                            </div>
                                        </div>
                                        <div class='content' >
                                            <div class='img-size'>
                                                <img src={img1} />
                                            </div>
                                            <div class='content-text'>
                                                <p>product</p>
                                                <p>size:2*3m</p>
                                                <p>color:black</p>
                                                <h4>400EGP</h4>
                                                <button><TrashIcon class='trash' /></button>
                                            </div>
                                        </div>
                                        <div class='content' >
                                            <div class='img-size'>
                                                <img src={img2} />
                                            </div>
                                            <div class='content-text'>
                                                <p>product</p>
                                                <p>size:2*3m</p>
                                                <p>color:black</p>
                                                <h4>400EGP</h4>
                                                <button><TrashIcon class='trash' /></button>
                                            </div>
                                        </div>
                                        <div class='total'>
                                            <p class='sub'>Sub Total</p>
                                            <p class='pricee'>5000EGP</p>
                                        </div>
                                        <button class='backk' onClick={()=>this.handle()}>Go To Cart </button>
                                    </div>
                                 )}
                </div>
                            <button>
                                <img src='images/vuesax-linear-search-normal 1.svg' />
                            </button>   
                            <button>
                                <img src='images/vuesax-linear-profile 1.svg' />
                            </button>
                 </div>
            </div> 
            
        )
    }
}

export default Navbar;


