var courses = [
    {
        id: 1,
        name: 'Javascrip',
        coin: 200
    },
    {
        id: 2,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 3,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 200
    },
    {
        id: 5,
        name: 'ReacJs',
        coin: 200
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 100
    }
];

courses.forEach(function(course, index) {
    console.log(index, course)
});

var isFree = courses.every(function(course, index) {
    return course.coin === 0;
});

console.log(isFree);

var isFree = courses.some(function(course, index) {
    return course.coin === 0;
});

console.log(isFree)

var course = courses.find(function(course, index) {
    return course.name === 'Ruby';
});

console.log(course)

var listCourse = courses.filter(function(course, index) {
    return course.name === 'Ruby';
});

console.log(listCourse)

 