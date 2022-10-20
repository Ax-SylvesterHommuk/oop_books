class Shape {
    name;
    sides;
    sideLength;

    constructor (name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter(){
        console.log("Perimeter of " + this.name + " is " + this.sides * this.sideLength);
    }
}

const square = new Shape("Square", 4, 5);
square.calcPerimeter()

const triangle = new Shape("Triangle", 3, 3)
triangle.calcPerimeter()

class Square extends Shape{

    constructor(sidesLength) {
        super(sidesLength);
        this.name = "Square";
        this.sides = 4;
        this.sideLength = sidesLength;
    }

    calcArea(){
        console.log("Square area is " + Math.pow(this.sideLength, 2))
    }
}

const square2 = new Square(5)
square2.calcArea()
square2.calcPerimeter()