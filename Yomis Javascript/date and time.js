let my_date = new Date()
const week_days = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
const present_day = my_date.getDay()
let present_hr = my_date.getHours()
const present_min = my_date.getMinutes()
const present_sec = my_date.getSeconds()

console.log(`Today is: ${week_days[present_day]}`);
let hr_title = (present_hr >=12)? "PM":"AM"
if (0 <= present_hr <= 12){
	let hr_title  ='AM'
}
else{
	let hr_title='PM'
}

console.log (`Current Time: ${present_hr} ${hr_title} : ${present_min} : ${present_sec}`);