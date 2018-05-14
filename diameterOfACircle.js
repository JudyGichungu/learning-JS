class Circle{
	constructor(diameter){
		this.diameter=diameter;
	}
calcarea(){
	return 3.14*(this.diameter)
}
}
const circle = new Circle(12);
console.log(circle.calcarea());
