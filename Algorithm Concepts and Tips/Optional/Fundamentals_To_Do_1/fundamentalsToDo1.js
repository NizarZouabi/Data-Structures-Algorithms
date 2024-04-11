//Setting and Swapping

let myNumber = 42;
let myName = "Nero";
var temp = myNumber;

myNumber = myName
myName = temp


console.log(`My Name is ${myName}`, `My Number is ${myNumber}`)

//Print -52 to 1066

for (let i=-52; i<=1066; i++){
    console.log(i)
}

//Don't Worry, Be Happy

function beCheerful(){
    for(let i=1; i<=98; i++){
        console.log("good morning!")
    }
}

beCheerful()

//Multiples of Three - but Not All

 for (i=-300; i<=0; i+=3){
     if (i !== -3 && i !== -6){
         console.log(i)
     }
 }

//Printing Integers with While

let intNum = 2000
 while(intNum <= 5280){
     console.log(intNum++)
 }

//You Say It's Your Birthday

var birthMonth = 3
var birthDay = 3

if (birthDay === 3 && birthMonth === 3) {
    console.log("How did you know ?")
} else {
    console.log("Just another day...")
}

//Leap Year

function leapYear(yr){
    if (yr % 4 === 0) {
        if (yr % 100 === 0) {
            if (yr % 400 === 0) {
                console.log(`${yr} is a leap year`);
            } else {
                console.log(`${yr} is not a leap year`);
            }
        } else {
            console.log(`${yr} is a leap year`);
        }
    } else {
        console.log(`${yr} is not a leap year`);
    }
}

leapYear(2024)

//Print and Count

 let count=0

 for (i=512; i<=4096; i+=5){
     count++
     console.log(i)
 }
 console.log(count)

//Multiples of Six

 let num = 0

 while(num < 60000){
     console.log(num += 6)
 }

//Counting, the Dojo Way

 for(i=1; i<=100;i++){
     if(i %10===0) {
         console.log("Dojo")
     } else if (i %5===0) {
         console.log("Coding")
     } else {
         console.log(i)
     }
 }

//What Do You Know?

function doYouKnow(incoming){
    console.log(incoming)
}

doYouKnow("Yes")

//Whoa, That Sucker's Huge…
let sum = 0
for(i=-300000; i<300000; i++){
    if(i %2!==0){
    sum+= i
    console.log(sum) 
    }
}
console.log(i)

//Countdown by Fours

let int = 2016
while(num > 0){
    console.log(num)
    num-= 4
}



//Flexible Countdown

var lowNum = 2
var highNum = 9
var mult = 3
for(i=highNum;i>=lowNum;i-=mult){
    console.log(i)
}

//The Final Countdown

function theFinalCountDown(param1,param2,param3,param4){
    while(param2 <= param3){
        if(param2 != param4 && param2 % param1===0){
            console.log(param2)
        }
        param2++
    }
}

theFinalCountDown(3,5,17,9)
