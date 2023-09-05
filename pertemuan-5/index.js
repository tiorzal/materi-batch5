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
  event.preventDefault()
  const currentName = formName.value
  const currentHeight = formHeight.value
  const currentFile = formImage.files[0]

  nameTarget.innerHTML = currentName
  heightTarget.innerHTML = currentHeight

  if(currentFile) {
    const reader = new FileReader()

    reader.onload = function (e) {
      imageTarget.src = e.target.result
    }

    reader.readAsDataURL(currentFile);
    console.log(currentFile)
    console.log('file ada')
  }

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