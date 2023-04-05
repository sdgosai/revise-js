// num to string
var num = 20;
var str = num.toString();
// console.log(num); // 24
// console.log(str); // "24"

// Count character and word of given string
var char = "sachin";
// console.log(char.length); // 6

// Seach specific word and its position from string
var str = "hello john deo"
var search = str.search("deo")
let position = str.search(/john/i);
let result = str.includes("hello", 0);
// console.log(search); // 11
// console.log(position); // 6
// console.log(result); // true

// Swap given word with specified word from string replace word
var text = "Hello my name is john deo & john deo is programmer.";
let replace = text.replace("john deo", "sam deo");
let rep = text.replace(/john deo/g, "sam deo");
// console.log(replace); // sam deo
// console.log(rep); // all is sam deo

// Define numeric array and search given value from it