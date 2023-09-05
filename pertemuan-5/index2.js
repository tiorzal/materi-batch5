 let a = 8
 let b = 3
console.log('a = 8')
console.log('b = 3')

 // 1 tambah +
 console.log('a + b')
 let c = a + b
 console.log(c)
 // 2 kurang -
 let d = a - b
 console.log('a - b')
 console.log(d)
 // 3 kali *
 console.log('a * b')
let e = a * b
console.log(e)
 // 4 bagi /
 console.log('a / b')
 let f = a / b
console.log(f)
 // 5 mod % << sisa pembagian
 // 11 % 2
 // 2 * 5 = 10
 // 11 - 10 = 1
 console.log('a % b')
 let g = a % b
 // 8 % 3
 // 3 * 2 = 6
 // 8 - 6 = 2
 // Notes: kapake buat nyari genap / ganji, kalau di mod 2 hasilnya 1 berarti ganjil, kalau 0 berarti genap
 console.log(g)
 // 6 increment +1 dari currentValue ++
 console.log('========')
 let h = a++
 console.log(h)
 console.log(a) // 9
 let i = ++a // a 10, i 10
 console.log(i)
 // 7 decrement - dari currentValue --
 console.log('==============')
 let j = b-- // b 3 j 3
 console.log(j) // 3
 console.log(b) // 2
 let k = --b // 2 k 1
console.log(k)
 // 8 string
 console.log("==========")
 let l = "test bikin string" // kalimat / kata
 let m = 'c' // karakter
 let n = `test bikin string, value si c adalah ${c}` // string literal ${}
 console.log(l)
 console.log(m)
 console.log(n)
 // 9 array
 // inget index array di mulai dari 0
 console.log("==========")
 let o = [1,2,3]
 let p = ['senin', 'selasa', 'rabu']
 let q = [1,'senin', 0.999, true] // bisa suka suka type
 console.log(o)
 console.log(p)
 console.log(q)
 // 10 object (map)
 console.log("==========")
 let r = {
  // key : value,
  nama: 'adi',
  pekerjaan: 'software engineer',
  salary: 15000000
 }

 console.log(r)
 console.log(r.nama)
 console.log(r.salary)
 console.log(r.hobby)
 console.log("==========")

let s = [
  {
    nama: 'adi',
    pekerjaan: 'software engineer',
    salary: 15000000
  },
  {
    nama: 'rifki',
    pekerjaan: 'ui/ux',
    salary: 20000000
  },
  {
    nama: 'Nadia',
    pekerjaan: 'QA',
    salary: 15000000
  },
]
console.log(s)
console.log(s[1])

 // 11. equals
 console.log(a,b)
 console.log(a === b) // valau sama type nya sama atau tidak
 console.log(a == b) // value
 console.log('>>>')
 console.log(5 === '5')
 console.log(5 == '5')

 // 12. not equals
 console.log(a !== b)
 console.log(a != b)

 console.log('>>>')

 // 13. greater than
 console.log(3 > 3)
 // 14. greater than equal
 console.log(3 >= 3)
 // 15. less than
 console.log(3 < 3)
 // 16. less than equal
 console.log(3 <= 3)
 // 17. and
 console.log(5 == '5' && 5 === 5)
 // 19. or
 console.log(5 == '6' || 5 !== 5)
 // 18. not / negasi
 console.log('>>>')
 let t = true
 console.log(!t)
 // 20. function
function add (bilanganPertama, bilanganKedua) {
  console.log(`hasil dari ${bilanganPertama} + ${bilanganKedua} adalah`)
  console.log(bilanganPertama + bilanganKedua)

  return bilanganPertama + bilanganKedua
}

let u = add(5,3)
console.log('u adalah')
console.log(u)

// 21 class
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

const myObj = {
  name: 'rush',
  yaer: 2019,
  age: function age (x) {
    return x - this.year
  }
}

const myCar = new Car('rush', 2019)
console.log(myCar.name)
console.log(myObj.name)
// react functional programming > startup
// vue functional programming > semi startup
// angular class / oop

// 22. ngobrolin assignment 2
 



