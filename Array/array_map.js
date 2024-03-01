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
function courseHandler(course, index, originArray) {
    // return {
    //     id: course.id,
    //     name: `Khóa học: ${course.name}`,
    //     coin: course.coin,
    //     coinText: `Giá: ${course.coin}`,
    //     index: index,
    //     originArray: originArray,
    // };

    return `<h2>${course.name}</h2>`
}

var newCourses = courses.map(courseHandler);
console.log(newCourses.join(''));

