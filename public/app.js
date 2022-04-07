Bron: https://github.com/samclarkb/browser-technologies-2122/blob/main/public/scripts/main.js
// VALUE CHECKER ALERT OLDER IOS 
var input = document.getElementsByTagName('input')
var form = document.getElementById('form')
var submitBtn = document.getElementById('submit')
var formValues = []
for(var index in input) {
  if(input[index].type !== 'text') break;
  formValues.push(input[index])
}

var numberValues = []
for(var i = 0; i < input.length; i++) {
  if(input[i].type === 'number') {
    numberValues.push(input[i])
  }
}

submitBtn.onclick = function(e) {
  for (var i = 0; i < formValues.length; i++) {
    if(formValues[i].value.length == 0) {
      alert('Je hebt nog niet alles ingevuld, kleine dommerd.')
      e.preventDefault()
    }
  }

  for(var j = 0; j < numberValues.length; j++) {
    if(numberValues[j].id === 'weekBegin') {
      var week = numberValues[j].value
      if(numberValues[j].value > 26 || numberValues[j].value < 0) {
        alert('Weeknummer mag niet groter dan 26 of kleiner dan 0, kleine dommerd.')
        e.preventDefault()
        return
      }
    } else {
      var weekEind = numberValues[j].value
      if(week == weekEind) {
        alert('Begin en eindweek mogen niet hetzelfde zijn')
        e.preventDefault()
        return
      }
      if(numberValues[j].value > 26 || numberValues[j].value < 0) {
        alert('Weeknummer mag niet groter dan 26 of kleiner dan 0, kleine dommerd.')
        e.preventDefault()
        return
      }
    }
  }

}

  // VALUE MAX - MIN 
  // document.getElementById("weekBegin").max = "26";

  // ANIMATIONS 
