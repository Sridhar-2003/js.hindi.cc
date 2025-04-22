const name = "Sri"
const repCount = 50

// console.log(name + repCount + "Value");

console.log('Hello my name is ${name} and my repocount is ${repCount}');

const gameName = new String('sri_das')
// console.log(gameName[0]);
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
//  slicing
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, -4)
console.log(anotherString);

// trim
const newString1 = "  hitesh  "
console.log(newString1.trim());

// replace
const url = "https://sri.com//sri%21das"
console.log(url.replace('%21','_'))

// split
const gameName2 = new String("sri_das_21")
console.log(gameName2.split('_'));
