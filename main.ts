import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

const circle: Shape = new Circle("Circle", "Red", "A round shape with a radius of 5", 5);
const rectangle: Shape = new Rectangle("Rectangle", "Blue", "A rectangle 4 by 6", 4, 6);

function printShapeInfo(shape: Shape): void {
    console.log(
        `Shape: ${shape.name} | Color: ${shape.color} | Description: ${shape.description} | Area: ${shape.calculateArea().toFixed(2)}`
    );
}

printShapeInfo(circle);
printShapeInfo(rectangle);