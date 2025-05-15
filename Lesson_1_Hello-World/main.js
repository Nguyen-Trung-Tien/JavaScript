var fullname = "hello world";
var age = 20;
//1: alert: hiển thị hộp thoại thông báo trên trình duyệt
//alert(fullname);
//alert(age);

//2: console.log: in ra consoler trình duyệt
console.log(123);
console.log(1 + 2);
console.log(age);

//3: confirm: hiển thị thông báo xác nhận
confirm("Yêu cầu xác nhận");

// 4: prompt: hiển thị thông báo nhập giá trị
prompt("Nhập tuổi của bạn");

// 5: setTimeout: dạng nâng cao
setTimeout(function () {
    console.log("hiển thị thông báo trên trình duyệt");
    alert("hiển thị thông báo trên trình duyệt");
}, 3000);

// 6: setInterval: thực hiện liên tục đoạn code sau một khoảng thời gian
setInterval(function () {
    console.log("hiển thị thông báo trên trình duyệt" + Math.random());
    alert("hiển thị thông báo trên trình duyệt");
}, 3000);



