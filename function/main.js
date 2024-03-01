function showDialog() {
    alert('Hello')
}

function writeLog(message, message2) {
    console.log(message)
    console.log(message2)
}

writeLog('Test message')
writeLog(123)
writeLog(['java','PHP'])
writeLog(123,'Kinh')

function writeLogArgument() {
    var myString ='';

    for(var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}

writeLogArgument('log 1', 'log 2', 'log 3', 5, 6)

// các loại function
showMessage()
showMessage2()
function showMessage() {
    console.log('Text 1')
}

var showMessage2 = function testName() {
    console.log('Text 22222')
}
 

