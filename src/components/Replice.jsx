
export const Replice = (image, imageIngre, top, left) => {
  const waterObj = { top , left ,  topStatic: 100, leftStatic: 20, image: 'water'};
  const waterObjStatic = { top: 100 , left: 20 ,  topStatic: 100, leftStatic: 20, image: 'water'};
  const airObj = { top , left ,  topStatic: 10, leftStatic: 20, image: 'air'};
  const airObjStatic = { top: 10 , left: 20 ,  topStatic: 10, leftStatic: 20, image: 'air'};
  const fireObj = { top , left ,  topStatic: 100, leftStatic: 100, image: 'fire'};
  const fireObjStatic = { top: 100 , left: 100 ,  topStatic: 100, leftStatic: 100, image: 'fire'};
  const earthObj = { top , left ,  topStatic: 100, leftStatic: 20, image: 'earth'};
  const earthObjStatic = { top: 100 , left: 100 ,  topStatic: 100, leftStatic: 100, image: 'earth'};
  const smokeObj = { top: top, left: left, topStatic: 200, leftStatic: 10, image: 'steam' };
  const smokeObjStatic = { top: 200, left: 10, topStatic: 200, leftStatic: 10, image: 'steam' };
  const dushObj = { top, left, topStatic: 200, leftStatic: 100, image: 'dush' };
  const dushObjStatic = { top: 200, left: 100, topStatic: 200, leftStatic: 100, image: 'dush' };
  const energyObj = { top, left, topStatic: 300, leftStatic: 10, image: 'energy' };
  const energyObjStatic = { top: 300, left: 10, topStatic: 300, leftStatic: 10, image: 'energy' };
  const lavaObj = { top, left, topStatic: 300, leftStatic: 100, image: 'lava' };
  const lavaObjStatic = { top: 300, left: 100, topStatic: 300, leftStatic: 100, image: 'lava' };
  const psiObj = { top, left, topStatic: 400, leftStatic: 100, image: 'psi' };
  const psiObjStatic = { top: 400, left: 100, topStatic: 400, leftStatic: 100, image: 'psi' };

  switch(image){
    case 'water':
      switch(imageIngre){
        case 'fire':
          return { ObjStatic : smokeObjStatic, Obj : smokeObj , imageCreate: 'steam'};
        default :
          return { ObjStatic : waterObjStatic, Obj : waterObj , imageCreate: 'water'};
      }
    case 'air':
      switch(imageIngre){
        case 'fire':
          return { ObjStatic : energyObjStatic, Obj : energyObj , imageCreate: 'energy'};
        case 'earth':
          return { ObjStatic : dushObjStatic, Obj : dushObj , imageCreate: 'dush'};
        default :
          return { ObjStatic : airObjStatic, Obj : airObj , imageCreate: 'air'};
      }
    case 'fire':
      switch(imageIngre){
        case 'fire':
          return { ObjStatic : smokeObjStatic, Obj : smokeObj , imageCreate: 'steam'};
        case 'earth':
          return { ObjStatic : lavaObjStatic, Obj : lavaObj , imageCreate: 'lava'};
        default :
          return { ObjStatic : fireObjStatic, Obj : fireObj , imageCreate: 'fire'};
      }
    case 'earth':
      switch(imageIngre){
        case 'earth':
          return { ObjStatic : psiObjStatic, Obj : psiObj , imageCreate: 'psi'};
        default :
          return { ObjStatic : earthObjStatic, Obj : earthObj , imageCreate: 'earth'};
      }
    default:
      return { ObjStatic : '', Obj :  '' , imageCreate: ''};
  }
}