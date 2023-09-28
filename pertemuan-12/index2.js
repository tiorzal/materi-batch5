const url = 'https://covid-193.p.rapidapi.com/statistics?country=wkwkwk';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': ''
	}
};

fetch(url, options)
.then((result) => result.json())
.then((data) => {
  // render
  console.log(data)
})



// button di kasi function
// bikin function buat hit ke api nya rapidapi pake fetch, string di taro di url nya
// data yg di dapet di render ke halaman web