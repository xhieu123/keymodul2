
import {User} from "../User/User";
import {Main} from "../main";


export class Member {
    static menu() {
        let input = require('readline-sync')
        let choice = -1

        while (choice != 3) {
            console.log("input your choice" +
                "\n 1.Đăng ký " +
                "\n 2.Đăng nhập "+
            "\n 3.Back")
            choice = input.question("let choice")
            if (choice == 1) {
                let usn = input.question("ten dang ki")
                let pass = input.question("nhap mat khau")
                let name = input.question("nhap ten")
                let phoneNumber = input.question("nhap sdt")
                let address = input.question("nhap dia chi")
                let age = input.question("nhap tuoi")
                let money = input.question("nhap tien")
                Main.manager.regis(new User(usn, pass, name, phoneNumber, address, age, money))
            }
            if (choice == 2) {
                console.log("Nhap thong tin dang nhap: ")
                let usn = input.question("ten dang nhap")
                let pass = input.question("nhap mat khau")
                let userLogin = Main.manager.logIn(usn, pass)
                if (userLogin == undefined) {
                    console.log("thong tin dang nhap sai")
                } else {
                    let choice2 = -1
                    while (choice2 != 0) {
                        console.log("Menu quan ly nhan vien : " +
                            "\n 1.Edit" +
                            "\n 2.Delete" +
                            "\n 3.Show" +
                            "\n 4.Back" +
                            "\n 5.LogOut")
                        choice2 = input.question("nhap vao lua chon ")
                        if (choice2 == 1) {
                            let pass = input.question("nhap mat khau")
                            let name = input.question("nhap ten")
                            let phoneNumber = input.question("nhap sdt")

                            Main.manager.editUser(name, pass, phoneNumber)
                        }
                        if (choice2 == 2) {
                            let usndelete = input.question("ten muon xoa")
                            Main.manager.delete(usndelete)
                        }
                        if (choice2 == 3) {
                            Main.manager.show()
                        }
                        if (choice2 == 4){
                            Member.menu()
                        }
                        if (choice2 == 5){
                            let name = input.question("nhap ten ")
                            Main.manager.logOut(name)
                    }

                }}
            }if (choice == 3){
                Main.start()
            }
        }

    }
}

// let input = require('readline-sync')
// let nM = new Main.manager()
// let choice = -1
// while (choice != 3) {
//     console.log("input your choice" +
//         "\n 1.Đăng ký" +
//         "\n 2.Đăng nhập")
//     choice = input.question("let choice")
//     if (choice == 1) {
//         let usn = input.question("ten dang ki")
//         let pass = input.question("nhap mat khau")
//         let name = input.question("nhap ten")
//         let phoneNumber = input.question("nhap sdt")
//         let address = input.question("nhap dia chi")
//         let age = input.question("nhap tuoi")
//         let money = input.question("nhap tien")
//         nM.regis(new User(usn, pass, name, phoneNumber, address, age, money))
//     }
//     if (choice == 2) {
//         console.log("Nhap thong tin dang nhap: ")
//         let usn = input.question("ten dang nhap")
//         let pass = input.question("nhap mat khau")
//         let userLogin = nM.logIn(usn, pass)
//         if (userLogin == undefined) {
//             console.log("thong tin dang nhap sai")
//         } else {
//             let choice2 = -1
//             while (choice2 != 0) {
//                 console.log("Menu quan ly nhan vien : " +
//                     "\n 1.Edit" +
//                     "\n 2.Delete" +
//                     "\n 3.Show")
//                 choice2 = input.question("nhap vao lua chon ")
//                 if (choice2 == 1) {
//                     let usnedit = input.question("ten muon sua")
//                     let usn = input.question("ten dang ki")
//                     let pass = input.question("nhap mat khau")
//                     let name = input.question("nhap ten")
//                     let phoneNumber = input.question("nhap sdt")
//                     let address = input.question("nhap dia chi")
//                     let age = input.question("nhap tuoi")
//                     let money = input.question("nhap tien")
//                     nM.edit(usnedit, new User(usn, pass, name, phoneNumber, address, age, money))
//                 }
//                 if (choice2 == 2) {
//                     let usndelete = input.question("ten muon xoa")
//                     nM.delete(usndelete)
//                 }
//                 if (choice2 == 3) {
//                     nM.show()
//                 }
//             }
//
//         }
//     }
// }