var courses = [
    {
        name: 'Javascrip',
        coin: 680,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 860,
        isFinish: false
    },
    {
        name: 'HTML, CSS',
        coin: 980,
        isFinish: true
    }
];

Array.prototype.some2 = function(callback) {
    for (var i in this) {
        if(this.hasOwnProperty(i)){
            if(callback(this[i], i, this)) {
                return true;
            }
        } 
    }
    return false
}

var listArray = courses.some2(function(course, index, array) {
    return !course.isFinish;
})
console.log(listArray)
