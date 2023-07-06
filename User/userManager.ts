import {User} from "./User";

export class Manager {
    listUser: User[] = []
    constructor() {
    }

    // constructor() {
    //     this.listUser.push(new User("LangTu", "ThoiTienSu","Hieu",123456,"HaNoi",25,50000))
    //     this.listUser.push(new User("GaiNhaNong", "DiCauVongLenMang","Phuong",123654,"ThaiNguyen",23,75000))
    // }

    logIn(usn:string, pass:string) {
        let userLogin
        for (let i = 0; i < this.listUser.length; i++) {
            if (usn == this.listUser[i].userName && pass == this.listUser[i].passWord) {
                userLogin = this.listUser[i]
                this.listUser[i].setOnline(true)
            }
        }
        return userLogin
    }
    logOut(name:string){
        for (let i = 0; i < this.listUser.length; i++) {
           if ( this.listUser[i].name==name){
               this.listUser[i].setOnline(false)
               this.listUser[i].decreaseMoneyByTime()
               // this.money -= this.getOnlineTime() * 10000 / 3600 // about 166 money per sec
               console.table(this.listUser[i])
           }
        }
    }
    regis(user:User){
        this.listUser.push(user)
        console.log(this.listUser)
    }
    edit(name:string,editUser:User){
        for (let i = 0; i < this.listUser.length; i++) {
            if (this.listUser[i].name==name){
                this.listUser[i]=editUser
            }
        }
    }
    editUser(name:string,pass:string,phoneNumber:number){
        for (let i = 0; i < this.listUser.length; i++) {
            if (this.listUser[i].name==name){
                this.listUser[i].passWord=pass
                this.listUser[i].phoneNumber=phoneNumber
            }
        }
    }
    delete(name:string){
        this.listUser=this.listUser.filter((item)=>item.name!=name)
    }
    show(){
        console.table(this.listUser)
    }
    recharge(name:string, money:number){
        for (let i = 0; i < this.listUser.length; i++) {
            if (this.listUser[i].name==name){
                this.listUser[i].money += money
            }
        }
    }



}