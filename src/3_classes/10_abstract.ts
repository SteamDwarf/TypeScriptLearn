//Абстрактный класс нельзя инстанциировать, а только его наследников
abstract class Controller {
    //Абстрактный метод - метод который наследник обязан реализовать
    abstract handle(req: any): void;

    //Абстрактный класс может содержать и абстрактные и не абстрактные методы
    handleWithLogs(req: any) {
        console.log('Start');
        this.handle(req)
        console.log('End');
    }
}