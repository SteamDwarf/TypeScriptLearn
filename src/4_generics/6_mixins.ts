type GConstructor<T = {}> = new (...args: any[]) => T;

class Positionable {
    constructor(
        private _x: number,
        private _y: number
    ){

    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }
}
/* 
class Sprite {
    constructor(
        private _image: BinaryData
    ){}

    get image() {
        return this._image;
    }
} */

type PositionableConstructor = GConstructor<Positionable>;
//type SpriteConstructor = GConstructor<Sprite>;

function NamedObject<TBase extends PositionableConstructor>(Base: TBase) {
    return class NamedObject extends Positionable {
        constructor(
            private _name: string,
            x: number,
            y: number
        ){
            super(x, y)
        }

        get name() {
            return this._name;
        }
    }
}

const ObjectWithName = NamedObject(Positionable);
