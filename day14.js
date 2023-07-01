var item ={
  food:1000,
  drinks:2000,
};

 var cart=0;
var addToCart=(item) =>{
  return cart+item;
};
var addcartvalue=(item)=> {
  cart=addToCart(item);
};
addcartvalue(item.food);
console.log("cart :",cart);
var cart ;

function getthis(){
  console.log(this);
}

getthis();
const arrowgetthis=()=>{
  console.log(this);
};
arrowgetthis();

const ourobject = {
  name:"this ketword",
  getthis: () =>{
    console.log(this);
  }
};

ourobject.getthis();

var array= [1,2,3,4,5,6,7,8,9,0];
console.log(array);
array.push(12);
console.log(array);
array.pop();
console.log(array);
array.unshift(0);
console.log(array);
array.shift();
console.log(array);

var num=1;
function number(){
  console.log(num);
  num++;

  if (num<=10) {
       number();
  }
  else {
    return;
    console.log("hello");
  }
}
number();
