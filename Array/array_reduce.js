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
var totalCoin = courses.reduce(function(total, course, currentIndex, originArray) {
    return total + course.coin;
}, 0); // initial value

console.log(totalCoin)

// Bài tập

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem)
}, []);

console.log(flatArray)






var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ] 
    },
];

var newCourses = topics.reduce(function(courses, topic) {
    return courses.concat(topic.courses);
}, [])
console.log(newCourses)

var htmls = newCourses.map(function(course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `
})

console.log(htmls.join(''))



