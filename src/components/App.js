import React from 'react';
import DnD from './DnD.js';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

 


function App() {
  return (
    <DndProvider   backend={HTML5Backend}>
                
      <DnD/>
                
    
    </DndProvider>
  );
    
}

export default App;