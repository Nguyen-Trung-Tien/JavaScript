// for

console.log('============== for')
var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'C'
];

var arraylength = myArray.length;
for (var i = 0; i < arraylength; i++) {
    console.log(myArray[i]);
}

console.log('=============== for/in')

// for/int
var myLanguages = [
    'Java',
    'Javascript',
    'Ruby',
    'C'
]

for (var key in myLanguages) {
    console.log(myLanguages[key])
}

console.log('=============== for/in')

// dùng for/in tách thành các ký tự

var myString = 'JavaScript';

for (var key in myString) {
    console.log(myString[key])
}

console.log('============= for/of')
// for/of

var myString2 = 'Java'

for (var value of myString2) {
    console.log(value)
}

// lấy giá trị value của object
var myInfo = {
    name: 'Nguyen van a',
    Age: 20,
    email: 'Ac@example.com',
};

for (var value of Object.values(myInfo)) {
    console.log(value);
}


console.log('============== While')
// while


while (i <= 10) {
    i++;
    console.log(i)
};

console.log('============== Do/While')
// do/while
var i = 0; // kiểm tra nạp tiền
var isSuccess = false;
do {
    i++;
    console.log('nap tien lan' + i);
    if (true) {
        isSuccess = true
    }
} while (!isSuccess && i < 3);


console.log('============== Break')
// break: thoát khỏi vòng lập

for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i >= 5) {
        break;
    }
}



console.log('============== Continue')
// continue: bỏ qua điều kiện
for (var i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }

    console.log(i);
}


console.log('============== Nested Loop')
// vòng lặp lòng nhau
var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]

];

for (var i = 0; i < myArray.length; i++) {

    for (var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j]);
    }
}