// cách tạo callback

function myFunction(param) {
    if (typeof param == "function") {
        param("Xin chao");
    }
}

function myCallback(Value) {
    console.log("Value: ", Value);
}

myFunction(myCallback);

// ===============================================================================


// định nghĩa ra map2 vì map2 chưa được định nghĩa trong JS
Array.prototype.map2 = function (callback) {
    var arrayLentgh = this.length;
    var output = [];
    for (var i = 0; i < arrayLentgh; i++) {
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
};

var Courses = [
    "JavaScrip",
    "Java",
    "C",
    "RUBY"
];

var htmls = Courses.map2(function (Courses) {
    return `<h2>${Courses}</h2>`;
});

console.log(htmls.join(''))


// chữ bài 


var Courses2 = [
    "JavaScrip",
    "Java",
    "C",
    "RUBY"
];
for (var index in Courses2) {
    console.log(Courses2[index]);
}

