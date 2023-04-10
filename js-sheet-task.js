// num to string
// var num = 20;
// var str = num.toString();
// console.log(num); // 24
// console.log(str); // "24"


// Count character and word of given string
// var char = "sachin";
// console.log(char.length); // 6


// Seach specific word and its position from string
// var str = "hello john deo"
// var search = str.search("deo")
// let position = str.search(/john/i);
// let result = str.includes("hello", 0);
// console.log(search); // 11
// console.log(position); // 6
// console.log(result); // true


// Swap given word with specified word from string replace word
// var text = "Hello my name is john deo & john deo is programmer.";
// let replace = text.replace("john deo", "sam deo");
// let rep = text.replace(/john deo/g, "sam deo");
// console.log(replace); // sam deo
// console.log(rep); // all is sam deo


// Define numeric array and search given value from it
// var array = [-10, -0.20, 0.30, -40, -50];
// var arrays = [10, 20, 30, 40, 50];
// Method (return element > 0).
// var found = array.find(function (element) {
//     return element > 0;
// });
// var found = arrays.find(function (element) {
//     return element > 20;
// });
// Printing desired values.
// console.log(found); // 30


// Declared numeric array and sort in ascending order and descending order
// var mark = [10, 20, 25, 26, 11, 77, 99, 44, 23, 0];
// console.log(mark.sort()); // accending formate
// mark.sort(function (a, b) { return b - a });
// console.log(mark); // decending formate


// Declared string array and sort in ascending order and descending order
// var item = ["pc", "mouse", "key-board", "CPU"];
// console.log(item.sort());
// item.sort(function (a, b) { return b - a });
// console.log(item);


// Convert json array to string and string to  json array
// var JS_Obj = '{"prop_1":"val_1", "prop_2":"val_2", "prop_3" : "val_3"}';
// function myGFG() {
//     var obj = JSON.parse(JS_Obj);
//     var res = [];

//     for (var i in obj)
//         res.push(obj[i]);

//     console.log("Array of values - [" + res + "]");
// }
// myGFG();
// function convert() {
// Initialize the dummy JSON String
// let jsonString = '[ { "name" : "Ram", "age" : 20, "car" : "ford"},{ "name": "Shyam", "age" : "21", "car" : "tata" }, { "name" : "Mohan", "age" : 22, "car" : "toyota" } ]'
// Conver the JSON String to JSON object
// let jsonObject = JSON.parse(jsonString);
// Get the paragraph element
// let p = document.getElementById("result")
/// Print the Object
// p.innerText += JSON.stringify(jsonObject);
// Print the Object on Console
// console.log(jsonObject)
// }
// convert();


// Add and remove value from array
// const people = ['patrick', 'chimamanda', 'joe', 'sam']
// const people = [
//     { name: "patrick", age: 21 },
//     { name: "chimamanda", age: 25 },
//     { name: "joe", age: 32 },
//     { name: "sam", age: 16 },
// ]
// let reversedPeople = people.reverse() // revrse rec
// const lastPerson = people.pop()
// console.log(reversedPeople);
// console.log(people.includes('sam')) // true
// console.log(people.includes('jack')) // false
// console.log(lastPerson) // "sam"
// console.log(people) // ["patrick", "chimamanda", "joe"]
// const count = people.push('akilah', 'isaac')
// console.log(count) // 6
// console.log(people) // ["patrick", "chimamanda", "joe", "sam", "akilah", "isaac"]
// const numbers = ['five', 'two', 'three', 'four', 'five']
// numbers.splice(0, 1, "one")
// console.log(numbers) // ["one", "two", "three", "four", "five"]
// let str = "flexion infotech"
// console.log(str.slice(5)); // 5 word cut n....
// console.log(str.slice(3, 7)); // i to i
// Define object array and search value from it and find particular index
// let emp = [{ firstName: "John", lastName: "Doe", age: 38 }, { firstName: "John", lastName: "Smith", age: 45 }];
// let ind = emp.map(item => item.age).indexOf(45);
// let ind = emp.findIndex(item => { return item.age == 45 })
// console.log(ind);


