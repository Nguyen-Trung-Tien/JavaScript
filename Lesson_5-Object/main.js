//tạo object

var myObject = {
    name: "Xin chao",
    age: 20,
    address: "Hanoi",
    getName: function () {
        return this.name;
    },
    getAddress: function () {
        return this.address;
    }
}
myObject.email = "ABC@example.com";
//delete myObject.address;
console.log(myObject.getName());
console.log(myObject.getAddress())


// object constructor

function Users(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.LastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return this.firstName + " " + this.LastName;
    }
}

Users.prototype.lastName = "Hello";// định nghĩa prototype
Users.prototype.getLastName = function () {
    return this.lastName;

}

var user1 = new Users("A", 20, "Hanoi");
var user2 = new Users("B", 20, "Hanoi");

console.log(user1);
console.log(user2);


// Date: Đối tượng thời gian

var date = new Date(); // khai báo đối tượng date

var day = date.getDate();
var year = date.getFullYear();

var month = date.getMonth() + 1;
console.log(date.toString());

console.log(day + "/" + month + "/" + year);

// switch case

var date = 9;

switch (date) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");

    default:
        console.log("Not a day");
}