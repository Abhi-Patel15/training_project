// function prom(complete){
// return new Promise(function(resolve, reject){
//     console.log("Fetching data, please wait.");
//     setTimeout(() =>{ if(complete){
//         resolve("I am successfull");

//     }else{
//         reject("I am failed");
//     }
// },2000)
   
// });
// };
// let onfulfilment = (result) =>{
//     console.log(result)
// }
// let onRejection = (error) =>{
//     console.log(error)
// }

// prom(false).then(onfulfilment).catch(onRejection);
// console.log(prom(false));







//------------------promise all----------------------

// let p1 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         console.log('the frist promise has resolved');
//         resolve(10);
//     },1 * 1000);
// });
// let p2 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         console.log('the Second promise has resolved');
//         resolve(20);
//     },2 * 1000);
// });
// let p3 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         console.log('the third promise has resolved');
//         resolve(30);
//     },3 * 1000);
// });
//  var total = 0;
// Promise.all([p1,p2,p3]).then((result)=>{
//     for(var i in result){total+=result[i];}
//     console.log(`Results:${result}`)
//     console.log(`total:${total}`)
// }).catch((error) =>{
//     console.log(`Results:${error}`)
// });






//-----------any and race-------------

// let p1 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         console.log('the frist promise has resolved');
//        // resolve(10);
//         reject('errr1')
//     },4 * 1000);
// });
// let p2 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         console.log('the Second promise has resolved');
//         //resolve(20);
//         reject('errr2');
//     },2 * 1000);
// });
// let p3 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         console.log('the third promise has resolved');
//        // resolve(30);
//        reject('errr3');
//     },3 * 1000);
// });
//  var total = 0;
// Promise.any([p1,p2,p3]).then((result)=>{
//     for(var i in result){total+=result[i];}
//     console.log(`Results:${result}`)
//     //console.log(`total:${total}`)
// }).catch((error) =>{
//     console.log(`Results:${error}`)
// });





//-----try ---chtch---
// setTimeout(() => {
//     console.log("hello world")
// },1000);
// try{
// console.log(abhi);
// }
// catch(error){
//     console.log("erro")
// }
// setTimeout(() => {
//     console.log("hello abhi")
  
// },2000);
// setTimeout(() => {
//     console.log("hello krunal")
// },3000);





// try {
//     let a  = 0;
//     console.log(p);
//     console.log("skdbas")
// }
// catch (err){
//     console.log("theikdjshd")
//     console.log(t)
// }
// finally{
//     console.log("lskndsjdn");

// }






//---------callbackfunction------
// function my(a, b, callback){
//     console.log(a + b)
//     callback();
// }

// function hello(){
//     console.log("hello")
// }

// function num (){
//     console.log("num")
// }

// my(10, 34, hello);
// my(30, 40, num);




//-----async--------

// sbhi = async ( ) =>{
//     console.log("1")
//     console.log("2")
//   await  console.log("3")
//     console.log("4")
//     console.log("5")
// }

// console.log("6");
// sbhi();
// console.log("abhi");
// console.log("krunal");



//-----------------------setInterval--------------
// <!DOCTYPE html>
// <html>
//   <style>
//     .go {
//   color: green;
// }
// .stop {
//   color: red;
// }

//   </style>
// <body>
//   <div id="my_box">
//     <h3>Hello World</h3>
//   </div>
//   <button id="start">Start</button>
//   <button id="stop">Stop</button>
  

// // <script>
//  
// let nIntervId;

// function changeColor() {
//   
//   if (!nIntervId) {
//     nIntervId = setInterval(flashText, 1000);
//   }
// }

// function flashText() {
//   const oElem = document.getElementById("my_box");
//   oElem.className = oElem.className === "go" ? "stop" : "go";
// }

// function stopTextColor() {
//   clearInterval(nIntervId);
//   // release our intervalID from the variable
//   nIntervId = null;
// }

// document.getElementById("start").addEventListener("click", changeColor);
// document.getElementById("stop").addEventListener("click", stopTextColor);


// </script>
// </body>
// </html> */}


// class Car {
//     constructor(name, year,color) {
//       this.name = name;
//       this.year = year;
//       this.color = color;-
  
//     }
//     age() {
//       let date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }
  
//   let myCar = new Car("Ford", "2014", "RED");
//   console.log(myCar);
//   //let abhi = myCar;
// //console.log(Car.color)
//   //let value = myCar.toLowerCase();
//   //console.log(value);
  
//  // document.getElementById("demo").innerHTML =
//   //"My car is " + myCar.age() + "years old " + value.color +" abhi";
//   if (myCar.color == "black"){
//       document.write("my favrit color");
//       }






// /* let iceCream = "chocolate";
//  if (iceCream === "chocolate") {
//    alert("Yay, I love chocolate ice cream!");
//  } else {
//    alert("Awwww, but chocolate is my favorite…");
//  }

//  function setUserName() {
//      const myName = prompt("Please enter your name.");
//      localStorage.setItem("name", myName);
//      myHeading.textContent = `Mozilla is cool, ${myName}`;
//    }*/







