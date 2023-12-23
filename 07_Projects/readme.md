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

})```