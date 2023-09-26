const myArray = [
  {
    id: 0,
    name: 'enol'
  },
  {
    id: 2,
    name: 'dua'
  },
  {
    id: 1,
    name: 'satu'
  }
]

myArray.sort((a,b) => {
  console.log(a,b);
  //lebih besar
  if (a.id > b.id) {
    return 1
    // case lebih kecil
  } else if (a.id < b.id) {
    return -1
    // case dia sama id nya
  } else {
    return 0
  }
})

console.log(myArray);