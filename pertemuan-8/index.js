let name = 'si itu lah'
let age = 19
let hobbies = ['eat', 'sleep', 'game']
/**
 * 
 * @param {String} target
 * @returns {String}
 */
function sayHello(target) {
  return `hello ${target}`
}

sayHello(5)
/**
 * create
 */

let person = {
  name: 'si ini lah',
  age: 19,
  hobbies: ['eat', 'sleep', 'game'],
  sayHello: function (target='default value') {
    console.log(`hello ${target} ${this.name}`)
  },
  'current-payroll': 10000000,
  job: {
    name: 'front engineer',
    'years-of-experience': 3
  }
}

/**
 * read
 */
// console.log(person.name)
// console.log(person['current-payroll'])
// console.log(person['hobbies'])
// console.log(person['hobbies'][2])
// person.sayHello('sesuatu')


/**
 * add value
 */
person.lastEducation = 'high school'
person['middle-name'] = 'ya gitu'

/**
 * edit value
 */
person.age = 18
person['current-payroll'] = 9000000


/**
 * delete
*/
delete person['middle-name']
delete person.age
// console.log(person)

// array of object

const myBooks = [
  {
    name: 'book 1',
    price: 30000,
    author: 'adi'
  },
  {
    name: 'book 2',
    price: 40000,
    author: 'hani'
  },
  {
    name: 'book 3',
    price: 50000,
    author: 'farul'
  },
  {
    name: 'book 4',
    price: 60000,
    author: 'rifki'
  },
  {
    name: 'book 5',
    price: 70000,
    author: 'nadia'
  },
]

// cheap => 50.000 ke bawah
const cheapBooks = myBooks.filter((currentValue, myIndex, myArray) => {
  // versi if else nya junior
  // if (currentValue.price <= 50000) {
  //   return true
  // } else {
  //   return false
  // }

  // versi medior
  // return (currentValue.price <= 50000) ?  true : false
  
  // versi senior
  // return currentValue.price <= 50000
})

// versi orang males
// const cheapBooks = myBooks.filter((e) => e.price <= 50000)

console.log(cheapBooks)

cheapBooks.forEach((currentValue) => {
  console.log(currentValue)
})


const parsedBooks = myBooks.map((currentValue) => {
  let tempValue = currentValue
  if (tempValue.price <= 50000) {
    tempValue.isCheap = true
  } else {
    tempValue.isCheap = false
  }

  return tempValue
})

console.log(parsedBooks)




// const printSomething = (word) => {
//   console.log(word);
// }

// printSomething('test')

let myVar = 100
myVar = 'seratus'
let myObj = {
  myKey: 5
}
