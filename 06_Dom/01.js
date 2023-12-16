// document.getElementsByClassName("heading").INNERHTML = "HEADINGGGGG"  // not correct

const title = document.getElementById("title")

// Below instruction, Will not work here on vs code as this file doesnot know what 'document' is. But will work on console and output will be shown there itself. 
// console.log(title.innerHTML);
// console.log(title.innerText);
// console.log(title.textContent);

// .innerHTML, .innerText, .textContent => will give same op but they are different!


// .innerText   will show only the text which is diplayed on the screen
// .innertextConent   will show all the text which was even hidden by some css property
// .innerHTML   will give inner html tags also with the text


// query selectors selects the tag!
// document.querySelector('h1')  // this will give first h1 tag present in document
// document.querySelectorAll('h2') // this will give all h2 tag present in document in the form of nodeList. NodeList is not array!!




// const myUl = document.querySelector('ul')
// undefined

// myUl.querySelectorAll('li')
// NodeList(3) [li, li, li]

// myUl.querySelectorAll('li')[0].innerText
// 'one'

// myUl.querySelector('li')
// <li>​…​</li>​::marker​"one"</li>​

// myUl.querySelector('li').style.backgroundColor = "green"


// myUl.querySelectorAll('li')
// NodeList(3) [li, li, li] // NodeList is not array!!



// myUl.querySelectorAll('li').forEach( (item) => console.log(item.innerHTML));
// VM3192:1 one
// VM3192:1 two
// VM3192:1 three


// const myH1 = document.querySelectorAll('h2')
// undefined
// myH1
// NodeList(2) [h2, h2]
// console.log(myH1.forEach( (item) => console.log(item)))
// VM3776:1 <h2>​Lorem ipsum dolor sit amet.​</h2>​
// VM3776:1 <h2>​Lorem ipsum dolor sit amet. Lorem, ipsum dolor.​</h2>​
// VM3776:1 undefined
// undefined




// document.getElementsByClassName('item-list') // gives output in HTMLCollection which is different from NodeList
// Output => HTMLCollection []

// to use forEach in this we need to convert it to Array ==>
// const itemList = document.getElementsByClassName('list-item')
// let ArrayItemList = Array.from(itemList)