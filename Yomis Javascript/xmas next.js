const today = new Date()
let xmas_day = new Date(today.getFullYear(),11,25)

if (today.getMonth()==11 && today.getDate() >25){
	xmas_day.setFullYear(xmas_day.getFullYear()+1)
}
const year_days = 24*60*60*1000
console.log(Math.ceil((xmas_day.getTime()-today.getTime())/(year_days))+
" days left until Christmas!");


// Alternative 
// // ar currentDate = new Date();
// var monthToChr = 12-(currentDate.getMonth()+1);
// var daysToChr = 30 - currentDate.getDate();
// var totDaysToChr = (monthToChr * 30) + daysToChr - 5;
// console.log(totDaysToChr);