const button = document.querySelector('#btn-translate')
const textInput = document.querySelector('#write')
const outputDiv = document.querySelector('#output')

const URL = 'https://api.funtranslations.com/translate/minion.json'

function translationalURL(input){
    return URL + '?' + 'text=' + input
}

function execute(){
const inputText = textInput.value

  fetch(translationalURL(inputText))
  .then((response)=>{
    return response.json()
  }).then((json)=>{
    //   console.dir(json)
    outputDiv.innerHTML = json.contents.translated
  })
}



button.addEventListener('click', execute)

