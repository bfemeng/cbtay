// const myList = document.getElementById('myList');
// const listItems = myList.getElementsByTagName('li');
// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].addEventListener('click', function() {
//     // Message
//   });
// }
document.getElementById('Contact').addEventListener('click', function() {
  // Scroll to the desired section on the page
  document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });
});
