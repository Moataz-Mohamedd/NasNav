import rectangel from '../images/Rectangle 5057.png';
import rectangel1 from '../images/Rectangle 5057 (1).png';
import rectangel2 from '../images/Rectangle 5057 (2).png';
import rectangel3 from '../images/Rectangle 5057 (3).png';
import rectangel4 from '../images/Rectangle 150.png';
import rectangel5 from '../images/Rectangle 5052 (5).png';
import rectangel6 from '../images/Rectangle 5052 (6).png';
import rectangel7 from '../images/Rectangle 5052 (7).png';
import rectangel8 from '../images/Rectangle 5052 (8).png';


const ProductInfo = {
    title : 'Name Of Product',
    price : '3000',
    description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    size: [
              '2*3 M',
              '4*4 M',
              '3*4 M',
            ],
         
    imgs: [
         rectangel ,
         rectangel1 ,
         rectangel2 ,
         rectangel3 , 
    ],
    fullimg:[
      rectangel4
    ],
      
    color :[
      'white',
      'black',
      'blue',
      'yellow',
    ],
}

const CardInfo = {
  items:[
    {
      img:rectangel5,
      code:'10688',
      description:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      price:'300',
    },
    {
      img:rectangel6,
      code:'25548',
      description:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      price:'400',
    },
    {
      img:rectangel7,
      code:'14487',
      description:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      price:'500',
    },
    {
      img:rectangel8,
      code:'15489',
      description:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      price:'400',
    },
    {
      img:rectangel5,
      code:'15489',
      description:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      price:'400',
    },
    {
      img:rectangel6,
      code:'15489',
      description:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      price:'400',
    },
    {
      img:rectangel7,
      code:'15489',
      description:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      price:'400',
    },
    
  ]
    
}


export {ProductInfo , CardInfo}