// end point
const URL_CAT = 'https://cat-fact.herokuapp.com/facts'
const URL_DOG = 'https://dog-api.kinduff.com/api/facts'


// XMLHttpRequest
const xhr = new XMLHttpRequest()

// function yang di panggil pas ada perubahan di readystate nya xhr
// state = 1 2 3 (4) => ready
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const parsedResponse = JSON.parse(this.responseText)
    const result = parsedResponse.map(res => {
      return res.text
    })

    console.log(result)
    renderFacts(result)
  } else {
    // console.log(this, 'error nich')
  }
}
// set url and method
xhr.open('GET', URL_CAT, true)
// execute
xhr.send()

// Fetch(URL, CONFIG)
fetch(URL_DOG, {
  method: 'GET'
}).then((response) => {
  return response.json()
})
.then((result) => {

  const theResult = result.facts
  console.log(theResult)
  renderFacts(theResult)
})
.catch(error => {
  console.log(error)
})

// parameter nya array of fatc
function renderFacts (facts) {
  const ul = document.getElementById("cat-facts")

  facts.forEach(fact => {
    const li = document.createElement('li')
    li.innerHTML = fact

    ul.append(li)
  })
}

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': API_KEY,
// 		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
// 	}
// };

// fetch('https://covid-193.p.rapidapi.com/statistics?country=indonesia', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err))
/**
 * XmlHttpRequest ada bedanya gk Ka dengan cURL selain dari sisi bahasa pemrograman?? misal dari segi kecepatan atau kemudahan pembuatan syntaxnya gtu Ka
 * 
 * contoh: curl, fetch, axios, etc
 */
