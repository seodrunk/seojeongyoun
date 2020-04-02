// Randomizer

var newItem = document.querySelector('.new-item')
var addItem = document.querySelector('.add-item')
var list = document.querySelector('.list')
var randomize = document.querySelector('.randomize')
var clearItems = document.querySelector('.clear-items')

// Remove an item from the sorted list
function removeItem(e) {
  e.parentElement.remove()
}

// Add a new item to the sorted list
function addItemToList(e) {
  e.preventDefault()
  var val = newItem.value
  if (val !== '') {
    var tempVal = '<li><i>' + val + '</i><span class="remove-item" onclick=removeItem(this)>&times;</span></li>'
    list.innerHTML = list.innerHTML + tempVal
    newItem.value = ''
  }
  newItem.focus()
}

// Reorder the list items and print them in the randomized list
function reorder() {
  var allItems = []
  var sortedItems = list.querySelectorAll('i')
  for (var i = 0; i < sortedItems.length; i++) {
    allItems.push(sortedItems[i].innerHTML)
  }
  allItems = shuffle(allItems)
  var tempRandom = '';
  for (var j = 0; j < allItems.length; j++) {
    tempRandom += '<li><i>' + allItems[j] + '</i><span class="remove-item" onclick=removeItem(this)>&times;</span></li>'
    list.innerHTML = tempRandom
  }
  newItem.focus()
}

// Shuffle the sorted items
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Clear both lists
function clear() {
  list.innerHTML = ''
  newItem.focus()
}

// Actions
addItem.addEventListener('click', addItemToList)
randomize.addEventListener('click', reorder)
clearItems.addEventListener('click', clear)
