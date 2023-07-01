
console.log(fetch("https://jsonplaceholder.typicode.com/posts").then((result) =>
console.log(result))
);

fetch("https://jsonplaceholder.typicode.com/users")
.then((result) => result.json())
.then((data) => console.log(data));
console.log("++++++++++++++++++==+++++");

const getdata = async () => {
  const result = await fetch ("https://jsonplaceholder.typicode.com/users")
  const data = await result.json();
  console.log(data);
};
