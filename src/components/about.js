import React, { useLayoutEffect } from 'react';
import image from './image4.jpg';
import './global.css';

export default function About(){
    useLayoutEffect(() => {
        document.body.style.backgroundColor = '#f8f9fa'
   });
    return( 
        <div className='font-style bg-light mt-4'>
            <div className='row margin-course'>
                <div className='col-md-6'>
                <h1 className ='margin-all para-font'>For the Job seekers<br/>
                    based in Leicester</h1>
                <p className='margin-para para-font'>If your looking for work then join us on a Monday, 
                    the Job Club based on Freeman's common near Leicester
                    provides an informal atmosphere, where members can spend focused time searching 
                    and applying for work supported <br/>by fellow members and experienced Job Coaches.
                </p>
                <p className='margin-para'>In addition you have the opportunity to attend the CAP 
                    Job Course where you improve the quality of your job applications.
                </p>
                <p className='margin-para'>To find out more email <u>contact@jobclub.info</u> or phone/text </p>
                </div>
                <div className='col-md-6'>
                    <img className='margin-image' src={image} alt="Job club Image" />
                 </div>
            </div>
          
        </div>
    );
}
 