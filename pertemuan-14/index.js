// compareNumbers
// Reverse string
// Sort
// Deret / ArithmeticPrgoression
// Palindrome
// isPrime
// List Prima

// Z-index stacking
// overflow
// px, rem, em, %, vh, vw

// compare numbers
// parameter firstNumber, secondNumber
// secondNumber > firstNumber =  true
// secondNumber < firstNumber =  false
// secondNumber === firstNumber = -1

// function compareNumbers (firstNumber, secondNumber) {
//   if (secondNumber > firstNumber) return true
  
//   if (secondNumber < firstNumber ) return false

//   return -1
// }

// console.log(compareNumbers(4,6)) // true
// console.log(compareNumbers(4,2)) // false
// console.log(compareNumbers(1,1)) // -1

// Reverse string
// let myString = 'abcdefghijklmn'

// console.log(myString.split('').reverse().join(''));

// kita loop array nya, tapi dari belakang
// tiap iterasi nya kita bakal nambahin string pada tiap index ke string baru
// let result = ''
// for (let i = myString.length - 1; i >= 0; i--) {
//   console.log(myString[i]);
//   result += myString[i]
// }

// console.log(result);
// abcde length 5
// 01234

// sort string

// let myString = 'abcdefghijklmn'

// function urutHuruf(theString) {
//   return theString.split('').sort().join('')
// }

// console.log(urutHuruf('halo'));
// console.log(urutHuruf('qwerty'));
// console.log(urutHuruf('hardghiuasaiuehlo'));


// expected kita yg paling kecil bakal di paling kiri
// cara compare huruf itu gimana ?
// console.log('a' > 'b');
// console.log('a' < 'b');
// conver ke array dulu, split('')
// kita loop dari awal terus kita ambil index paling depan,
// kita compare dengan sisa nya, 
// kalau ada yg paling kecil, kita taro paling depan
// hardghiuasaiuehlo
// tiap iterasi nya kita mesti nyimpen value terkecil nya
// terus value terkecil nya kita taro di paling depan

// function urutHurufV2 (theString) {
//   let temp = theString.split('')

//   for (let i = 0; i < temp.length; i++) {
//     let smallestIdx = i
//     for (let j = i; j < temp.length; j++ ) {
//       if (temp[smallestIdx] > temp[j]) {
//         smallestIdx = j
//       }
//     }
//     // let tempSmallest = temp[smallestIdx]
//     // temp[smallestIdx] = temp[i]
//     // temp[i] = tempSmallest
//     [temp[smallestIdx], temp[i]] = [temp[i], temp[smallestIdx]]
//   }
//   return temp.join('')
// }

// console.log(urutHurufV2('hardg'));

// Deret / ArithmeticPrgoression


// looping array
// compare value i denga i + 1
// looping nya jgn sampai habis
// kalau selisih nya beda berarti false
// harus keep selisih nya di tiap loop nya
// benar balikin true
// salah balikin false

// function deret(theArray) {

//   if (theArray.length <= 2) {
//     return true
//   }

//   let diff = theArray[1] - theArray[0]
//   for (let i = 1; i < theArray.length - 1 ; i++) {
//     let currentDiff = theArray[i+1] - theArray[i]
//     if (diff !== currentDiff) return false
//   }
//   return true
// }

// console.log(deret([1,2,3,4,5,6])); // true
// console.log(deret([1,2,3,4,2,6])); // false


// Palindrome
// civic
// radar
// compare index i dengan length -i
// 0 1 2 3 4 5
// 0 dengan 5
// 1 dengan 4
// 2 dengan 3
// 3 dengan 2

// function palindrome(theString) {
//   // males
//   // return theString === theString.split('').reverse().join('')

//   // brute force
//   // for (let i = 0; i < theString.length; i++) {
//   //   if (theString[i] !== theString[theString.length - i - 1]) {
//   //     return false
//   //   }
//   // }
//   // return true

//   // two pointer
//   let left = 0 
//   let right = theString.length -1
//   while (left < right) {
//     if(theString[left] !== theString[right]) {
//       return false
//     }
//     left++
//     right--
//   }
//   return true
// }

// console.log(palindrome('civic'))
// console.log(palindrome('abcde'))


// 2, 3, 5, 7, 11, 13, 17, 19, 23,
// function isPrime(number) {

//   if (number <= 1) {
//     return false
//   }

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false
//     }
//   }

//   return true
// }

// console.log(isPrime(1)); // false
// console.log(isPrime(5)); // true
// console.log(isPrime(6)); // false
// console.log(isPrime(9)); // true

// function listPrima(angkaPertama, angkaKedua) {
//   let result = []
//   for (let i = angkaPertama; i <= angkaKedua; i++) {
//     if (isPrime(i)){
//       result.push(i)
//     }
//   }

//   return result
// }

// console.log(listPrima(1,5));
// console.log(listPrima(5,10));
// console.log(listPrima(10,20));


