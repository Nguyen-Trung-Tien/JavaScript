// Math.PI
console.log("======Math.PI======== ");
console.log(Math.PI);


// Math.round()
console.log("======Math.round======== ");
console.log(Math.round(3.5));

// Math.abs()
console.log("======Math.abs======== ");
console.log(Math.abs(-3.5));

// Math.ceil()
console.log("======Math.ceil======== ");
console.log(Math.ceil(3.0001));

// Math.floor()
console.log("======Math.floor======== ");
console.log(Math.floor(3.99));

// Math.random()
console.log("======Math.random======== ");
//  console.log(Math.random());

var random = Math.floor(Math.random() * 100);
var bonus = [
    "quà 1",
    "quà 2",
    "quà 3",
    "quà 4",
    "quà 5",
    "quà 6",
    "quà 7",
    "quà 8",
    "quà 9",
    "quà 10"
];

if (random < 0.5) {
    var rewardIndex = Math.floor(Math.random() * bonus.length)
    console.log(" Chúc mừng bạn đã nhận được" + " " + bonus[rewardIndex]);
}
else {
    console.log("Chúc may mắn lần sau!")
}

// Math.min()
//console.log("======Math.min======== ");
//console.log(Math.min(0, 3, 5, 1, 2, 4));

// Math.max()
//console.log("======Math.max======== ");
//console.log(Math.max(0, 3, 5, 1, 2, 4));

