export class User {
    private _userName: string
    private _passWord: string
    private _name: string
    private _phoneNumber: number
    private _address: string
    private _age: number
    private _money: number
    private _online: boolean = false
    private _startTime: number = 0


    constructor(userName: string, passWord: string, name: string, phoneNumber: number, address: string, age: number, money: number) {
        this._userName = userName;
        this._passWord = passWord;
        this._name = name;
        this._phoneNumber = phoneNumber;
        this._address = address;
        this._age = age;
        this._money = money;
    }

    get online(): boolean {
        return this._online

    }

    setOnline(value: boolean) {
        this._online = value
        if (value) {
            this._startTime = Date.now();
        }
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get passWord(): string {
        return this._passWord;
    }

    set passWord(value: string) {
        this._passWord = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get phoneNumber(): number {
        return this._phoneNumber;
    }

    set phoneNumber(value: number) {
        this._phoneNumber = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get money(): number {
        return this._age;
    }

    set money(value: number) {
        this._money = value;
    }

    getOnlineTime(): number {
        if (this.online) {
            const currentTime: number = Date.now();
            return (currentTime - this._startTime) / 1000; // return time used (second)
        } else {
            return 0;
        }
    }

    decreaseMoneyByTime(): void {
        this.money -= this.getOnlineTime() * 10000 / 3600 // about 166 money per sec
    }
}