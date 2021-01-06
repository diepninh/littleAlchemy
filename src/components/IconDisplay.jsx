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
  switch( image ){
    case 'air':
      return <img src={air} width={60} height={60}/>
    case 'earth':
      return <img src={earth} width={60} height={60}/>
    case 'water':
      return <img src={water} width={60} height={60}/>
    case 'fire':
      return <img src={fire} width={60} height={60}/>
    case 'steam':
      return <img src={steam} width={60} height={60}/>
    case 'dush':
      return <img src={dush} width={60}  height={60}/>
    case 'energy':
      return <img src={energy} width={60}  height={60}/>
    case 'lava':
      return <img src={lava} width={60}  height ={60}/>
    case 'osiban':
      return <img src={osiban} width={60}  height={60}/>
    case 'psi':
      return <img src={psi} width={60}  height={60}/>
    default:
      return <div></div>
  }
};