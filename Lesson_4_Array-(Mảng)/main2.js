// Tạo và gọi function

function showDialog() {
    console.log("Xin chao");
}

showDialog();

// truyen tham so vao function
function showDialog(name) {
    console.log(name);
}

showDialog("Nguyen Tien");


// Arguments và for of
function writeLog() {
    var myString = " ";
    for (var param of arguments) {
        myString += param + "_ "

    }
    console.log(myString)
}

writeLog("Log1", "log2", "log3");

// return
function tong(a, b) {
    return a + b;
}
var result = tong(4, 5);

console.log(result);