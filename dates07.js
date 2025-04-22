// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);

// let myCreateDate = new Date(2025, 8, 7)
// console.log(myCreateDate.toDateString());

let myCreateDate = new Date("2025-01-09")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getHours());

newDate.toLocaleString('default',{
    weekday: "long"
})
