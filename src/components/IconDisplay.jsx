import React from 'react';
import * as TYPE from '../image/ImageTypes.js';

export  const IconDisplay = ({image}) =>{
  switch( image ){
    case 'air':
      return <img src={TYPE.air} width={60} height={60}/>
    case 'earth':
      return <img src={TYPE.earth} width={60} height={60}/>
    case 'water':
      return <img src={TYPE.water} width={60} height={60}/>
    case 'fire':
      return <img src={TYPE.fire} width={60} height={60}/>
    case 'steam':
      return <img src={TYPE.steam} width={60} height={60}/>
    case 'dush':
      return <img src={TYPE.dush} width={60}  height={60}/>
    case 'energy':
      return <img src={TYPE.energy} width={60}  height={60}/>
    case 'lava':
      return <img src={TYPE.lava} width={60}  height ={60}/>
    case 'osiban':
      return <img src={TYPE.osiban} width={60}  height={60}/>
    case 'psi':
      return <img src={psi} width={60}  height={60}/>
    default:
      return <div></div>
  }
};