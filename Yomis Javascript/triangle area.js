// Area = 0.5 * base *height
// first calculate height 
//using sign rule 
//Area = 0.5*a*b*sin(c)

const area = (a,b,c)=> {
	r = Math.sin(c)
	return (0.5*a*b * r)
}

console.log(area(5,6,7))