var sdtKey = 'SDT-VN'



var myInfo = {
    name: 'Gia Kính',
    age: 18,
    address: 'Da Nang, VN',
    [sdtKey]: '0779037326',
    getName: function() {
        return this.name;
    }
};

// Function --> phương thức / method
// others --> thuộc tính / property
myInfo['email-VN'] = 'giakinh201@gmail.com'
delete myInfo.age;

console.log(myInfo)
console.log(myInfo.name)
console.log(myInfo['email-VN'])
console.log(myInfo[sdtKey])
console.log(myInfo.getName())