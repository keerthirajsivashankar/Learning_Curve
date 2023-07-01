var num1=20;
var num2=50;
var num3=40;

switch (num1>num2) {
  case true:
   console.log("num1 i greater than num2");
    break;
  case false:
    console.log("num2 is greater than num1");
    break;
  default:
     console.log("sorry error");

}

var a = 1 ;

if (!a) {
  console.log("a is +ve");

}
else {
  console.log("it is -ve");
}

var mymarks=20;

      mymarks>30 ? console.log("passed") : console.log("failed") ;

var a=2;
var b=0;
var c=2;
 b=a++;
 c=++a;
 console.log(a,b,c);


 for (var i = 0; i <=100; i++) {
   if (i%2===0) {
   console.log(i);}
 }
