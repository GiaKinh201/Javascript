var courses = [
    {
        name: 'Javascrip',
        coin: 680
    },
    {
        name: 'Ruby',
        coin: 860
    },
    {
        name: 'HTML, CSS',
        coin: 980
    }
];

Array.prototype.filter2 = function(callBack) {
    var output = []
    for (var i in this) {
        if(this.hasOwnProperty(i)) {
            var result =  callBack(this[i], i, this)
            if (result) {
                output.push(this[i])
            }
        }
    }
    return output
}

var listArray = courses.filter2(function(course, index, array) {
    return course.coin > 700;
})

console.log(listArray)