/** @format */
const text = document.querySelectorAll("input")

// for (let i = 0; i < text.length; i++) {
//   text[i].addEventListener("change", updateValue)
// }

// function updateValue(e) {
//   e.target.value = e.target.value.replaceAll("/forall", "∀")
// }

document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    for (let i = 0; i < text.length; i++) {
      text[i].value = text[i].value.replaceAll("/forall", "∀")
    }
  }
}
