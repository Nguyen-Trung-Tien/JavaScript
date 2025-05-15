// Cách tạo

var array1 = [1, 2, 3, 4, 5]; //cách 1
var languages = new Array(
    "Java",
    "JS",
    "PHP",
    "C#",
    "C++",
    "C",
    "Python"
); //cách 2

console.log(array1);
console.log(languages);

// Methods Array

// toString
console.log(languages.toString());

// Join
console.log(languages.join(" - "));

// Pop
console.log(languages.pop());

// Push
console.log(languages.push("Java", "JS", "PHP", "{}"));

// Shift    
console.log(languages.shift());

// Unshift
console.log(languages.unshift("Angular", "React"));

// Splicing
languages.splice(1, 1, "Dart");
console.log(languages);

// Concat
var languages1 = ["Java", "JS", "PHP", "C#"];
var languages2 = ["C++", "C", "Ruby", "Python"];
console.log(languages1.concat(languages2));

// Slicing
console.log(languages1.slice(1, 3));

// ọbject

var object = {
    name: "A",
    age: 18,
    address: "VN"
};
console.log(object);


console.log("===================");
//forEach()

var courses = [
    {
        id: 1,
        name: "Java",
        coin: 100,
    },
    {
        id: 2,
        name: "JS",
        coin: 0,
    },
    {
        id: 3,
        name: "PHP",
        coin: 300,
    },

    {
        id: 4,
        name: "C",
        coin: 0,
    },
    {
        id: 5,
        name: "C#",
        coin: 200,
    },

    {
        id: 6,
        name: "C#",
        coin: 300,
    }
]

// forEach()
courses.forEach(function (courses, index) {
    console.log(index, courses);

});

// every()

var isfree = courses.every(function (courses, index) {
    return courses.coin === 0;
});

console.log(isfree);

// some()
var isfree2 = courses.some(function (courses, index) {
    return courses.coin === 0;
});
console.log(isfree2);
// find()
var course = courses.find(function (courses, index) {
    return courses.name === "JS";
});
console.log(course);

// filter
var listCourse = courses.filter(function (courses, index) {
    return courses.name === "C#";
});
console.log(listCourse);


console.log("=================== Map()");
// map()
var courseHandler = function (courses, index) {
    return {
        id: courses.id,
        name: 'khóa học' + courses.name,
        coin: 'giá' + courses.coin,
    };
}

var newCourse = courses.map(courseHandler);
console.log(newCourse);