// Concate string array value
// let array = ['The', 97, 'Dream', 'Team'];
// let jumble = array.join();
// let concatenate = array.join('/');
// let text = array.filter(v => typeof v === 'string').join();
// console.log(jumble);// 'The 97 Dream Team'
// console.log(text);// The Dream Team
// console.log(concatenate); // The/97/Dream/Team


// sum of numeric array
// Creating array
// var arr = [4, 8, 7, 13, 12]


// Creating variable to store the sum
// var sum = 0;
// Running the for loop
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// Calculation the sum using forEach
// arr.forEach(x => {
//     sum += x;
// });
// Using reduce function to find the sum
// var sum = arr.reduce(function (x, y) {
//     return x + y;
// }, 0);
// console.log("Sum is " + sum) // Prints: 44


// union of two numeric array
// const arr1 = ['orange', 'green', 'blue']
// const arr2 = ['yellow', 'white', 'blue']
// const arr3 = [...arr1, ...arr2]
// console.log(arr3);


// unique elements from two arrays
// let myIceCream = ["chocolate", "vanilla", "pistachio"];
// let yourIceCream = ["spumoni", "chocolate", "coconut"];
// let allIceCream = [...new Set([...myIceCream, ...yourIceCream])];
// console.log(allIceCream);


// find different between two arrays
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [5, 6, 7, 8];
// let difference = arr1.filter(x => arr2.indexOf(x) === -1);
// console.log(difference);


// merge two arrays and removes all duplicates elements
// const arr1 = ['orange', 'green', 'blue']
// const arr2 = ['yellow', 'white', 'blue']
// const arr3 = [...new Set([...arr1, ...arr2])];
// console.log(arr3);


// declare object array and sort  in ascending order and descending order by specific key using birth date asc desc and name wise
// let student = [
//     {
//         name: "john deo",
//         age: "30",
//         birthDate: "December 15, 1989"
//     },
//     {
//         name: "sam khan",
//         age: "35",
//         birthDate: "January 13, 1985"
//     }, {
//         name: "mark andersan",
//         age: "33",
//         birthDate: "February 25, 1987"
//     }
// ]
// student.sort((a, b) => {
//     let ds = new Date(a.birthDate),
//         db = new Date(b.birthDate);
//     return db - ds; // change for acc & dec "ds - db"
// });
// console.log(student);


// Find smaller and greater number from given array
// let numList = [20, 22, 45, 88, 22, 11, 32, 52, 46];
// let findMaxMin = (numList) => {
//     let min = numList[0];
//     let max = numList[0];
//     for (let i = 0; i < numList.length; i++) {
//         if (numList[i] > max) {
//             max = numList[i]
//         }
//         else if (numList[i] < min) {
//             min = numList[i]
//         }
//     }
//     return { min, max }
// }
// console.log(findMaxMin(numList));
// use math function
// const highest = Math.max(...numList);
// const lowest = Math.min(...numList);
// console.log("highest num is : " + highest);
// console.log("lowest num is : " + lowest);


// find longest value from string array
// function longest_str_in_array(arra) {
//     var max_str = arra[0].length;
//     var ans = arra[0];
//     for (var i = 1; i < arra.length; i++) {
//         var maxi = arra[i].length;
//         if (maxi > max_str) {
//             ans = arra[i];
//             max_str = maxi;
//         }
//     }
//     return ans;
// }
// console.log(longest_str_in_array(["ab", "a", "abcd"]));
// console.log(longest_str_in_array(["ab", "ab", "ab"]));


