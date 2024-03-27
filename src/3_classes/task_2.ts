class Product {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly price: number
    ){}
}

class Delivery {
    constructor(
        public readonly date: Date
    ){}
}

class AddresDelivery extends Delivery {
    constructor(
        public readonly address: string,
        date: Date,
    ) {
        super(date);
    }
}

class PointDelivery extends Delivery {
    constructor(
        public readonly shopId: number,
    ){
        super(new Date())
    }
}


class Cart {
    private _products: Product[] = [];
    private _delivery: PointDelivery | AddresDelivery | null = null

    addProduct(product: Product) {
        this._products.push(product)
    }

    deleteProduct(productId: number) {
        this._products = this._products.filter(p => p.id !== productId);
    }

    getCost() {
        return this._products.reduce((sum, p) => sum + p.price, 0)
    }

    chooseDelivery(shopId: number): void;
    chooseDelivery(address: string, date: Date): void;

    chooseDelivery(x: number | string, date?: Date) {
        if(typeof x === 'number') {
            this._delivery = new PointDelivery(x);
        } else if(typeof x === 'string') {
            this._delivery = new AddresDelivery(x, date || new Date());
        }
    }

    checkout() {
        if(!this._delivery) {
            return 'Вы не выбрали доставку!'
        }

        if(this._products.length === 0) {
            return 'Ваша корзина пуста!'
        }

        return 'Заявка отправлена!';
    }
}

const cart = new Cart();

const cheese = new Product(1, 'cheese', 120);
cart.addProduct(cheese);
console.log(cart.getCost());

const bread = new Product(2, 'bread', 40);
cart.addProduct(bread);
console.log(cart.getCost());

console.log(cart.checkout())

cart.chooseDelivery('Street Pushkina 12', new Date());
console.log(cart.checkout());

cart.deleteProduct(1);
cart.deleteProduct(2);
console.log(cart.checkout());
