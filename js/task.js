//task 1
for(let i=0; i<5; ++i){
    console.log(`hello world`);
} 


//task 2
function myFun(num1,num2){
    return (num1 * num2) /2;
}
 

//task 3
let s = 4;
let v = 5;
let ans = s > v ?  s : v ; 
console.log(ans);

//task4
function abhi(a){

    if(a===2){
       console.log("this is prime number") 
    }else if(a%2===0 && a%3===0){
       console.log('this not prime number')
   }else if (a%1===0 && a%a===0){
       console.log('this is prime number')
   }else {
       console.log("this is not a number")
   }
}
abhi(1);

//task6
function myNum (number){
    let folat = Math.folat(number);
    const lent = folat.toString();
    const a = lent.length - 1;
    return lent[a];
}
console.log(myNum(43.6));

//task7
let a = 3;
let b = 5;
let c = 6;

if(a>b && a>c){
   let abhi = b>c ? c + ", " + b + ", " +a : b + ", " + c + ", " + a;
   console.log(abhi);
}else if (b>a && b>c){
    let num = c>a ? a + ", " + c +", "+ b : c + ", " + a +", "+ b;
    console.log(num);
}else if (c>a && c>b){
    let bgh = b>a ? a + ", " + b +", "+ c : b + ", " + a +", "+ c ;
    console.log(bgh); 
}else{
    console.log ('this not number');
}

//'8 task  swap number

let d = 1;
let e = 2;
 
[d, e] = [e, d]
 console.log(a);
 console.log(b);

 //9 task 
 let year = new Date().getFullYear();
if (year%4 === 0){
    const x = year%400===0 && year%100===0?"this is leap year":'this not leap year';
    console.log(x);
}else{
    console.log('this is not a leap year');
}

//10
let arry = [1, 3, 53, 6, 32, 75, 54, 75, 75];
let sortArr = arr.sort((a, b) => a - b);
let arrLen = arr.length - 2;
for(let i = arr.length-1; i >= 0; i--){
    if(arr[i] == arr[i-1]){
        arrLen = arrLen - 1;
    }else{
      break;
    }
    
}
console.log('Value -> '+arr[arrLen]);

//----or--------

const arr = [1,2,3,7,4,6,7];
const arr1 = arr.sort((a,b) =>{return a-b});
const arr2 = [...new Set(arr1)];
const arr3 = arr2.length-2;
const arr4 = arr2[arr3];
console.log(arr4);

//15
function myFun (n){
    return n*(n+1)/2 ;
}
myFun(2);
let num =5;
 let total = 0;
for (let i = num; i >=0; --i){
      total += i;
}



//12

function myFun(arr){
    let newArr = [];
    for (let i of arr){
        if(newArr.indexOf(i)===-1){
          newArr.push(i);
        }
    }
    console.log(newArr);
}
let asd=[1,2,3,4,5,6,7,8,9,0,3,5,6,7];
myFun(asd);
//-------------------or------------------------------
const fgh = [...new Set(asd)];
console.log(fgh)

//sorting 
function uni(arr){
   
}

//5
let num3 = "dhgwed";
console.log("asdfgh=>"+ num)
let num1 = num3.toString();
let num2 = num1.length-1;
const res = [];
for(let i=num1.length-1; i>=0; i--){
    let num4 = "";
    num4 += num1[i];
    res.push(num4);
};
console.log(res.join(''));


// new task
const arr1