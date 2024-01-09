// const li = document.createElement('li')
// li.setAttribute('class', 'item')
// // li.innerHTML = "New Fruit"
// // console.log(li)

// const addText = document.createTextNode("New Fruit it is")
// li.append(addText)
// const parent = document.querySelector('.items-ul')
// parent.append(li)

// // console.log(parent.children[0].innerHTML);


// const item = document.querySelector('.item')
// // console.log(item.parentNode)
// // console.log(item.parentElement)


function addNewFruit(fruitName, className, parentClassName){
    const li = document.createElement('li')
    li.className = className

    const text = document.createTextNode(`${fruitName}`)
    li.append(text)

    document.querySelector(`.${parentClassName}`).append(li)
}

function replaceFruit(fruitNumber, fruitName, className){
    const li = document.createElement('li')
    li.className = className

    const text = document.createTextNode(`${fruitName}`)
    li.append(text)

    const repFru = document.querySelector(`li:nth-child(${fruitNumber})`)
    repFru.replaceWith(li)
}

function deleteFruit(fruitNumber){
    const delFru = document.querySelector(`li:nth-child(${fruitNumber})`)
    delFru.remove()
}

addNewFruit("Kiwi", 'item', 'items-ul')
addNewFruit("Kiiiiwi", 'item', 'items-ul')
replaceFruit(2, 'new apple', 'item')
deleteFruit(4)