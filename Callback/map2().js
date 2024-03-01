var courses = [
    'Javascript',
    'PHP',
    'Ruby',
];

Array.prototype.map2 = function(callBack) {
    var output = [];
    var arrayLength = this.length
    for (var i = 0; i < arrayLength; i++) {
        var result = callBack(this[i], i);
        output.push(result);
    }
    return output;
}




var htmls = courses.map2(function(course) {
    return `<h2>${course}</h2>`
})

console.log(htmls.join(''))

document.querySelector('h1').innerHTML = htmls.join('')



