import React from 'react';
import air from '../image/air.png';
import earth from  '../image/earth.png';
import water from '../image/drop.png';
import fire from '../image/fire.png' ;
import steam from '../image/steam.png';
import dush from '../image/dush.png';
import energy from '../image/energy.png';
import lava from '../image/lava.png';
import osiban from '../image/osiban.png';
import psi from '../image/psi.png';

export  const IconDisplay = ({image}) =>{
     if( image === 'air'){
         return <img src ={air} width={60} height={60}/>
     }
     else if ( image === 'earth'){
         return <img src = {earth} width={60} height={60}/>
     }
     else if ( image === 'water'){
        return <img src = {water} width={60} height={60}/>
    }
    else if ( image === 'fire'){
        return <img src = {fire} width={60} height={60}/>
    }
    else if ( image === 'steam'){
        return <img src = {steam} width={60} height={60}/>
    }
    else if ( image === 'dush'){
        return <img src = {dush} width = { 60}  height ={60}/>
    }
    else if ( image === 'energy'){
        return <img src = {energy} width = { 60}  height ={60}/>
    }
    else if ( image === 'lava'){
        return <img src = {lava} width = { 60}  height ={60}/>
    }
    else if ( image === 'osiban'){
        return <img src = {osiban} width = { 60}  height ={60}/>
    }
    else if ( image === 'psi'){
        return <img src = {psi} width = { 60}  height ={60}/>
    }
     else{
         return <div></div>
     }

};