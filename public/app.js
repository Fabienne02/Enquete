Bron: https://github.com/samclarkb/browser-technologies-2122/blob/main/public/scripts/main.js
var input = document.getElementsByTagName('input')
var form = document.getElementById('form')
var submitBtn = document.getElementById('submit')

var formValues = []
for(var index in input) {
  if(input[index].type !== 'text') break;
  formValues.push(input[index])
}

console.log(formValues);

submitBtn.onclick = function(e) {
  for (var i = 0; i < formValues.length; i++) {
    if(formValues[i].value.length == 0) {
      alert('Je hebt nog niet alles ingevuld, kleine dommerd.')
      e.preventDefault()
    }
  }}