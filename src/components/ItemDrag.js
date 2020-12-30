import React from 'react';
import { useDrag } from 'react-dnd';
import {ItemTypes} from '../Constants/Itemtypes.js';
import {IconDisplay} from './IconDisplay.jsx';
  
export default function ItemDrag({id, left , top  , topStatic , leftStatic , image }){
  const [{isDragging} , drag] = useDrag({
    item: { id , left,top,topStatic,leftStatic,image,  type: ItemTypes.ITEM},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  });
     
    
  return(
          
    <div ref={drag} style={{ opacity : isDragging ? 0.5 : 1 , fontSize: 25 , fontWeight: 'bold' , cursor:  'move' , left , top, position : 'absolute'}}>
      <IconDisplay image={image}/>
            
    </div>
  );
}