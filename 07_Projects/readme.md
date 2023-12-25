# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)



## Solutions - Hitesh's Repo

## project-1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let key = e.target.id
    switch(key){
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;

      case 'while':
        body.style.backgroundColor = 'black';
        break;

      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
        
      case 'yellow':
        body.style.backgroundColor = e.target.id;
      break;   
    }
  });
});
```

## project-2
```javascript
// const height = document.querySelector('.height')
// const weight = document.querySelector('.weight')
// The above usecase will give empty value


const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if( height === "" || height < 0 || isNaN(height) ){
    results.innerHTML = "Enter valid height!"
  } else if( weight === "" || weight < 0 || isNaN(weight) ){
    results.innerHTML = "Enter valid weight!"
  } else{
    results.innerHTML = `You BMI is: ${weight/(height*height)}`
  }

})
```

## project-3
```javascript
function getTime(){
  let time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

  let clockId = document.getElementById('clock')
  clockId.innerHTML = time
}

setInterval(getTime, 1000)
```

## project-6
```javascript
const startKey = document.querySelector('#start');
const stopKey = document.querySelector('#stop');

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    let pos = Math.floor(Math.random() * 16);
    color += hex[pos];
  }
  return color;
};


function changeColor() {
  document.body.style.backgroundColor = `${randomColor()}`;
}

let intervalId;

function startInterval(){
  intervalId = setInterval(changeColor, 1000)
}

function stopInterval(){
  clearInterval(intervalId)
}

startKey.addEventListener('click', startInterval)
stopKey.addEventListener('click', stopInterval)
```