// seach and add new key in object array
// const person = {
//     name: "john deo",
//     age: 22,
//     gender: "male"
// }
// person.birthDate = "30-04-2000"
// console.log(person);
//add multi keys & values in array
// var keys = [1, 2, 3, 4, 5];
// var values = ["king", "queen", "good", "kids", "legends"];
// var obj = {};
// Using loop to insert key value in Object
// for (var i = 0; i < keys.length; i++) {
//     obj[keys[i]] = values[i];
// }
// for (var key of Object.keys(obj)) {
//     console.log(key + " => " + obj[key])
// }


// Convert string type array to string, string to array
// var stringArray = ["1", "2", "3", "4", "5"];
// var numberArray = [];
// length = stringArray.length;
// for (var i = 0; i < length; i++)
//     numberArray.push(parseInt(stringArray[i]));
// console.log(numberArray);
// const myFavShow = 'The Office'
// const myFavShowArray = Array.from(myFavShow);
// console.log(myFavShowArray)


// Make sum of all value of numeric array
// var arr = [4, 8, 7, 13, 12]
// var sum = arr.reduce(function (x, y) {
//     return x + y;
// }, 0);
// console.log("Sum using Reduce method: " + sum); // 44


// Show larger and smaller number from given two number
// let number1 = 200;
// let number2 = 450;
// if (number1 > number2) { // < min > max
//     console.log(" maximum is " + number1);
// } else {
//     console.log(" maximum is " + number2);
// }


// Find larger number of given more than three numbers
// let num1 = 200;
// let num2 = 45;
// let num3 = 50;
// if (num1 > num2 && num1 > num3) {
//     console.log(num1 + " is greatest");
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log(num2 + " is greatst");
// }
// else if (num3 > num1 && num3 > num1) {
//     console.log(num3 + " is greatest");
// }


// Check Odd even number from given number
// var num = 67;
// if (num % 2 == 0)
//     console.log(num + " is an Even Number");
// else
//     console.log(num + " is an Odd Number");


// Check leap year
// var yr = 2023;
// if ((yr % 4 == 0) && (yr % 100 != 0))
//     console.log(yr + " is a Leap Year");
// else if (yr % 400 == 0)
//     console.log(yr + " is a Leap Year");
// else
//     console.log(yr + " is not a Leap Year");


// Make number table
// let n = 2;
// for (let i = 1; i <= 10; ++i)
//     console.log(n + " * " + i + " = " + n * i);


// make simple students markesheet with using condition statement
// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
// var Avgmarks = 0;
// // console.log(students[1].sort());
// for (var i = 0; i < students.length; i++) {
//     Avgmarks += students[i][1];
//     var avg = (Avgmarks / students.length);
// }
// console.log(students.length);
// console.log("sum is : " + Avgmarks);
// console.log("Average grade: " + (Avgmarks) / students.length);
// if (avg < 60) {
//     console.log("Grade : F");
// }
// else if (avg < 70) {
//     console.log("Grade : D");
// }
// else if (avg < 80) {
//     console.log("Grade : C");
// } else if (avg < 90) {
//     console.log("Grade : B");
// } else if (avg < 100) {
//     console.log("Grade : A");
// }


// Check string first character is in uppercase or not
// function startsWithCapital(word) {
//     return word.charAt(0) === word.charAt(0).toUpperCase()
// }
// console.log(startsWithCapital("Hello")) // true
// console.log(startsWithCapital("hello")) // false


// Check value is in string or number
// var numberOfpushUpsToday = "hello";
// if (!isNaN(numberOfpushUpsToday)) {
//     console.log('It is a number')
// }
// else {
//     console.log('It is not a number')
// }


// check valid email id
// function validateEmail(email_id) {
//     const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (regex_pattern.test(email_id)) {
//         console.log('The email address is valid');
//     }
//     else {
//         console.log('The email address is not valid');
//     }
// }
// validateEmail('abc123@gmail.com');
// validateEmail('hello@com');


