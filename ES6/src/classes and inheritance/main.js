"use strict"

console.log("Hello world");
// class declartion
class User {
    constructor(username, email){ // use constructor keyword to build class properties
        this.username = username;
        this.email = email;
    }

    // add methods to class
    register(){
        console.log(this.username, "is now registered");
    };

    giveEmail(){
        console.log(this.username, "has email", this.email);
    };

    // use keyword static to create static methods

    static countUsers(){
        console.log("Number of users", 50);
    };
};

// create new user object
let U1 = new User("Superman", "clark@gmail.com");
//call methods
U1.register();
U1.giveEmail();

// use the class name only to call static methods
User.countUsers();

// Inheritance
// use the extends keyword to inherit classes

class Member extends User {
    constructor(username, email, membership){
        //use the super keyword to set the constuctor of class User into class Memeber
        super(username, email);
        this.membership = membership;
    };

    confirmMembership(){
        if (this.membership === true) {
            console.log(this.username, "is a member");
        }else {
            console.log(this.username, "is not a member");
        }
    }
};

let M1 = new Member("Bruce", "batman@yahoo.com", true);
// call method in class member
M1.confirmMembership();
// call method in class user because it inherits member
M1.register();
