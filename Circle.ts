import { Shape } from "./Shape";

class Circle implements Shape {
    private _name: string;
    private _color: string;
    private _description: string;
    private _radius: number;

    constructor(name: string, color: string, description: string, radius: number) {
        this._name = name;
        this._color = color;
        this._description = description;
        this._radius = radius;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get color(): string {
        return this._color;
    }
    set color(value: string) {
        this._color = value;
    }

    get description(): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }

    get radius(): number {
        return this._radius;
    }
    set radius(value: number) {
        this._radius = value;
    }

    calculateArea(): number {
        return Math.PI * this._radius * this._radius;
    }
}

export { Circle };