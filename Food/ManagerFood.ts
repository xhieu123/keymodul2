import {Food} from "./Food";

export class ManagerFood{
    list:Food[]=[]
    constructor() {
    }
    display(){
        console.table(this.list)
    }
    add(a:Food){
        this.list.push(a)
    }
    edit(b:string,c:Food){
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name==b){
                this.list[i]=c
            }
        }
    }
    delete(d:string){
        this.list = this.list.filter((item)=>item.name!=d)
    }
}