// function setUserName() {
//     const myName = prompt("Please enter your name.");
//     if (!myName) {
//       setUserName();
//     } else {
//       localStorage.setItem("name", myName);
//       myHeading.textContent = `Mozilla is cool, ${myName}`;
//     }
//   }







// let a = 15;
// let b = 5;
// if (a % 5 == 0 || a > 10 && a < 20) {
//   console.log("Yes 'a' is between 10 and 20 or is divisible by 5.");
// }
// if (b % 5 == 0 || b > 10 && b < 20) {
//   console.log("Yes 'b' is not between 10 and 20 but is divisible by 5.");
// }
 








// const year = new Date().getFullYear();
// let isLeapYear;
// if (year % 4 === 0) {
//     console .log
//   if (year % 100 === 0) {
//     if (year % 400===0) {
//       isLeapYear = "a leap year";
//     }
//     else {
//       isLeapYear = "not a leap year";
//     }
//   }
//   else {
//     isLeapYear = "a leap year";
//   }
// }
// else {
//   isLeapYear = "not a leap year";
// }
// console.log(year + " is " + isLeapYear);
  



// let name = prompt("Welcome"+ "\n" +"Give me your name");
//     let chd = alert("hello"+" "+name)
//     let tea = prompt("Would you prefer"+"\n"+"tea or coffee?");
//     if (tea == "tea") {
//         confirm("Okay ! Give me 10 mins for tea");    
//     }
//     else if (tea =="coffee"){
//         confirm("I'm going to make cold coffee I will be back in 5 mins!");
//     }else{
//         alert("this value not found")
//     }


// /*let hour = 20;
// if(hour >= 6 && hour < 12){
//     console.log("good morning");
// }else if (hour >= 12 && hour < 18){
//     console.log('good afternoon')
// }else{
//     console.log('good evening ')
// }*/






// /*let hour = 18;
// switch(hour){
//     case 12:
//     console.log('good morning')
//     break;
    
//     case 13:
//     case 18:
//     console.log('good afteroon');
//     break;
    
//     default:
//     console.log('good evening');
    
// }*/



// /*for(let i = 1; i<=5; i++ ){
//     if(i % 2 !== 0){
//      console.log(i);
//     }
// }*/


// /*//[]
// let per ={
//     name:'abhi',
//     age : 24
// };
// for(let key in per)
// console.log(key,per[key])

// //. vs
// let lest ={
//     name:'abhi',
//     age : 24
// };
// for(let key in lest)
//console.log(key,lest.name)*/



// /*const i =4
// let abhi = (i % 2 === 0) ? "even":"odd";
// console.log(abhi);*/




// /*let a = 5;
// let y = a++;
// console.log(y);
// console.log(a+ "<br>");
// outup:5
//       6 
//       prepaid plan sim  
 
 
// let b = 5;
// let x = ++b;
// console.log(b);
// console.log(x);
// outup:6
//       6
//       postped plan in sim*/





// /*function sum (){
//     total = 0;
//     for(let value of arguments )
//     total += value;
//     return total;
// }

// console.log(sum(1,2,3,4,5,6,7,8)) */




// /*default parameters
// function interest(principale, rate , year){
//    rate = rate || 3.5;
//    year = year || 3;
//     return principale * rate / 100 * year;

// }

// console.log(interest(7000));*/




// /*const per = {
//     firstName: 'abhi'.toUpperCase(),
//     lastName: 'hothi',
//     fullName(){
//         return `${per.firstName} ${per.lastName}`
//     }
// };
// console.log(per.fullName());*/




// /*const per = {
//     firstName: 'abhi',
//     lastName: 'hothi',
//     fullName(){
//         return `${per.firstName} ${per.lastName}`
//     }
// };
// console.log(per.fullName().toUpperCase());*/



// /*const per = {
//     firstName: 'abhi',
//     lastName: 'hothi',
//     get fullName() {
//         return `${per.firstName} ${per.lastName}`
//     },
//     set fullName(value){
//         const part = value.split(' ');
//         this.firstName = part[0];
//         this.lastName = part[1];
//     }
// };
  
// per.fullName = 'patel ashish';
// // getter and setter 
// console.log(per);
//  */


// /* 
// const a = [1,2,3,4];
 
// for(let value of a){
//     console.log(a);

//   a.map((value, index) => {
//     console.log(index, value);
//   });
    
// }*/




// /*const number =[1,2,3,4];
// const joined = number.join(',')
// console.log(joined);

// const message = 'This is my pan'
// const parts = message.split(' ');
// console.log(parts);*/

// /*const number = arrayFromRange(1,4)
// console.log(number);

// function arrayFromRange(min, max){
//     const outup =[]
//     for(i=min; i<=max; i++)
//         outup.push(i);
//         return outup;
// }
// */




// /*class student{
//     constructor(name,age){
//         this.studentname = name,
//         this.studentage = age;
//         console.log("constructor Function");
//     }
//     hello(){
//         console.log(`hello ${this.studentname} Your age is ${this.studentage}`);
//     }
// }
 
