const MY_URL = 'https://jsonplaceholder.typicode.com/users'
let globalPeople = []
let myLoading = false

myLoading = true
fetch(MY_URL)
  .then(response => response.json())
  .then(data => {
    parseData(data)
  })


  // parse data to proper shape
  function parseData (people) {
  // (id, name, username,email, address, domain)
  const result = people.map( person => {
    const parsedPerson = {
      id: person.id,
      name: person.name,
      username: person.username,
      email: person.email,
      address: `${person.address.suite}, ${person.address.street}, ${person.address.city}, ${person.address.zipcode}`,
      website: person.website
    }
    return parsedPerson
  })
  myLoading = false
  globalPeople = result
  putDataToTable(result)
}

// put array of people to table
function putDataToTable (data) {
  const myTbody = document.getElementById('my-tbody')

  data.forEach(e => {
    const result = createTrForPerson(e)
    myTbody.append(result)
  })
}

// remove current table item
function removeDataFromTalbe() {
  const myTbody = document.getElementById('my-tbody')
  while (myTbody.firstChild) {
    myTbody.removeChild(myTbody.firstChild);
  }
}

// create element tr for a person
function createTrForPerson (person) {
  const tr = document.createElement('tr')
  
  for (const key in person) {
    const td = document.createElement('td')
    td.innerHTML = person[key]
    tr.append(td)
  }
  return tr
}

// sort
function sortPeople () {
  // cek kalau lagi loading, return kosong, jadi si function nya berenti
  if (myLoading === true) {
    return
  }
  let temporaryPeople = [...globalPeople]
  const result = temporaryPeople.sort((a, b) => {
    if (b.name < a.name) {
      return 1
    } else if (b.name > a.name) {
      return -1
    } else {
      return 0
    }
  })
  removeDataFromTalbe()
  putDataToTable(result)
}

// filter
function filterPeople() {
  const myInput = document.getElementById('my-input')
  const currentValue = myInput.value
  const result = globalPeople.find(e => {
    return e.username = currentValue
  })
  
  removeDataFromTalbe()
  if (result) {
    const arrayResult = [result]
    putDataToTable(arrayResult)
  } else {
    putDataToTable([])
  }
}

// reset
function resetTable() {
  removeDataFromTalbe()
  putDataToTable(globalPeople)
}

const myButton = document.getElementById('my-button')
myButton.addEventListener('click', sortPeople)

const myButton1 = document.getElementById('my-button-1')
myButton1.addEventListener('click', filterPeople)

const myResetButton = document.getElementById('reset-button')
myResetButton.addEventListener('click', resetTable)



















// const myParagraph = document.getElementById('my-paragraph')
// myParagraph.innerHTML = 'cobaaa nihh'

// const myDiv = document.getElementById('my-div')

// const paragraph1 = document.createElement("p")
// paragraph1.innerHTML = 'coba bikin p sendiriii'
// console.log(paragraph1);

// myDiv.append(paragraph1)
// console.log(myDiv);