console.log('hai');

const myButton = document.getElementById('uploadButton')
const targetImg = document.getElementById('avatar')
const imgId = document.getElementById('targetAvatar')
function uploadPicture () {
  console.log(targetImg.files[0])

  if (targetImg.files.length > 0) {
    const file = targetImg.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      imgId.src = e.target.result;
    };

    reader.readAsDataURL(file);
} else {
    alert("Please select an image file.");
}
}

myButton.addEventListener('click', uploadPicture)