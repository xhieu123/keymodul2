export class Food{
    private _name:string
    private _money:number

    constructor(name: string, money: number) {
        this._name = name;
        this._money = money;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get money(): number {
        return this._money;
    }

    set money(value: number) {
        this._money = value;
    }
}