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