//xử lí trùng tọa độ
const createNewObj = (id, top, left, topStatic, leftStatic, newID, newID2, imageIngre, imageCreateObj, imageCreateObjStatic, imageCreate) => {

  let imagePosi = _.find(oldPositions, { image: imageIngre });

  if (imagePosi !== undefined) {
    if (Math.abs(imagePosi.top - top) <= 20 && Math.abs(imagePosi.left - left) <= 20) {
      setPositions(update(positions, {
        [id]: {
          $merge: { top: topStatic, left: leftStatic },
        },
        [imagePosi.id]: { $merge: { top: imagePosi.topStatic, left: imagePosi.leftStatic } },
        [newID]: { $set: imageCreateObjStatic },
        [newID2]: { $set: imageCreateObj }
      }));
      setOldPositions(update(oldPositions, { $push: [{ newID2, top, left, topStatic, leftStatic, image: imageCreate }], $splice: [[_.findIndex(oldPositions, { id: imagePosi.id }), 1]] }));
      checkCount(imageCreate);
    }
  }
}
//xử lí trùng tạo ra phần tử mới
const moveItem = (id, left, top, topStatic, leftStatic, image) => {
  //khai báo các phần tử tạo trong mảng mới
  const rowObj = { top: topStatic, left: leftStatic, topStatic: topStatic, leftStatic: leftStatic, image: image };
  const newID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const newID2 = Math.random().toString(30).substring(2, 15) + Math.random().toString(30).substring(2, 15);
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
  if (left >= 200) {
    setPositions(
      update(positions, {
        [id]: {
          $merge: { left, top },
        },
        [newID]: { $set: rowObj }
      })
    );
    setOldPositions(update(oldPositions, { $push: [{ id, top, left, topStatic, leftStatic, image }] }));
    if (image === 'water') {
      createNewObj(id, top, left, topStatic, leftStatic, newID, newID2, 'fire', smokeObj, smokeObjStatic, 'steam');
    }
    else if (image === 'air') {
      createNewObj(id, top, left, topStatic, leftStatic, newID, newID2, 'earth', dushObj, dushObjStatic, 'dush');
      createNewObj(id, top, left, topStatic, leftStatic, newID, newID2, 'fire', energyObj, energyObjStatic, 'energy');
    }
    else if (image === 'fire') {
      createNewObj(id, top, left, topStatic, leftStatic, newID, newID2, 'earth', lavaObj, lavaObjStatic, 'lava');
      createNewObj(id, top, left, topStatic, leftStatic, newID, newID2, 'water', smokeObj, smokeObjStatic, 'steam');
    }
    else if (image === 'earth') {
      createNewObj(id, top, left, topStatic, leftStatic, newID, newID2, 'earth', psiObj, psiObjStatic, 'psi');
    }
  }
};
const checkCount = (image) => {
  setDataImage(update(dataImage, { $push: [image] }));
  let x = 0;
  let Arr = [...new Set(dataImage)];
  for (let i = 0; i < Arr.length; i++) {
    if (image !== Arr[i]) {
      x++;
    }
  }
  setCount(x + 1);
};