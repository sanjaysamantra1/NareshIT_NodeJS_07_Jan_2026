console.log('Global ', this); // this = global = {}
let user = {
    firstName: 'Virat',
    lastName: 'Kohli',
    fullName1: function () { // this = user
        console.log(this.firstName, this.lastName);
        console.log(this);
    },
    fullName2: () => { // this = {}
        console.log(this.firstName, this.lastName);
        console.log(this);
    }
}
user.fullName1();  // Virat Kohli
user.fullName2();  // undefined undefined