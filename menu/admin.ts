
import {User} from "../User/User";
import {Main} from "../main";


export class Admin {
    static totalMoney: number = 0;

    static menuOfAdmin() {
        let input = require('readline-sync')
        let choice = -1
        while (choice != 3) {
            console.log("input your choice" +
                "\n 1.Đăng nhập" +
                "\n 3.Back")
            choice = input.question("let choice")
            if (choice == 1) {
                console.log("Nhap thong tin dang nhap: ")
                let usn = input.question("ten dang nhap")
                let pass = input.question("nhap mat khau")
                if (usn == "admin" && pass == "1") {
                    let choice2 = -1
                    while (choice2 != 0) {
                        console.log("Menu quan ly tai khoan: " +
                            "\n 1.Edit" +
                            "\n 2.Delete" +
                            "\n 3.Show" +
                            "\n 4.Recharge" +
                            "\n 5.Nhap thuc an"+
                        "\n 6.Back")
                        choice2 = input.question("nhap vao lua chon ")
                        if (choice2 == 1) {
                            let usnedit = input.question("ten muon sua")
                            let usn = input.question("ten dang ki")
                            let pass = input.question("nhap mat khau")
                            let name = input.question("nhap ten")
                            let phoneNumber = input.question("nhap sdt")
                            let address = input.question("nhap dia chi")
                            let age = input.question("nhap tuoi")
                            let money = input.question("nhap tien")
                            Main.manager.edit(usnedit, new User(usn, pass, name, phoneNumber, address, age, money))
                        }
                        if (choice2 == 2) {
                            let usndelete = input.question("ten muon xoa")
                            Main.manager.delete(usndelete)
                        }
                        if (choice2 == 3) {
                            Main.manager.show()
                        }
                        if (choice2 == 4) {
                            let name = input.question("nhap ten")
                            let plusMoney = input.question("Bạn muốn nạp bao nhiêu tiền: ")
                            Main.manager.recharge(name, plusMoney)
                            this.totalMoney += plusMoney;
                        }
                        if (choice2 == 5) {
                            let money = +input.question('Nhập số tiền cần nhập thức ăn');
                            this.totalMoney -= money;
                        }
                        if (choice2 == 6){
                            Main.start()
                        }

                    }

                }
            }
            if (choice == 3) {
                Main.start()
            }
        }
    }
}