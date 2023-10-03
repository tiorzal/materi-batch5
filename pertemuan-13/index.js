// Callback
// Promise
// Async Await

// console.log('ini pertama')

// setTimeout(()=> {
//   console.log('ini kedua')
// }, 3000)


// console.log('ini ketiga')

// CALLBACK
// let result = 0

// function slowSum (a, b, cb) {
//   setTimeout(()=> {
//     result = a + b
//     console.log(result, 'ini dalem slowSum')
//     cb(result)
//   }, 3000)
// }

// function myCallback (value) {
//   console.log(value, 'ini dalem callback');
// }
// slowSum(5,3, myCallback)

// console.log(result, '<<<');

// PROMISE
let myPromise = new Promise((resolve, reject) => {

  setTimeout(() => {
    if (5 !== '5') {
      resolve('sukses')
    } else {
      reject ('gagal')
    }
  }, 3000)
})

console.log(myPromise, 'ini my promise')
myPromise
.then((groot) => {
  console.log(groot, 'ini dalem then nya promise pertama');
  return 'ini dari then pertama'
}, (err) => {
  console.log(err, 'ini error')
  throw new Error('error nih')
})
.then((bebas) => {
  console.log(bebas);
})
.catch(err => {
  console.log(err);
})


// const MY_URL = 'https://jsonplaceholder.typicode.com/users'

// const result = fetch(MY_URL)
//                 .then((data)=> {
//                   console.log(data);
//                   if (data.response.status !== 200) {
//                     throw new Error('error ga 200')
//                   }
//                   return data.json()
//                 })
//                 .then((data)=> {
//                   console.log(data);
//                 })
//                 .catch(err => {
//                   console.log(err);
//                 })

// console.log(result, 'ini result');




// let myPromise = new Promise(function(myResolve, myReject) {
//   let x = 0;

// // The producing code (this may take some time)

//   if (x !== 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function(value) {console.log(value, 'sukses')},
//   function(error) {console.log(error, 'gagal');}
// );


// let myPromise1 = new Promise((resolve, reject)=> {
//   setTimeout(() => {
//     if ( 1 === 1) {
//       resolve('sukses promise 1')
//     } else {
//       reject('gagal')
//     }
//   }, 2000)
// })

// let myPromise2 = new Promise((resolve, reject)=> {
//   setTimeout(() => {
//     if ( 1 === 1) {
//       resolve('sukses promise 2')
//     } else {
//       reject('gagal')
//     }
//   }, 2000)
// })

// myPromise1
// .then((result)=> {
//   console.log(result, 'di then pertama')
//   return myPromise2
// })
// .then((result) => {
//   console.log(result, 'di then kedua');
// })

const url = 'https://covid-193.p.rapidapi.com/countries';
const options = {
	method: 'GET',
	headers: {

	}
};

const countries = fetch(url, options)

countries
.then((result) => {
  console.log(result)
  return result.json()
})
.then((data)=> {
  console.log(data.response)
  return fetch(`https://covid-193.p.rapidapi.com/statistics?country=${data.response[0]}`, options)
})
.then(data=> {
  console.log(data)
  return data.json()
})
.then(data=> {
  console.log(data);
})
.catch(err => {
  // error handling
  console.log(err);
})
.finally( () => {
  console.log('finally');
})


// ASYNC AWAIT

async function getCountries () {
  const result = await fetch(url, options)
  console.log(result)

  if (result.status === 200) {
    // success handling
    const parsedResult = await result.json()

    const result2 = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${parsedResult.response[0]}`, options)

    console.log(result2);
  } else {
    // error handling
  }
}

// getCountries()