// let a = new student("patel abhi",25);
// a.hello();*/


//---------------------------------------[-----------------err
// /*
// let name = {
//     firstName : abhi,
//     lastName  : hothi,
//          age  : 18,
//       output  : function(){
//         return `my name is ${this.firstName} ${this.lastName}. my age ${age}`
//       },
// };
// output();
// */




// // get and set
// /*let person = {
//     name: "abhi",
//     last: "hothi",
//     age: 22,
   
//     getname : function(){
//       return this.name.toUpperCase();
//     },
  
//     get getlast(){
//       return this.last.toUpperCase();
//     },
  
//     set setname(n){
//       return this.name = n.toUpperCase()
//     },
  
//   };
  
   
//   console.log(person.getname());
//   console.log(person.getlast);
//   person.setname = "vishal";
//   console.log(person)*/



//   //adding and removing
//   /*function Cricle(radius) {
//   this.radius = radius;
//   this.draw = function(){
//     console.log('draw');
//   }
// }

// const cricle = new Cricle(10);

// cricle.location = {x: 1};

// const propertyname = 'center location';
// cricle.center-location
// circle[propertyName] = { x: 1};
// */



// /*const circle = {
//    radius : 1,
//    drawI(){
//     console.log('draw');
//    }
// };

// ///----------------enumerate properties of javascript------------------------////
// //1 for-in loop:
// for(let key in circle)
//    //  console.log(key);
//    //  console.log(key,circle[key]);*/





//   /* const circle = {
//     radius : 1,
//     drawI(){
//      console.log('draw');
//     }
//  };
//  //2 for-of loop:
//  for(let key of Object.keys(circle))
//     //  console.log(key);
//       console.log(key,circle[key]);*/





// /*const circle = {
//    radius : 1,
//    name : 'abhi',
//    drawI(){
//     console.log('draw');
//    }
// };

// //1 for-in loop:
// for(let key in circle){
//   if (typeof circle[key] !== 'function')
//   console.log(key, circle[key]);
// }*/




// /* const Mobile = function() {
//             this.a = 10;
//         }

//         Mobile.prototype.z =30;

//         const Samsung = function(){
//             Mobile.call(this);
//             this.b = 20;
//         }
// //prototype Inheritance
//         Samsung.prototype = Object.create(Mobile.prototype);
//         Samsung.prototype.constructor = Samsung;
//         var s = new Samsung();
//         document.write(s.a + "<br>");
//         document.write(s.b + "<br>");
//         document.write(s.z ) */




// /*-----------map-----------*/
// /*const array = [1,4,9,16];
// const map = array.map(x=> x * 2);
// // console.log(map,"map");

// const number = [1,4,9];
// // console.log(number,"number");
// const roots = number.map((num) => Math.sqrt(num));
// // console.log(roots,"roots");

// const kvArray = [
//   {key:1, value:10,eo:10,do:20},
//   {key:2, value:10,eo:10,do:40},
//   {key:3, value:10,eo:10,do:10},
//   {key:4, value:10,eo:10,do:30}
// ];
// // console.log(kvArray,"kvArray");

// // const abhi = kvArray.map((...item)=>{
// //   console.log(item);

// //   return item
// // })
// // console.log(abhi);

//  const newArray = {...kvArray};
// const newArray = [...kvArray];

// const nw = kvArray.map(()=>{

// });*/




// /*function Circle(radius){
//   this.radius = radius;
//   this.move = function() {
//     console.log('move');
//   }
// }

// const c1 = new Circle(1);

// //prototype members
// Circle.prototype.draw = function() {
//   console.log('draw');
// }

// console.log(Object.keys(c1));

// for (let key in c1)console.log(key);*/




///*function Stopwatch(){
//  let startTime,endThime,running,duration = 0;
//
//  
//  Object.defineProperty(this,'',{
//    get: function(){return duration;},
//    set: function(value){ duration = value;}
//  });
//
//  Object.defineProperty(this,'startTime',{
//    get: function(){return startTime;}
//  });
//
//  Object.defineProperty(this,'endTime',{
//    get: function(){return endTime;}
//  });
//
//  Object.defineProperty(this,'running',{
//    get: function(){return running;}
//  });
//}
//
//Stopwatch.prototype.start = function(){
//  if(this.running)
//  throw new Error ('stopewhatch has already started')
//
//  this.running = true; 
//
//  this.startTime = new Date();
//
//};
//
//Stopwatch.prototype.stop = function(){
//  if(!this.running)
//  throw new Error ('stopewhatch has already started')
//
//  this.running = false; 
//
//  this.endTime = new Date();
//
//  const secomds = (endTime.getTime() - startTime.get()) / 1000;
//  this.duration += seconds;
//  
//};
//
//Stopwatch.prototype.reset = function() {
//  this.startTime = null;
//  this.endThime = null;
//  this.running = false;
//  this.duration = 0;
//};
//
//const sw = new Stopwatch();
//sw.Stopwatch =10;
//*/
