import React from 'react';
import "../style/Banner2.css"
import bannerImg from "../../../assets/imgs/Banner 2.png"
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner flex-parent'>
        <img src={bannerImg}></img>
            <div className='content'>
                <h1 className='title'>Big Summer <span>Sale</span></h1>
                <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
               <a href='#first-cards'> 

                <button className='btn'>Shop Now</button>
               </a>
               
            </div>
        </div>
    );
}

export default Banner;
