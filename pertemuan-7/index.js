// cara bikin Array (deklarasi)

// const myConstArray = [1,2,3]
// let myLetArray = [4,5,6]

// const books = [
//   {
//     name: 'Komik naruto',
//     harga: 20000,
//   },
//   {
//     name: 'Komik boruto',
//     harga: 20000,
//   },
// ]


// cara akses Array
// console.log(myConstArray)
// console.log(myConstArray[2]) // 0,1,2...

// for (let i = 0; i < books.length; i++) {
//   console.log(books[i].harga)
// }

// cara ganti value di array

// const myArray = [1,2,3]
// myArray[1] = 10
// console.log(myArray)

// push menambah value ke paling belakang
// const myArray = [1,2,3]
// console.log(myArray)
// console.log('push')
// myArray.push(4)
// myArray.push(5)
// console.log(myArray)

// pop menghapus value di paling belakang
// console.log('pop')
// myArray.pop()
// console.log(myArray)

// shift menghapus value di paling depan
// console.log('shift')
// myArray.shift()
// console.log(myArray)

// unshift menambah value di paling depan
// console.log('unshift')
// myArray.unshift(10)
// console.log(myArray)

// split
// const myString = 'abcdefg' // ['a','b','c','d','e','f','g']
// const splitedString = myString.split('')
// console.log(myString)
// console.log(splitedString)
// const myEmail = 'cobaemail@gmail.com'
// const splitedEmail = myEmail.split('@')
// console.log(splitedEmail)

// const myCSV = '1,2,3,4,5,6'
// const splitedCSV = myCSV.split(',')
// console.log(splitedCSV)
// console.log(splitedCSV.length)

// const myParagraph = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit neque iure quod eos explicabo sapiente quas, similique alias iste expedita doloremque nesciunt omnis autem optio, minima adipisci possimus aperiam. Aut?'
// const wordCount = myParagraph.split(' ').length
// console.log(wordCount)

// join
// const joinedCSV = splitedCSV.join('.')
// console.log(joinedCSV)

// slice
// console.log('slice 0,2');
// const myArray = [1,2,3,4,5]
// console.log('original', myArray)
// const slicedArray = myArray.slice(0,2)
// console.log(slicedArray)
// console.log('original array after', myArray)
// splice
// console.log('splice 0,2');
// const myArray2 = [1,2,3,4,5]
// console.log('original', myArray2)
// const splicedArray = myArray2.splice(0,2)
// console.log(splicedArray)
// console.log('original array after', myArray2)

// forEach
// const myArray = [1,2,3,4,5]
// console.log('original array',myArray)
// console.log('pake forEach =============')
// function myForEachFun (myValue, myIndex, myArray) {
//   console.log('current value', myValue)
// }
// const forEachedArray = myArray.forEach(myForEachFun)
// console.log(forEachedArray)
// console.log('pake loop biasa ===========')
// for (let i = 0; i < myArray.length; i++) {
//   console.log('current value', myArray[i])
//   console.log('current index', i)
//   console.log(myArray)

//   if (myArray[i] === 3) {
//     break;
//   }
// }

// map
// const myArray = [1,2,3,4,5,6,7,8,9,10]
// console.log('original array',myArray)
// function myMapFun (myValue, myIndex, myArray) {
//   return `ini adalah item ke ${myIndex} yang isi ${myValue}`
// }
// const mappedArray = myArray.map(myMapFun)
// console.log(mappedArray)

// let result = []
// for (let i = 0; i < myArray.length; i++) {
//   result.push(`ini adalah item ke ${i} yang isi ${myArray[i]}`)
// }
// console.log(result)
// filter

// function myFilterFun (myValue, myIndex, myArray) {
//   if (myValue % 2 === 0) {
//     return true
//   } else {
//     return false
//   }
// }

// const filteredArray = myArray.filter(myFilterFun)
// console.log(filteredArray)

// // reduce
// function myReduceFun (total, currentValue, index, myArray) {

//   if (currentValue % 2 === 0) {
//     total.push(`ini adalah item ke ${index} yang isi ${currentValue}`)
//   }
//   return total
// }
// const reducedArray = myArray.reduce(myReduceFun, [])
// console.log('final product', reducedArray)

const books = [
  {
    name: 'Komik naruto',
    harga: 20000,
  },
  {
    name: 'Komik boruto',
    harga: 50000,
  },
]

function myMapFun (item, index) {
  let div = document.createElement('div')
  let h1 = document.createElement('h1')
  let span = document.createElement('span')

  h1.textContent = item.name
  span.textContent = item.harga
  div.append(h1)
  div.append(span)

  return div
}
const myWrapper = document.getElementById('wrapper')
console.log(myWrapper)
function myForEachFun (item) {
  myWrapper.append(item)
}

const mappedItem = books.map(myMapFun)

console.log(mappedItem)



mappedItem.forEach(myForEachFun)