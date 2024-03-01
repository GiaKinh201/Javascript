var courses = [
    {
        name: 'Javascrip',
        coin: 680,
        isFinite: true,
    },
    {
        name: 'Ruby',
        coin: 860,
        isFinite: true,
    },
    {
        name: 'HTML, CSS',
        coin: 980,
        isFinite: false,
    }
];

Array.prototype.every2 = function(callback) {
    var output = true
    for (var i in this) {
        if(this.hasOwnProperty(i)) {
            var result = callback(this[i], i, this)
            if (!result) {
                output = false
                return output;
            }
        }
    }
    return output;
}


var listArray = courses.every2(function(course, index, array) {
    return course.coin > 680
})

console.log(listArray)