let myString = 'Ramen itu enak, tapi ngantri Ramen a b c'
let string2 = 'test1test2'

// console.log(myString);

let pattern = /[a-c]+/g;
let pattern2 = /t(e)(st(\d?))/g;

// test <<<<<<
// expect bakal dapet true or false jika string yg di berikan match dengan regex nya
// console.log(pattern.test(myString))
// match
// kebalikan dari test, dia match dari string ke regex return nya array of match string
// console.log(myString.match(pattern)) // ['a', 'a', 'a', 'a', 'a', 'a', 'b', 'c']

// matchAll
// mirip kata match, cumann , dia ngebalikin semua value nya, juga index nya, dan juga string input
const cobaMatchAll = string2.matchAll(pattern2)
// dari mdn
// const array = [...string2.matchAll(pattern2)];
// console.log(array[0], 'match all');

// ini kita punya
const myArray = [...myString.matchAll(pattern)]
// console.log(myArray);



// console.log(pattern2.test(string2), 'test');
// console.log(string2.match(pattern2));

// search
// dia bakal nyari, terus berhenti kita pertama kali pattern nya match, terus dia bakal return index nya
const mySearchResult = myString.search(pattern)
// console.log(mySearchResult);


// replace <<<<<<
// bakal nge replace string yang match dengan value yang kita ingin kan
let replaceRegex = /[aiueo]/g

let myReplaceResult = myString.replace(replaceRegex, '*')
// console.log(myReplaceResult);
// replace all
// sama aja kaya replace, cuman memaksa untuk menggunakana flag global
let myReplaceAllResult = myString.replaceAll(replaceRegex, '*')
// console.log(myReplaceAllResult);

// split <<<< mungkin

let mySplitString = 'asddgaga@asdsad.adsad'
console.log(mySplitString.split('@'));
console.log(myString.split(pattern)); // a / b / c