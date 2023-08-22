//1.TempConverter Application to  convert the temperature from fah to cel
// let fah = Number(prompt('Enter temperature in fahrenheit: '));
// let cel = ((5/9) * (fah - 32));
// console.log(`${fah} F = ${cel} C `);

//2.Application that convert MILES TO KiloMeters
//   1 Mile = 1.60935 KiloMeters

// let miles = parseFloat(prompt('Enter the miles in floating-point values you travelled:'));
// let kilometers = miles * 1.60935;
// console.log(`${miles} are equal to ${kilometers}`);

//3.Measure the time required for trip
// let speed = parseInt(prompt("Enter the speed value: "));
// let distance = parseInt(prompt("Enter the distance to be travelled: "));
// //console.log(speed , distance); // number appeard as blue coloured on console
// let time = distance / speed;
// console.log(`The time required is ${parseFloat(time)} to travel ${distance} with ${speed}.`);

//4.Application to convert from hours, minutes and seconds into total number of seconds
// let hours = parseFloat(prompt('Enter hours: '));
// let minutes = parseFloat(prompt('Enter minutes: '));
// let seconds = parseFloat(prompt('Enter the seconds: '));
// let totalSeconds = ((hours * 3600)  + (minutes * 60) + seconds );
// console.log(`${totalSeconds} seconds are equivalent  to the ${hours}hrs , ${minutes}mins, ${seconds}secs.`);

//5.Application to convert  total number of seconds into equivalent hours, minutes and seconds.
// let totalSecond = Number(prompt('Enter the seconds: '));
// let hour , mins , secs ;
// hour = totalSecond / 3600;
// let temp  = totalSecond % 3600;
// mins = temp / 60;
// secs = temp % 60;
// console.log(`${totalSecond} seconds are equivalent  to the ${parseInt(hour)}hrs, ${parseInt(mins)}mins, ${parseInt(secs)}secs.`);

//6.Input a year and print whether its a leap year or not
// let year = Number(prompt('Enter the Year: '));
// if(year % 400 === 0)
// {
//     console.log(`${year} is a leap year.`);
// }
// else {
//     console.log(`${year} is not  a leap year.`);
// }

//7.Calculate the electricity bills
// let units = Number(prompt('Enter the units of electricity used: '));
// let bill;
// var costPerUnit;
// if(units <= 500)
// {
//     costPerUnit = 3;
//     bill = units * costPerUnit;
//     console.log(`${bill} is the electricity bill.`);
// }
// else if (units > 500 && units <= 700)
// {
//     costPerUnit = 7;
//     bill = units * costPerUnit;
//     console.log(`${bill} is the electricity bill.`);
// }
// else if (units > 700)
// {
//     costPerUnit = 10;
//     bill = units * costPerUnit;
//     console.log(`${bill} is the electricity bill.`);
// }

//8.Take in two numbers and arithmetic operator
//let num1 = Number(prompt('Input First Number : '));
// let num2 = Number(prompt('Input Second Number : '));
// let operator = prompt('Enter any arithmetic operator : ');
// if(operator === '+')
// {
//     console.log(`Sum of two numbers = ${num1 + num2}`);
// }
// else if(operator === '-')
// {
//     console.log(`Subtraction of two numbers = ${num1 - num2}`);
// }
// else if(operator === '*')
// {
//     console.log(`Multiplication of two numbers = ${num1 * num2}`);
// }
// else if(operator === '/')
// {
//     console.log(`Division of two numbers = ${num1 / num2}`);
// }

//9.Calculate Fibonaaci series upto n numbers
// let num = parseInt(prompt('Enter the n number: '));
// console.log(`Fibonnaci series upto ${num} is : `);
// var num1  = 0;
// var num2 = 1;
// var nextNum;
// for(i = 1 ; i <= num ; i++)
// {
//     console.log(num1);
//     nextNum = num1 + num2;
//     num1 = num2;
//     num2 = nextNum;
// }

//10.Given string is palindrome or not
// var str = prompt('Enter the string: ');
// var reverse = '';
// for(let i = str.length - 1; i >= 0 ; i--)
// {
//     reverse =  reverse + str[i];
// }
// console.log(`String is '${str}'.`);
// console.log(`Reversed String is '${reverse}'.`);
//  //  to check the string
//  let flag = true;
//  for(let i = 0 ; i < str.length ; i++)
//  {
//     if(str[i] !== reverse[i])
//     {
//         flag = false;
//         break;
//     }
//  }
//  if(!flag)
//  {
//     console.log('This string is not a palindrome.');
//  }
//  else{
//     console.log('Its a palindrome.');
//  }

//11.To reverse a string
// var str = prompt('Enter the string: ');
// var reverse = '';
// for(let i = str.length - 1; i >= 0 ; i--)
// {
//     reverse =  reverse + str[i];
// }
// console.log(`Reversed String is '${reverse}'.`);


//12.To calculate all odd numbers til N
// let number = Number(prompt(`Enter the n - number: `));
// var countOdd = 0;
// for(let  i = 0 ; i <= number ; i++)
// {
//     if(i % 2 !== 0)
//     {
//         countOdd++;
//     }
// }
// console.log(countOdd);

//13.To calculate the factorial of a number // 5*4*3*2*1
// let number = Number(prompt("Enter the number to calculate factorial: ")); 
// var fact = 1;
// for(let i = 1 ; i <= number ;i++)
// {
//     fact =  fact * i ;
// }
// console.log(fact);

//14. Print table of number
// let num = Number(prompt("Enter the number : "));
// for(let i = 1 ; i <= 10 ; i++)
// {
//     console.log(num + " * "  + i  + " = "+ num * i);
// }

//15.To check if number is prime or not  
// let number = Number(prompt("Enter the number: "));
// let flag = true;
// for(let i = 2 ; i  < number ; i++)
// {
//     if( number < 2)
//     {
//         flag = false;
//     }
//     else if ( number === 2)
//     {
//         flag = true;
//     }
//     else if(number % i === 0)
//     {
//         flag = false;
//         break;
//     }
// }
// if(flag)
// {
//     console.log("Its a prime number");
// }
// else{
//     console.log("Its not a prime number");
// }

//16.To calculate the length of a string without using length 
// let str = prompt('Enter the string: ');
// var count = 0;
// while(str[count] !== undefined)  
// {
//     count++;
// }
// console.log(`The length of the string '${str}' is ${count}.`);

