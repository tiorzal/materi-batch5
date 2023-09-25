// function nameFun(name) {
//   console.log(name, ' <<<< ini di dalem function loh');
//   return `Nama saya adalah${name}`
// }
// let a = 5
// let b = 7

// console.log(nameFun('lala'));
// console.log(a,b,'rgjigiajajigr')

// const myConst = 'ini const'
// var myVar = 5 // hoisting 

// let myLet = document.getElementById('my-div')
// let mySpan = document.createElement('span')
// let myFun = function (name) {
//   return name
// }
// console.log(myLet)
// console.log(mySpan)
// console.log(myFun)

// if else
// switch
// let result
// if (5 === '5') {
//   result = true
// } else if (5 === 5) {
//   result = false
// } else { // default }

// let result = (5 === '5') ? true : false

// let result = (5 === '5')

// console.log(result)


// const hari = 'minggu'

// switch (hari) {
//   case 'minggu':
//     mingguHandler();
//     break;
//   case 'senin':
//     seninHandler();
//     break;
//   case 'selasa':
//     selasaHandler();
//     break;
//   default:
//     defaultHandler();
//     break;
// }

// function mingguHandler() {
//   console.log('ini hari minggu')
// }

// function seninHandler() {
//   console.log('ini hari senin')
// }

// function selasaHandler() {
//   console.log('ini hari selasa')
// }

// function defaultHandler() {
//   console.log('ini hari default')
// }

// array object

// // create
// let myObj = {
//   key: 'value',
//   innerObj: {
//     key: 'value'
//   }
// }
// // edit
// myObj.anotherKey = 'another value'
// // delete
// delete myObj.anotherKey
// // read
// console.log(myObj);
// console.log(myObj.key);
// console.log(myObj['key']);

// let person = {
//   name: 'Si itu',
//   age: 19,
//   getName: function() {
//     return this.name
//   },
//   salary: 6000000
// }

// for (const simba in person) {
//   console.log(person[simba])
// }

// array
// create
// let myArray = [1,2,3,4,5,6]
// console.log(myArray, '<< original');
// edit
// myArray.push(7)
// myArray.unshift(0)

// delete
// myArray.pop()
// myArray.shift()
// console.log(myArray)

// break
// continue
// for (let i = 0; i < myArray.length; i++) {
//   const element = myArray[i];
  
//   if (element === 4) {
//     console.log('karena ini 4, makanya di skip')
//     continue;
//   }
//   console.log(element);
// }

// let iWhile = 5
// while (iWhile <= 10) {
//   console.log(iWhile);

//   iWhile++
// }

// forEach, map, filter, reduce, find, findIndex

// myArray.forEach((value, index, theArray) => {
//   console.log(value,index,theArray)
// })

// const mappedArray = myArray.map((value, index, theArray) => {
  // console.log(value,index,theArray)
//   return value + index
// })

// console.log(mappedArray)

// const filteredArray = myArray.filter((value, index, theArray) => {
//   if (value % 2 === 0) {
//     console.log(value)
//     return true
//   } else {
//     return false
//   }
// })

// console.log(filteredArray)

// const reducedArray = myArray.reduce((total, currentVal, index, theArray)=>{
//   total[index] = currentVal
//   return total
// }, {})

// array => object, object ke array
// console.log(reducedArray)

// let anotherArray = []
// for(const key in reducedArray) {
//   anotherArray.push(reducedArray[key])
// }

// console.log(anotherArray);

// const result = myArray.find((e)=> {
//   return e === 4
// })

// console.log(result);

const persons = [
  {
    id: 0,
    name: 'Si itu',
    age: 19,
    getName: function() {
      return this.name
    },
    salary: 6000000
  },
  { 
    id: 1,
    name: 'Si itu',
    age: 19,
    getName: function() {
      return this.name
    },
    salary: 6000000
  },
  {
    id: 3,
    name: 'Si itu pertama',
    age: 19,
    getName: function() {
      return this.name
    },
    salary: 6000000
  },
  {
    id: 3,
    name: 'Si itu kedua',
    age: 19,
    getName: function() {
      return this.name
    },
    salary: 6000000
  },
]

const totalSalary = persons.reduce((total, currentPerson) => {
  return total + currentPerson.salary
}, 0)

console.log(totalSalary)

// const result = persons.find((e) => {
//   return e.id === 3
// })

// console.log(result);

// const result = persons.findIndex((e) => {
//   return e.id === 3
// })

// console.log(result);

// let randomNumbers = [2,5,78,1,6,-1,3,2,6]
// randomNumbers.sort()

// console.log(randomNumbers);