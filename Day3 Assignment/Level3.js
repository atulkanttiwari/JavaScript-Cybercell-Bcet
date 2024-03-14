// Human Readable Time Format
// YYYY-MM-DD HH:mm

var date = new Date();
var todayDate = date.getFullYear()+"-"+(date.getMonth() <= 9 ? "0"+(date.getMonth()+1):date.getMonth())+"-"+(date.getDate() <= 9?"0"+date.getDate():date.getDate());
// console.log(todayDate);

var currTime = (date.getHours()<=9?"0"+date.getHours():date.getHours() )+":"+(date.getMinutes <= 9 ? "0"+date.getMinutes() : date.getMinutes());
// console.log(currTime);

console.log(todayDate+" "+currTime);