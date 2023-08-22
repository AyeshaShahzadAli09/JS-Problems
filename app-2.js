                    // Array and Function Problems
//2.FizzBuzz Function
function fizzbuzz(num)
{
    if(num / 3 === 0 )
            return "fizz";
    else if(num / 5 === 0 )
            return "buzz";
    else if (num / 3 === 0 && num / 5 === 0)
            return "fizzbuzz";
    else if (num / 3 !== 0 && num / 5 !== 0 )
            return num;
    else if (num < 48 && num > 57)
        return "Not a Number";
}

let input = Number(prompt('Enter Number: '));
let result = fizzbuzz(input);
console.log(result);


//3.Duplicate of number in array
// let array = [];
// array = prompt('Enter Array Elements: ');
// let duplicate = [];
// for(let i = 0 ; i < array.length ; i++)
// {
//     if(array[i] !== dupliacte[i])
//     {

//     }
// }
//4.Greatest Number in an array
// let array = [];
// array = prompt('Enter Array Elements: ');
// let greatest = array[0];
// for(let i = 1 ; i < array.length ; i++)
// {
//     if(array[i] > greatest)
//     {
//         greatest = array[i];
//     }
// }
// console.log(`${greatest} is the greatest number in an ${array} .`);

//5.Smallest number in an array
// let array = [];
// array = prompt('Enter Array Elements: ');
// let smallest = array[0];
// for(let i = 1 ; i < array.length ; i++)
// {
//     if(array[i] < smallest)
//     {
//         smallest = array[i];
//     }
// }
// console.log(`${smallest} is the smallest number in an ${array}.`);

//6.Sum of all numbers in array  (wrong)
let array = [];
array = prompt('Enter Array Elements: ').split(',');
var sum = 0;
for ( let i  = 0 ; i < array.length ; i++)
{
    sum = sum + array[i]; 
}
console.log(`${sum} is sum of all numbers in array.`);

//7.Find unique elements in an array (wrong)
// let arr = [];
// arr = prompt('Enter the array elements: ').split(','); 
// let temp = [];
// let flag = true;
// for(let i = 0; i < arr.length ; i++)
// {
//     temp[i] = arr[i];  // temp = 1
    
//     for(let j = 0; j < arr.length ; j++)
//     {
//         if(temp[i] === arr[j])
//     {
//         flag = false;
//         break;
//     }
//     }   
    
//     flag = true; 

//     if(flag)
// {
//     console.log(`${temp[i]} is a unique element in ${arr}.`);
// } 
// }





//8.Find Number of occurrence in an array
// let arr = [];
// arr = prompt('Enter the array elements: ');
// let input = prompt("Search occurrence of an element in an array: ");
// let flag = false;
// let count = 0;
// for(let i = 0 ;i < arr.length ;i++)
// {
//     if(input === arr[i]){
//     flag = true;
//     count++;
//     }
//     else{
//         flag = false;
//     }
// }
// console.log(`The number of occrrence of an ${input} is ${count} in ${arr}.`);

//9.To reverse an array
// let arr = [];
// arr = prompt('Enter the array elements: ');
// var reverse = [];
// for(let i = arr.length - 1; i >= 0 ; i--)
// {
//     reverse.push(arr[i]);
// }
// console.log(`Reversed Array is '${reverse}'.`);

//10.To search user input in an array
// let arr = [];
// arr = prompt("Enter the array elements: ");    
// let input = prompt("Enter anything to search in an array: ");
// let flag = true;
// for(let i = 0 ; i < arr.length ; i++)
// {
//     if(input !== arr[i])
//     {
//         flag = false;
//     }
// }               
// if(!flag)
// {
//     console.log(`${input} is present in an array of '${arr}'.`);
// }
// else{
//     console.log(`${input} is not present in an array of '${arr}'.`);
// }

//11.Function  that takes an array and return length of array

// function lengthArray(array)
// {
//     var count = 0;
//     while(array[count] !== undefined)   // ayesha shahzad
//     {
//         count++;
//     }
//     return count;
// }
// let array = [];
// array = prompt("Enter the array elements: ");
// let result = lengthArray(array);
// console.log(`The length of the array '${array}' is ${result}.`);

