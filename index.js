//-Problem 1
console.log("---------------------------------------Problem 1-----------------");
function maxOfTwoNumbers(num1, num2){
    if(num1>=num2){
        return num1
    }else{
        return num2
    }
        
    }
let num1 =20
let num2 =20
console.log(`Largest number between ${num1} and ${num2} is ${maxOfTwoNumbers(num1, num2)}`);

//-Problem 2
console.log("---------------------------------------Problem 2-----------------");
function maxOfThree(num1, num2, num3){
    if(num1>=num2 && num1>=num3){
        return num1
    } else if(num2>=num1 && num2 >=num3){
        return num2
    }else return num3
}
let numm1=1200
let numm2 = 212
let numm3 = 2400
console.log(`Largest number between ${numm1}, ${numm2}, ${numm3} => ${maxOfThree(numm1, numm2, numm3)}`);

//-Problem 3
console.log("---------------------------------------Problem 3-----------------");
function isCharAVowel(x){ 
    if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U" ) {
        return true;
    }
    else{
        return false;
    }
}
let charInput = 'c'
charInput = charInput.toUpperCase()
console.log(`Is '${charInput}' is a vowel ? => ${isCharAVowel(charInput)}`);

// //Problem 4
console.log("---------------------------------------Problem 4-----------------");
function sumArray(arrayOfNum){
    let sum=0
    for(let i=0; i<arrayOfNum.length; i++){
        sum += arrayOfNum[i]
    }
    return sum
}
let arrayOfNum= [6,7,8,9,10]
console.log(`Sum of array [${arrayOfNum}] is => ${sumArray(arrayOfNum)}`);

// //Problem 5
console.log("---------------------------------------Problem 5-----------------");
function multiplyArray(myArray){
    let result = 1;
    for(let i=0; i<myArray.length; i++){
            result *= myArray[i]
        }
        return result
}
let myArray= [10,5]
console.log(`Product of array [${myArray}] is => ${multiplyArray(myArray)}`);

// //Problem 6
console.log("---------------------------------------Problem 6-----------------");
function numArgs() {
    console.log(arguments.length);
  }
numArgs(1,2,5)

// //Problem 7
console.log("---------------------------------------Problem 7-----------------");
function reverseString(str){
    const words = str.split('');
    //console.log(words);
    const rev = words.reverse();
    //console.log(rev);
    const newString = rev.join('')
    return newString
    }
let str = "Atlanta Georgia"
console.log(`Old string is ${str}`);
console.log(`New Reverse string is ${reverseString(str)}`);

// //Problem 8
console.log("---------------------------------------Problem 8-----------------");
function longestStringInArray(arrayOfStrings){
    let largestString = arrayOfStrings[0].length
    for(let i=0; i<arrayOfStrings.length; i++){
        if(largestString < arrayOfStrings[i].length){
            largestString = arrayOfStrings[i].length
        }
    }
    return largestString
}
let arrayOfStrings = ['aa', 'bb', 'cc','dd', 'e', 'fjjgvhgfhgf' ]
console.log(`Longest string's Length is: ${longestStringInArray(arrayOfStrings)}`);

//Problem 9
console.log("---------------------------------------Problem 9-----------------");
function stringsLongerThan(str, num){
    let newStr =[]
    for(let i=0; i<str.length; i++){
        if(str[i].length > num){
            newStr.push(str[i])
        }
    }
    return newStr
}
let strr = ['say', 'hello', 'in', 'the', 'morning']
let num = 3
console.log(stringsLongerThan(strr, num));