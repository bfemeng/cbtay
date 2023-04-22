const myList = document.getElementById('myList');
const listItems = myList.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function() {
    // Message
  });
}
