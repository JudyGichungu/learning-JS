function areaOfTriangle( base, height){
	
	var answer = 0.5 * base * height;

	return answer;

}

var result = areaOfTriangle( 12, 6)
// console.log("triangle one:" + result)

var x = areaOfTriangle( 10, 6)
// console.log("triangle two:" + x)

var y = areaOfTriangle( 10, 6)
// console.log("triangle three:" + y)

print(result)
print(x)
print(y)

function print( answer ){
console.log ("areaOfTriangle:" + answer)
}
