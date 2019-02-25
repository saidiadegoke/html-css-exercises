let user1= prompt("celcius or fareit")
let user2 = prompt("Enter Value:")
const fareit =  (9*(user2+32))/5
const celcius= (5*(fareit-32))/9
	switch (user1){
		case 'celcius':
			
			console.log(`${user2}°C is ${fareit}°F`)
			break
		case 'fareit':
			
			console.log(`${user2}°F is ${celcius}°C`)
			break
		default:console.log("no conv")
	}
	
	