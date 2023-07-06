import {Member} from "./menu/member";
import {Admin} from "./menu/admin";
import {Manager} from "./User/userManager";



export class Main{
    static manager = new Manager();

    static start() {
        let input = require("readline-sync")
        let choice = -1
        while (true) {
            console.log("````````````````")
            console.log("input your choice: " +
                "\n 1.Member.Menu " +
                "\n 2.Admin " +
                "\n 0.Exit "
            )
            choice = input.question("chon : ")
            if (choice == 1) {
                Member.menu()
            }
            if (choice == 0) {
                break
            }
            if (choice == 2) {
                Admin.menuOfAdmin()
            }
        }
    }
}


Main.start();







