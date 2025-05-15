// 1.number
var number = 20;
console.log(number);
console.log(typeof number); // kiểm tra dữ liệu 
// 2.string
var string = "hello world";
console.log(string);

// 3.boolean
var isSucsess1 = true;
console.log(isSucsess1);
var isSucsess2 = false;
console.log(isSucsess2);

// 4.undefined
var name;
console.log(name);
var age = undefined;
console.log(age);

// 5.null
var isNull = null;
console.log(isNull);

// 6.symbol
var isSymbol = Symbol("id");
var isSymbol2 = Symbol("id");
console.log(isSymbol == isSymbol2);

// Function
var myfunction = function () {
    console.log("Xin chao");
}
myfunction();

// Object
var object = {
    name: "Xin chao",
    age: 20

}
console.log(object);

// Array
var array = [1, 2, 3, 4, 5];
console.log(array);

