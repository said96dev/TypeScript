"use strict";
const names = ['Said', 'Edaa'];
names[1].split('');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is Done');
    }, 2000);
});
promise.then((data) => {
    data.split('');
});
//Generic functions
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const mergeObj = merge({ name: 'Max' }, { age: '30' });
const mergeObj2 = merge({ name: 'Max', hobbies: ['Sport'] }, { age: '30' });
console.log(mergeObj.age);
console.log(mergeObj2);
function countAndPrint(element) {
    let descriptionText = 'Got no Value.';
    if (element.length > 0)
        descriptionText = 'Got ' + element.length + ' value';
    return [element, descriptionText];
}
console.log(countAndPrint('String'));
function extractAndConver(obj, key) {
    return obj[key];
}
console.log(extractAndConver({ name: 'MAX' }, 'name'));
//Generic class
class DateStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const textStorage = new DateStorage();
textStorage.addItem('SAID');
textStorage.addItem('MAX');
textStorage.removeItem('SAID');
console.log(textStorage.getItem());
