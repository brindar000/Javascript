// ["", a ,b ,c ,ab ,bc ,abc]

// let value = "abc"

// let arr= [];

//     for (let i = 0; i < value.length; i++) {
//         let newstr = '';
//         for(let j = i; j < value.length; j++) {
//             newstr += value[j]
//             arr.push(newstr)
//         }
//     }

// console.log(arr);


// let value = prompt("add text here");
// let value = "abc"

// let isUnique = true;

//     for (let i = 0; i < value.length; i++) {
//         for (let j = i + 1; j < value.length; j++) {
//             if (value[i] == value[j]) {
//                 isUnique = false;
//             }
//         }
//     }
//     if (isUnique) {
//         console.log("True");
//     } else {
//         console.log("False");
//     }

// function unique() {
//     for (let i = 0; i < value.length; i++) {
//         for(let j = i+1; j < value.length; j++) {
//             if(value[i]==value[j]) {
//                 return false
//             }
//         }
//     }
//     return true;
// }
// console.log(unique());

// let value = 'abcdcbheggdpqlxaba';

// function unique() {
//     let longstr = '';
//     for (let i = 0; i < value.length; i++) {
//         let newstr = '';
//         for (let j = i; j < value.length; j++) {
//             if (newstr.includes(value[j])) {
//                 break;
//             } else {
//                 newstr += value[j];
//             }
//         }
//         if (newstr.length > longstr.length) {
//             longstr = newstr;
//         }
//     }
//     return longstr;
// }
// console.log(unique());


// n/1==0

// for (let i = 0; i <= 100; i++) {
//     debugger
//     let c = 0;
//     for (let j = 2; j <= i; j++) {
//         if (i % j == 0) {
//             c = c + 1
//         }
//     }
//     if (c == 1) {
//         console.log(i);
//     }
// }
