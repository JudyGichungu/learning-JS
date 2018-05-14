class Circle{
	constructor(radius){
		this.radius=radius;
	}
calcPerimeter(){
	return 2*3.14*this.radius;
}
}
const circle = new Circle(12);
console.log(circle.calcPerimeter());