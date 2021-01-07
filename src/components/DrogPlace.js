import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import ItemDrag from './ItemDrag.js';
import { ItemTypes } from '../Constants/Itemtypes.js';
import update from 'immutability-helper';
import Counter from './Counter.js';
import '../styles/DropPlace.css';
import { Replice } from './Replice.jsx';
import 'lodash';

export default function DrogPlace() {
  const [oldPositions, setOldPositions] = useState([]);
  const [dataImage, setDataImage] = useState(['air', 'earth', 'water', 'fire']);
  const word = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const [count, setCount] = useState(4);
  // a,b,c,d là id của mỗi phần tử , thay đổi vị trí dựa trên id
  const [positions, setPositions] = useState({
    id1: { top: 10, left: 20, topStatic: 10, leftStatic: 20, image: 'air' },
    id2: { top: 10, left: 100, topStatic: 10, leftStatic: 100, image: 'earth' },
    id3: { top: 100, left: 20, topStatic: 100, leftStatic: 20, image: 'water' },
    id4: { top: 100, left: 100, topStatic: 100, leftStatic: 100, image: 'fire' }
  });
  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      const topStatic = item.topStatic;
      const leftStatic = item.leftStatic;
      moveItem(item.id, left, top, topStatic, leftStatic, item.image);
      return undefined;
    }
  });
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
  };
  //xử lí trùng tạo ra phần tử mới
  const moveItem = (id, left, top, topStatic, leftStatic, image) => {
    //Tao phần tử y hệt phần tử cũ
    const rowObj = { top: topStatic, left: leftStatic, topStatic: topStatic, leftStatic: leftStatic, image: image };
    //random để tạo id mới
    const newID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const newID2 = Math.random().toString(30).substring(2, 15) + Math.random().toString(30).substring(2, 15);

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
      oldPositions.map((index) => {
        createNewObj(id, top, left, topStatic, leftStatic, newID, newID2, index.image, Replice(image, index.image, top, left).Obj, Replice(image, index.image, top, left).ObjStatic, Replice(image, index.image, top, left).imageCreate);
      });
    }
  };
  //Đếm số đối tượng có trong bảng.
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

  return (
    <div ref={drop} style={{ position: 'relative', height: '100%', width: '100%', border: 'none', display: 'flex' }}>
      <div className="Drop" style={{ height: 950, width: 200, position: 'relative' }} >
        {Object.keys(positions).map((key) => {
          const { left, top, topStatic, leftStatic, image } = positions[key];
          return (
            <ItemDrag key={key} id={key} left={left} top={top} topStatic={topStatic} leftStatic={leftStatic} image={image} ></ItemDrag>
          );
        })}
      </div>
      <div style={{ width: 2, background: 'white' }}></div>
      <div className='word'>
        {word.map((e) => {
          return (
            <div key={e} style={{ paddingTop: 13, paddingLeft: 5 }}>{e}</div>
          );
        })}
      </div>
      <div style={{ position: 'absolute', bottom: 10, right: 10 }}>
        <Counter count={count} />
      </div>
    </div>
  );
}