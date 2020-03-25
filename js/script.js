'use strict';

var number = 5;
console.log(number);

// var leftBorderWidth = 1;
// {
//     let second = 2;
//     console.log(second);
// }

// const p = 3.13;


// var number = 5;
// var string = "Hello!";
// var sum = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};

// console.log(4/0);
// console.log('string'*9);

// let something;
// console.log(something);

// let person = {
//     name: "John",
//     age: 25,
//     isMarried: false
// }

// // console.log(person.name);
// // console.log(person["age"]);

// let arr = ['plum.png' , 'orange.jpg' , 'apple.bmp'];

// // console.log(arr[2]);
// // console.log(arr[0]);

// // // alert("Hi there");
// // let answer = confirm("Are you here?");
// // console.log(answer);

// let answer = +prompt("Есть ли вам 18?", "Да");
// console.log(typeof(answer));


// console.log("arr" + " - object");
// console.log(4 + " - object");

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(incr++); /* постфикс декремент */
console.log(decr--);

// console.log(++incr); /* префикс декремент */
// console.log(--decr);

console.log(5 % 2);

console.log("2" === 2);

let isChecked = false,
    isCLose = false;

// console.log(isChecked && isCLose); /*оператор И - только если все аргумента правдивы */
// console.log(isChecked || isCLose);  /* Оператор Или - если хотя бы один правдивый */
console.log(isChecked || !isCLose); /* ! - отрицание*/