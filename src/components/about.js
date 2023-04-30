import React from 'react';
import image1 from './image1.jpg';

export default function About(){
    return( 
        <div className='bg-light rounded'>
            <div className='row'>
                <div className='col-md-8 my-2'>
                <h1 className='m-4'>For the Job seekers<br/>
                    based in Leicester</h1>
                <p className='m-4'>If your looking for work then join us on a Monday, 
                    the Job Club based on Freeman's common near Leicester <br/>
                    provides an informal atmosphere, where members can spend focused time searching 
                    and applying for work supported <br/>by fellow members and experienced Job Coaches.
                </p>
                <p className='mx-4'>In addition you have the opportunity to attend the CAP 
                    Job Course where you improve the quality of your job applications.
                </p>
                <p className='mx-4'>To find out more email <u>contact@jobclub.info</u> or phone/text </p>
                </div>
                <div className='col-md-4'>
                    <img className='rounded shadow mt-2' src={image1} alt="Job club Image" />
                 </div>
            </div>
          
        </div>
    );
}
 