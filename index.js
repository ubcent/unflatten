'use strict';

const sample = [
  {id: 1, parentId: 0},
  {id: 2, parentId: 0},
  {id: 3, parentId: 1},
  {id: 4, parentId: 1},
  {id: 5, parentId: 2},
  {id: 6, parentId: 4},
  {id: 7, parentId: 5}
];

function transform(array) {
  if(Object.prototype.toString.call( array ) === '[object Array]') {
    for(var i = 0; i < array.length; i++) {
      array[i].children = transform(_.filter(array, function(item) { return array[i].id == item.parentId} ));
    }
  }
  console.log('inner array', array[i]);
  return array;
}

console.log(transform(sample));