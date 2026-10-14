import { Shape } from "./Shape";

class Rectangle implements Shape {
    private _name: string;
    private _color: string;
    private _description: string;
    private _width: number;
    private _height: number;

    constructor(name: string, color: string, description: string, width: number, height: number) {
        this._name = name;
        this._color = color;
        this._description = description;
        this._width = width;
        this._height = height;
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

    get width(): number {
        return this._width;
    }
    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }
    set height(value: number) {
        this._height = value;
    }

    calculateArea(): number {
        return this._width * this._height;
    }
}

export { Rectangle };