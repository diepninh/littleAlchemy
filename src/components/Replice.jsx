import 'lodash';
export const Replice = (image, imageIngre, top, left) => {
  const waterObj = { top, left, topStatic: 100, leftStatic: 20, image: 'water' };
  const waterObjStatic = { top: 100, left: 20, topStatic: 100, leftStatic: 20, image: 'water' };
  const airObj = { top, left, topStatic: 10, leftStatic: 20, image: 'air' };
  const airObjStatic = { top: 10, left: 20, topStatic: 10, leftStatic: 20, image: 'air' };
  const fireObj = { top, left, topStatic: 100, leftStatic: 100, image: 'fire' };
  const fireObjStatic = { top: 100, left: 100, topStatic: 100, leftStatic: 100, image: 'fire' };
  const earthObj = { top, left, topStatic: 100, leftStatic: 20, image: 'earth' };
  const earthObjStatic = { top: 100, left: 100, topStatic: 100, leftStatic: 100, image: 'earth' };
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

  const recipe = [
    'water',
    'air',
    'fire',
    'earth',
    'waterfire',
    'firewater',
    'airfire',
    'airearth',
    'fireearth',
    'earthearth',
    'earthfire']
  const chemical = [
    { ObjStatic: waterObjStatic, Obj: waterObj, imageCreate: 'water' },
    { ObjStatic: airObjStatic, Obj: airObj, imageCreate: 'air' },
    { ObjStatic: fireObjStatic, Obj: fireObj, imageCreate: 'fire' },
    { ObjStatic: earthObjStatic, Obj: earthObj, imageCreate: 'earth' },
    { ObjStatic: smokeObjStatic, Obj: smokeObj, imageCreate: 'steam' },
    { ObjStatic: smokeObjStatic, Obj: smokeObj, imageCreate: 'steam' },
    { ObjStatic: energyObjStatic, Obj: energyObj, imageCreate: 'energy' },
    { ObjStatic: dushObjStatic, Obj: dushObj, imageCreate: 'dush' },
    { ObjStatic : lavaObjStatic, Obj : lavaObj , imageCreate: 'lava'},
    { ObjStatic : psiObjStatic, Obj : psiObj , imageCreate: 'psi'},
    { ObjStatic : lavaObjStatic, Obj : lavaObj , imageCreate: 'lava'}
  ];

  for (let i = 0; i < recipe.length; i++) {

    if (image + imageIngre === recipe[i]) {
      return chemical[i];
    }
  }
  return _.find(chemical, { imageCreate: image });
}