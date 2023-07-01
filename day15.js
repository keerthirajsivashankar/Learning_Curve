const array=[1,2,3,4,5];

function getarray() {
  return [1,2];
}

const [x,y,z] = getarray();
console.log(x);
console.log(y);
console.log(z);

const newarray  =array.map((e) => (e+1));
console.log(newarray);
console.log(array);

const filter = array.filter(
  e => e<4
);
console.log(filter);
console.log(array);

function hello(name){
  if(name)
  console.log("hello "+name);
  else
    console.log("hello world");
}
hello("keerthiraj");

console.log("apple\nmango\nbanana\ngrape");
console.log("---------------------------");
console.log(`
  apple
  banana
  grape
  mango`);

function outer() {
  var name1= "xyz";
  let name2= "pqr";

function inner(){
  var name1 = "xxyyzz";
  console.log(name1);
}
inner();
console.log(name1);
}
outer();
