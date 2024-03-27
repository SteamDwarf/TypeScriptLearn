// Статические поля и методы позволяют получить к ним доступ не создавая экземпляр класса
class UserService {
    static db: object;
    static get(id: number) {
        return UserService.db;
    }

    create(data: object) {
        return UserService.db;
    }

    //В блоке static мы можем проинициализировать статические поля
    //В нем нельзя использовать асинхронный код
    static {
        UserService.db = {findById: () => 'Ivan'};
    }
}

UserService.db;
UserService.get(1);

const userService = new UserService();

userService.create({});
//Но мы не можем получить доступ к статичным полям или методам через экземпляр класса
//userService.db;