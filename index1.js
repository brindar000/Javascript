let arr = ["abc", "abb", "bcd", "cda"];

let b = [];

function call(a) {
    for (let i = 0; i < arr.length; i++) {
        let result = arr[i].split("");
        if (result.length && result[0] == "a") {
            b.push(arr[i]);
        }
    }
    return b;
}

console.log(call(b));


let arr1 = [12,10,15,9];

function call1() {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i; j < arr1.length; j++) {
            if (arr1[i] < arr1[j]) {
                let change = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = change;
            }
        }
    }
    return arr1;
}

console.log(call1(arr1));