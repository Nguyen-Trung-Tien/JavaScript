//cách 1. Khởi tạo chuỗi
var string = "hello world";// chuỗi
//alert(string);
// cách 2: Khởi tạo đối tượng

var fullname = new String("hello world");
console.log(fullname);

//Template string ES6

var lastName = "Tien";
var firstName = "Nguyen";

console.log(`Tôi là: ${firstName} ${lastName}`);

// một số case sử dụng backslash (\): Dùng để thêm dấu vào chuỗi
var str = "   \"Xin chao\ Tôi là Nguyen Tien\"  ";
console.log(str);

// length: kiểm tra độ dài kí tự
var string = "hello JS JS world JS";
console.log(string.length);

// find index: tìm vị trí của kí tự trong chuỗi ( nếu ko tìm thể được kí tự thì trả với -1)
console.log(string.indexOf("d"));// tìm giá trị đầu tiên
console.log(string.lastIndexOf("ld"));// tìm giá trị cuối cùng
console.log(string.search("w")); // tìm kiếm theo biểu thức chính qui

// cut string: Cắt lấy kí tự
console.log(string.slice(0, 5));

// replace: thay thế kí tự
console.log(string.replace("world", " các bạn"));
console.log(string.replace(/JS/g, "các bạn")); // thay thế tất cả từ JS trong chuỗi

// convert to upper case
console.log(string.toUpperCase());

// convert to lower case
console.log(string.toLowerCase());

// trim: loại bỏ khoảng trắng thừa
console.log(string.trim());

// split: chia mảng
var string = "1,2,3,4,5";
console.log(string.split(","));

// get a character by index lấy kí tự theo vị trí
console.log(string[0]);
console.log(string[string.length - 1]);

// toString
var Numbers = 18;
console.log(Numbers.toString());

// toFixed: làm tròn số thập phân
var number = 123.456;
console.log(number.toFixed());


