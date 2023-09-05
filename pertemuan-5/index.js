// buttons
const editButton = document.getElementById('editButton')
const editForm = document.getElementById('myForm')

// form items
const formName = document.getElementById('formName')
const formHeight = document.getElementById('formHeight')
const formImage = document.getElementById('formImage')
const submitButton = document.getElementById('submitButton')

// target items
const nameTarget = document.getElementById('nameTarget')
const heightTarget = document.getElementById('heightTarget')
const imageTarget = document.getElementById('imageTarget')

// assign function to edit button
editButton.addEventListener('click', toggleEditForm)
submitButton.addEventListener('click', mySubmitForm)


function toggleEditForm (event) {
  editForm.classList.toggle('hide-content')
}

function mySubmitForm(event) {
  // prevent event bubbling JS
  event.preventDefault()
  // get all values
  const currentName = formName.value
  const currentHeight = formHeight.value
  const currentFile = formImage.files[0]

  // set name to target
  nameTarget.innerHTML = currentName
  // set height to target
  heightTarget.innerHTML = currentHeight

  // set file to target
  // cek if file exist
  if(currentFile) {
    // bikin instance file reader
    const reader = new FileReader()

    // set function onload nya, pas filereader nya beres, itu mau ngapain
    reader.onload = function (e) {
      imageTarget.src = e.target.result
    }

    // pass the file to file reader
    reader.readAsDataURL(currentFile);

    // log debugging
    console.log(currentFile)
    console.log('file ada')
  }
  
  // hide form nya lagi
  toggleEditForm()
}

// event bubbling javascript

/**
 * get all items (target, form, buttons)
 * fuction toggle
 * toggle class yang punya display none
 * function submit
 * ambil value (nama, tinggi, image)
 * set value ke target
 * image > FileReader > readAsDatURL> onload
 * toggle si form biar hidden lagi
 */

// ref : https://developer.mozilla.org/en-US/docs/Web/API/FileReader
// ref : https://www.freecodecamp.org/news/event-bubbling-in-javascript/