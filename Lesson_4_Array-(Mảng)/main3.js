// map

console.log("=================== Map()");
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


var courseHandler = function (courses, index) {
    return {
        id: courses.id,
        name: 'khóa học' + courses.name,
        coin: 'giá' + courses.coin,
    };
}

var newCourse = courses.map(courseHandler);
console.log(newCourse);

// reduce
console.log("=================== Reduce()");

var totalCoin = courses.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.coin;
}, 0);

console.log(totalCoin);


//Flat - làm phẳng từ mảng Depth array - "màng sâu"

var depthArray = [1, 2, 3, [4, 5], 6, 7, [8, 9, 10]];

var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, [])
console.log(flatArray);



// Lấy đưa vào một mảng mới

var topics = [
    {
        topics: "Front-End",
        courses: [
            {
                id: 1,
                title: "HTML,   CSS",
            },
            {
                id: 2,
                title: "JS",
            },
            {
                topic: "Back-End",
                courses: [
                    {
                        id: 1,
                        title: "PHP",
                    },
                    {
                        id: 2,
                        title: "Java",
                    }
                ],
            }

        ]
    }
];


var newCourses = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses)

}, []);

console.log(newCourses);