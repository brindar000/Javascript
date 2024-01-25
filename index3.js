// function strPalindrome() {
//     let string = 'abcdcbab'
//     let newstring = ''
//     for (let i = string.length - 1; i >= 0; i--) {
//         newstring += string[i]
//     }
//     if (newstring == string) {
//         return 'The string is a palindrome'
//     } else {
//         return 'The string is not a palindrome'
//     }
// }
// console.log(strPalindrome());


// function numPalindrome() {
//     let num = 1234321;
//     let newnum = ''
//     let num2 = num.toString()

//     for (let i = num2.length - 1; i >= 0; i--) {
//         newnum += num2[i]
//     }

//     if (newnum == num2) {
//         return 'The number is a palindrome'
//     } else {
//         return 'The number is not a palindrome'
//     }
// }

// console.log(numPalindrome());


// function strPalindrome() {
//     let string = 'abcdcba'
//     let newstring = true;
//     for (let i = 0; i<string.length;i++) {
//         if(string[i] != string[string.length - 1 - i]) {
//             newstring = false;
//             break;
//         }
//     }
//     return newstring
// }
// console.log(strPalindrome());

// let arr = ["flower","flight","flow"];
// let value = arr[0];
// 1



// function prefix() {
//     debugger;
//     for (let i = 1; i < arr.length; i++) {
//         let b = 0;
//         let newstr = '';
//         for(let j = 0; j < value.length-1; j++) {
//             let a = arr[i].split('')[b];
//             if(a == value[j]) {
//                 b++
//                 newstr+=a;
//             }
//             else {
//                 newstr;
//                 break;
//             }
//         }
//     }
// }
// console.log(prefix());

// ()[]{}
// [(){()[]}]


// let string = '[(){()[]}]';

// function validPeranthisis() {
//     debugger;
//     let str = [];
//     let newstr = { '{':'}', '[':']', '(':')' };
//     for (let i of string) {
//         if (newstr[i]) {
//             str.push(i);
//         } else {
//             let last = str.pop();
//             if (newstr[last] !== i) {
//                 return false;
//             }
//         }
//     }
//     return str.length === 0;
// }
// console.log(validPeranthisis());


// let string = '';
// let count = 0;
// for (let i = 0; i <= 3; i++) {
//     for (let j = 0; j <= i; j++) {
//         string += count
//         count++;
//     }
//     string += '\n'
// }
// console.log(string);

// let num = [1,2,2,3];
// let target = 2;
// let arr = []

// function removeElement() {
//     debugger
//     for(i=0; i<num.length-1; i++) {
//         if(num[i]==target) {
//             num.splice(i,1);
//         } else {
//             return num;
//         }
//     }
//     return num
// }

// console.log(removeElement());

// function removeElement() {
//     for (i = 0; i < num.length; i++) {
//         if (num[i] === target) {
//             num.splice(i,1)
//         } else {
//             arr.push(num[i])
//         }
//     }
//     return arr
// }

// console.log(removeElement());

// function removeElement1() {
//     let array = [];
//     for (i = 0; i < num.length; i++) {
//         if (num[i] !== target) {
//             array.push(num[i]);
//         }
//     }
//     return array
// }

// console.log(removeElement1())

// let number = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3];

// function removeElement2() {
//     let array = [];
//     for (let i = 0; i < number.length; i++) {
//         let isdublicate = false;
//         for (let j = 0; j < array.length; j++) {
//             if (number[i] == array[j]) {
//                 isdublicate = true;
//             }
//         }
//         if (!isdublicate) {
//             array.push(number[i]);
//         }
//     }
//     return array;
// }

// console.log(removeElement2());

// let number = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3];
// let number = [1, 2, 2, 3, 2];

// function removeElement2() {
//     debugger
//     let array = [];
//     for (let i = 0; i < number.length; i++) {
//         let isdublicate = true;
//         for (let j = 0; j < number.length; j++) {
//             if (number[i] == number[j] && i != j) {
//                 isdublicate = false;
//                 break
//             }
//         }
//         if(isdublicate) {
//             array.push(number[i]);
//         }
//     }
//     return array;
// }

// console.log(removeElement2());

// let arr1 = [4,5,6,7,8,10];
// let arr2 = [1,2,3,9];
// function mergeSortedArray() {
//     let newArr = [...arr1, ...arr2];
//     for (let i = 0; i < newArr.length; i++) {
//         for (let j = i; j < newArr.length; j++) {
//             if (newArr[i] > newArr[j]) {
//                 let change = newArr[i];
//                 newArr[i] = newArr[j];
//                 newArr[j] = change;
//             }
//         }
//     }
//     return newArr
// }

// console.log(mergeSortedArray());

// let arr1 = [1, 2, 3, 6, 12];
// let arr2 = [4, 8, 9, 9, 10, 11];
// function mergeSortedArray() {
//     debugger
//     let newArr = [];
//     for (let i = 0; i < arr1.length || arr2.length; i++) {
//         if (arr1[0] <= arr2[0]) {
//             newArr.push(arr1.shift());
//         } else {
//             newArr.push(arr2.shift());
//         }
//     }
//     return newArr
// }

// console.log(mergeSortedArray());


// let arr1 = [1, 2, 3, 6, 11];
// let arr2 = [4, 8, 9, 9, 10, 11];
// let array = [...arr1, ...arr2];
// let j = 0;
// let k = 0;
// function mergeSortedArray() {
//     debugger
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (arr1[j] <= arr2[k]) {
//             newArr.push(arr1[j]);
//             j++;
//         } else {
//             newArr.push(arr2[k]);
//             k++;
//         }
//     }
//     return newArr
// }

// console.log(mergeSortedArray());