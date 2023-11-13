import React from 'react'
import cv from '../assets/Cv/cv.pdf'

const Download = () => {
    return (
        <>
            <a href={cv} download='napaa_samuel_resume'> 
                <button className='p-2  bg-green-500 rounded'>
                    RESUME
                </button>               
                              
            </a>          
        </>
    );
}
export default Download;