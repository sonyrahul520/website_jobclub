import React from 'react'; 
import officeImage from './officeImage.jpg';
import './global.css';

export default function Hero(){
   return(
    <div className='color-box'>
        <div className='row'>
             <div className='col-md-6'>
                 <h1 className='margin-box'>We help you<br/>
                 for your Job.</h1>
            </div>
            <div className='col-md-6'>
                <img className='hero-image'  src={officeImage} alt="Job club Image" />
            </div>  
        </div>   
    </div>
       

   );

}