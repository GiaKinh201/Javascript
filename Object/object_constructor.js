
function User(firstName, lastName, avatar) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.avatar = avatar;
     this.getName = function() {
        return `${this.firstName} ${this.lastName}`
     }
}

var author = new User('Gia', 'Kính', 'Avatar');
var user = new User('Vũ', 'Nguyễn', 'Avatar');


author.title = 'List title'
user.comment = 'Line comment'
console.log(author)
console.log(author.className)
console.log(user.getName())


// object prototype

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}
console.log(author.className)
console.log(user.getClassName())
