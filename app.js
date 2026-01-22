//Q1//
let age = 28;
let name = 'ごっしー';
let greet = '私のニックネームは' + name + 'です。年齢は' + age + '歳です。'
console.log(greet)

//Q2//
let template = 'JavaScript'
let secondtemplate = 'PHP'
let thirdtemplate = 'Ruby'
let fourthtemplate = 'Python'
let fifthtemplate = 'Go'
let templateText = `私の好きな言語は${template}です。次は${fourthtemplate}を勉強してみたいです。`;
console.log(templateText);

//Q3//
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4//
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);
//Q5//
console.log(((playerList[0].age) + (playerList[1].age) + (playerList[2].age)) / 3);

//Q6//
function sayHello(){
  console.log('Hello');
}
sayHello();

const sayWorld = function() {
  console.log('World');
};
sayWorld();

//Q7//
user = {birthday:'2000-09-27'};
user = {sayHello:'Hello!'}
console.log(user.sayHello);

//Q8//
let calc = {};
calc.add = function(x, y) {
  console.log(x + y);
  };

calc.subtract = function(x, y) {
  console.log(x - y);
}

calc.multiply = function(x, y) {
  console.log(x * y);
}

calc.devide = function(x, y) {
  console.log(x / y);
}
  calc.add (3, 4);
  calc.subtract (15, 5);
  calc.multiply (7, 7); 
  calc.devide (25, 5);

//Q9//
function remainder(x, y) {
  let result = (x % y);
  return result;
}
  const result = remainder(5, 3);
  console.log('5' + 'を' + '3' + 'で割った余りは' + result + 'です。');

//Q10//
// function foo() {
// // let x = 1;
// }
// console.log(x);
// 
// 上記でコンソールに 1 が表示されない理由
// 関数の中で変数（x = 1）が定義されているため、関数の外から呼び出そうとしても
// スコープの有効範囲外になるから。
// しかし、関数の外で定義した変数は関数の中からでも参照することができるため、
// 表記法を変えることでコンソールに 1 を表示させることができる。
// Q10 正答例
function foo2() {
 let x = 1
 return x;
}

let result1 = foo2();
console.log(result1);

// ↓応用問題
// Q1
let random= Math.floor(Math.random() * 10);
console.log('0～9の乱数 => ', random);

// Q2-1
function output() {
  console.log('これはコールバック関数の実行です');
}

setTimeout(function() {
  console.log('Hello World!');
  output();
}, 3000);

// Q2-2
function printName(firstName, formatter) {
  console.log(formatter(firstName));
}

const addIntro = (name) => '私の名前は' + name + 'です。';
printName('池田', addIntro);

// Q3
let num =-1;

if (num > 0) {
  console.log('num is greater than 0');
}else if (num === 0) {
  console.log('num is 0');
}else if (num < 0) {
  console.log('num is less than 0');
}

// Q4
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push (i);
}
console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let item of mixed) {
  if (typeof item !== 'number') {
    console.log('not number');
  } else if (item % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}