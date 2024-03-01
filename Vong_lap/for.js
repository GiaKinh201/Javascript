/**
 * 1. for - lặp với điều kiện dừng
 * 2. for/in - lặp qua key của đói tượng
 * 3. for/of - lặp qua value của đối tượng
 * 4. while -lặp khi điều kiện đúng
 * 5. do/while - lặp ít nhất 1 lần, sau đó 
 *              lặp khi điều kiện đúng
 */

var myArray = [
    'JS',
    'PHP',
    'Ruby',
    'Dart',
    'Java',
    'Python',
]

var arrayLength = myArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i])    
}

// For/in loop

var myInfo = {
    name: 'Gia Kính',
    age: 18,
    address: 'Đà Nẵng, VN',
};
var languages = [
    'JS',
    'PHP',
    'Ruby',
]
var myString = 'Javascript'

for (var key in myInfo) {
    console.log(myInfo[key])
}
for (var key in languages) {
    console.log(languages[key])
}
for (var key in myString) {
    console.log(myString[key])
}

// For/of loop

var languages = [
    'JS',
    'PHP',
    'Ruby',
    'Java',
];

for (var value of languages) {
    console.log(value)
}
for (var value of myString) {
    console.log(value)
}

var myInfo = {
    name: 'Gia Kính',
    age: 18,
}

for (var value of Object.values(myInfo)) {
    console.log(value)
}

// While loop

var i = 0;
var myArray = [
    'JS',
    'PHP',
]
while (i < myArray.length) {
    console.log(myArray[i])
    i++;
}

// Do/while loop

var i = 0;

var isSuccess =false;

do {
    i++;
    console.log('Nap the lan ' + i)
    if(true) {
        isSuccess = true;
    }

} while (!isSuccess && i < 3);


// Break & Continue
for (var i = 0; i < 10; i++) {
    
    // if(i > 5) {
        //     break
        // }
        
        if (i%2 !== 0) {
            continue;
        }
        console.log(i)
}

// Vòng lặp lồng nhau 


var myArray = [
    [1, 2],
    [3, 4],
    [5, 6],
]

for (var i= 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j])        
    }
}

// Bài tập

for (var i = 100; i > 0 ; i--) {
    console.log(i)    
}

for (var i = 100; i >= 0; i -=5) {
    console.log(i)
}

