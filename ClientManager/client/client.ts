export class Client{
    private _computerName:string
    private _status:boolean


    constructor(computerName: string, status: boolean) {
        this._computerName = computerName;
        this._status = status;
    }

    get computerName(): string {
        return this._computerName;
    }

    set computerName(value: string) {
        this._computerName = value;
    }

    get status(): boolean {
        return this._status;
    }


    set status(value: boolean) {
        this._status = value;
    }
}