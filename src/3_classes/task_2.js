var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var Delivery = /** @class */ (function () {
    function Delivery(date) {
        this.date = date;
    }
    return Delivery;
}());
var AddresDelivery = /** @class */ (function (_super) {
    __extends(AddresDelivery, _super);
    function AddresDelivery(address, date) {
        var _this = _super.call(this, date) || this;
        _this.address = address;
        return _this;
    }
    return AddresDelivery;
}(Delivery));
var PointDelivery = /** @class */ (function (_super) {
    __extends(PointDelivery, _super);
    function PointDelivery(shopId) {
        var _this = _super.call(this, new Date()) || this;
        _this.shopId = shopId;
        return _this;
    }
    return PointDelivery;
}(Delivery));
var Cart = /** @class */ (function () {
    function Cart() {
        this._products = [];
        this._delivery = null;
    }
    Cart.prototype.addProduct = function (product) {
        this._products.push(product);
    };
    Cart.prototype.deleteProduct = function (productId) {
        this._products = this._products.filter(function (p) { return p.id !== productId; });
    };
    Cart.prototype.getCost = function () {
        return this._products.reduce(function (sum, p) { return sum + p.price; }, 0);
    };
    Cart.prototype.chooseDelivery = function (x, date) {
        if (typeof x === 'number') {
            this._delivery = new PointDelivery(x);
        }
        else if (typeof x === 'string') {
            this._delivery = new AddresDelivery(x, date || new Date());
        }
    };
    Cart.prototype.checkout = function () {
        if (!this._delivery) {
            return 'Вы не выбрали доставку!';
        }
        if (this._products.length === 0) {
            return 'Ваша корзина пуста!';
        }
        return 'Заявка отправлена!';
    };
    return Cart;
}());
var cart = new Cart();
var cheese = new Product(1, 'cheese', 120);
cart.addProduct(cheese);
console.log(cart.getCost());
var bread = new Product(2, 'bread', 40);
cart.addProduct(bread);
console.log(cart.getCost());
console.log(cart.checkout());
cart.chooseDelivery('Street Pushkina 12', new Date());
console.log(cart.checkout());
cart.deleteProduct(1);
cart.deleteProduct(2);
console.log(cart.checkout());
