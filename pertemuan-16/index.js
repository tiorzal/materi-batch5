const userNameSpan = document.getElementById('username')
const myInput = document.getElementById('my-input')
const myButton = document.getElementById('my-button')

function saveUsername() {
  const currentInput = myInput.value
  userNameSpan.innerHTML = currentInput

  localStorage.setItem('username', currentInput)
}

myButton.addEventListener('click', saveUsername)

const savedUsername = localStorage.getItem('username')
if (saveUsername) {
  userNameSpan.innerHTML = savedUsername
}

const a = 5
a = 4