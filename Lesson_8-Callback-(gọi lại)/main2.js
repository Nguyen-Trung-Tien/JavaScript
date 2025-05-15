// chữa bài
// 1. forEach
Array.prototype.forEach2 = function (callback) {
    for (var index in this) { // Kiểm tra hàm prototype được định nghĩa có nằm trong mảng hay ko
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}
var courses = [
    "JavaScrip",
    "Java",
    "C",
    "RUBY"
];
var courses = new Array(100);
courses.push("C#", "JS", "NodeJS");


courses.forEach2(function (course, index, array) {
    console.log(course, index, array);
});


// 2. Filter

Array.prototype.filter2 = function (callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}
var courses2 = [
    {
        name: "JavaScrip",
        coin: 100,
        isFinished: true
    },
    {
        name: "Java",
        coin: 200,
        isFinished: true
    },
    {
        name: "C",
        coin: 3000,
        isFinished: false
    }
];

var freeCourses = courses2.filter2(function (course, index, array) {
    return course.coin < 700;
});
console.log(freeCourses);

// Some
Array.prototype.some2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
}


var isFree = courses2.some2(function (course, index, array) {
    return course.isFinished;
});
console.log(isFree);


// every
Array.prototype.every2 = function (callback) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (!callback(this[index], index, this)) {
                return false;
            }
        }
    }
    return true;
}


var result = courses2.every2(function (course, index, array) {
    return course.isFinished;
});
console.log(result);


// reduce

Array.prototype.reduce2 = function (callback, initialValue) {
    var accumulator = initialValue;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            accumulator = callback(accumulator, this[index], index, this);
        }
    }
    return accumulator;
}


var totalCoin = courses2.reduce2(function (accumulator, course) {
    return accumulator + course.coin;
}, 0);
console.log(totalCoin);