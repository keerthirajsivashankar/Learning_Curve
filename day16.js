fetch("https://jsonplaceholder.typicode.com/posts")
.then((result) => result.json())
.then((data) => console.log(data))

const getdata = async () => {
  var result = await
  fetch("https://jsonplaceholder.typicode.com/posts")
  var data = await result.json();
  console.log(data);
};
getdata();

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
