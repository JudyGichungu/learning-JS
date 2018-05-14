class Circle{
	constructor(radius){
		this.radius=radius;
	}
calcarea(){
	return 3.14*(this.radius*this.radius)
}
}
const circle = new Circle(20, 12);
console.log(circle.calcarea());

