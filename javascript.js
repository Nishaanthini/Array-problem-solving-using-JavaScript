// Array creation and initialization(1st Program)
let alphabet=["a","b","c","d"];
document.write(alphabet);
document.write("<br>");

//Array Manipulation(2nd Program)
let language=["Python","Java"];
console.log(language)
//Push
language.push("C++");
console.log(language);
//Unshift
language.unshift("C");
console.log(language);
//Pop
language.pop();
console.log(language);
//Shift
language.shift();
console.log(language);

//Array Searching(3rd Program)
let fruits=["Apple","Orange","PineApple","Banana"];
//indexOf
console.log(fruits.indexOf("Orange"));
//includes
console.log(fruits.includes("Mango"));
//find
let nums = [-10,-3,-2,4,6];
let positive = nums.find(function (num) {
    return num>0;
});
console.log(positive);

//Array Filtering(4th Program)
const words = ["Hello","World","Hai","class"];
const result = words.filter((word) => word.length > 4);
console.log(result);

//Array Mapping(5th Program)
const num = [25,9,36,49];
a=num.map(Math.sqrt);
console.log(a);

//Array Sorting(6th Program)
//sort
const arr=[12,43,23,25,18,16];
console.log(arr.sort());
//reverse
console.log(arr.reverse());