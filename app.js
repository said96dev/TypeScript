"use strict";
let user1;
user1 = {
    name: 'SAID',
    age: 44,
    greet(phrase) {
        console.log(phrase + '' + user1.name);
    },
};
user1.greet('Hey there i am ');
