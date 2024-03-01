
var course = {
    name: 'Javascript',
    coin: 300
}

// if (course.coin > 0) {
//     console.log(`${course.coin} Coin`);
// } else {
//     console.log('Miễn phí')
// }

var result = course.coin > 0 ? `${course.coin} Coin` : 'Miễn phí';
console.log(result)
