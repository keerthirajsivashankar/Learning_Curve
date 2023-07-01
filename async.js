fetch("https://jsonplaceholder.typicode.com/albums")
.then((result) => result.json())
.then((data) => console.log(data))

const mydata = async () => {
  var result = await
  fetch("https://jsonplaceholder.typicode.com/albums");
  var data =  await result.json();
  console.log(data);
};

mydata();
