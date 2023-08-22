// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// function longestCommonPrefix(strs) {
//     strs.sort();
//     let string1 = strs[0];
//     // console.log(string1);
//     let string2 = strs[strs.length-1];
//     // console.log(string2);
//     let index = 0;
//     while(index < string1.length && index < string2.length)
//     {
//         if(string1[index] === string2[index]){
//             index++;
//         }else
//             break;
       
//     }
//       return (string1.substring(0 , index));
// };

// let array =  ['flower' , 'flow' , 'flowed'];
// let result = longestCommonPrefix(array);
// console.log(result);
function lengthOfLastWord(s) {
    let arr = s.split(" ");
    let lastWord = arr[arr.length-1];
    if(lastWord === "")
    lastWord = trim.lastIndexOf("") -1;
    return lastWord.length;
};

let array = "   fly me   to   the moon  ";
let result = lengthOfLastWord(array);
console.log(result);