// Convert datetime format of given datetime
//a simple date formatting function
// function dateFormat(inputDate, format) {
//     //parse the input date
//     const date = new Date(inputDate);
//     //extract the parts of the date
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     //replace the month
//     format = format.replace("MM", month.toString().padStart(2, "0"));
//     //replace the year
//     if (format.indexOf("yyyy") > -1) {
//         format = format.replace("yyyy", year.toString());
//     } else if (format.indexOf("yy") > -1) {
//         format = format.replace("yy", year.toString().substr(2, 2));
//     }
//     // replace the day
//     format = format.replace("dd", day.toString().padStart(2, "0"));
//     return format;
// }
// console.log('Converted date: ' + dateFormat('2021-12-10', 'MM-dd-yyyy'));
// const fileData = {
//     author: "Maria",
//     title: "Date.prototype.toJSON()",
//     createdAt: new Date(2019, 3, 15),
//     updatedAt: new Date(2020, 6, 26),
// };
// const response = JSON.stringify(fileData);
// // Imagine transmission through network
// const data = JSON.parse(response, (key, value) => {
//     if (key === "createdAt" || key === "updatedAt") {
//         return Date.parse(value);
//     }
//     return value;
// });
// console.log(data);

// var dt = new Date();
// var month = dt.getMonth(); // read the current month
// var year = dt.getFullYear(); // read the current year

// dt = new Date(year, month, 01); // date object with first day of current month

// var first_day = dt.getDay(); //, first day of present month ( from 0 to 6 )
// console.log("first_day = " + first_day + " current date");


// find out month name, weekday name of given datetime
// const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const d = new Date();
// let day = weekday[d.getDay()];
// console.log(day);
// var month_name = function (dt) {
//     mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     return mlist[dt.getMonth()];
// };
// console.log(month_name(new Date("12/04/2009")));
// console.log(month_name(new Date("04/04/2014")));


// Find out previous and next month of given date
const yesterday = new Date(30 - 04 - 10);
yesterday.setDate(yesterday.getDate() - 1);
console.log(yesterday);
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}
console.log(formatDate(yesterday)); // 👉️ "2022-01-13"
const today = new Date();
// const yesterday = new Date();
// yesterday.setDate(today.getDate() - 1);
// console.log(yesterday);


// find out previous and next month of given date
// const dateWithoutTime = someDate => new Date(someDate.toDateString());
// const checkDateIsTodayOrYesterday = someDate => {
//     const today = dateWithoutTime(new Date());
//     const yesterday = dateWithoutTime(new Date());

//     yesterday.setDate(today.getDate() - 1);

//     const comparisonDateTime = dateWithoutTime(someDate).getTime();

//     if (
//         comparisonDateTime > today.getTime() ||
//         comparisonDateTime < yesterday.getTime()
//     ) {
//         throw new Error("Invalid date - neither today or yesterday");
//     }

//     return comparisonDateTime === today.getTime() ? "today" : "yesterday";
// };
// const yesterdaysDate = new Date();
// yesterdaysDate.setDate(yesterdaysDate.getDate() - 1);
// console.log(checkDateIsTodayOrYesterday(new Date())); // 'today'
// console.log(checkDateIsTodayOrYesterday(yesterdaysDate)); // 'yesterday'
// console.log(checkDateIsTodayOrYesterday(new Date("01/02/2020"))); // Error "Invalid date - neither today or yesterday"


// find out first and last date of month of given date
// function getFirstDayOfMonth(year, month) {
//     return new Date(year, month, 1);
// }
// console.log(getFirstDayOfMonth(2026, 0));
// console.log(getFirstDayOfMonth(2031, 0));
// console.log(getFirstDayOfMonth(2036, 0));
// function getLastDayOfMonth(year, month) {
//     return new Date(year, month + 1, 0);
// }
// console.log(getLastDayOfMonth(2000, 0));
// console.log(getLastDayOfMonth(2028, 1));
// console.log(getLastDayOfMonth(2029, 2));
// console.log(getLastDayOfMonth(2004), 0);

// find out first and last date of previous and next months of given date
