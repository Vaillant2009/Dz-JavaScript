let name = prompt("Введіть ваше ім'я:");
alert("Привіт, " + name + "!");

const year = 2026;
let birthYear = Number(prompt("Введіть рік народження:"));
let age = year - birthYear;
alert("Вам " + age + " років.");

let side = Number(prompt("Введіть сторону квадрата:"));
let perimeter = side * 4;
alert("Периметр: " + perimeter);

let radius = Number(prompt("Введіть радіус кола:"));
let area = 3.14 * radius * radius;
alert("Площа кола: " + area);

let distance = Number(prompt("Введіть відстань між містами:"));
let time = Number(prompt("Введіть час у годинах:"));
let speed = distance / time;
alert("Потрібна швидкість: " + speed + " км/год");

const kurs = 0.93;
let dollars = Number(prompt("Введіть долари:"));
let euros = dollars * kurs;
alert("Євро: " + euros);

let flash = Number(prompt("Введіть обсяг флешки в ГБ:"));
let mb = flash * 1024;
let files = Math.floor(mb / 820);
alert("Поміститься файлів: " + files);

let money = Number(prompt("Введіть суму грошей:"));
let chocolate = Number(prompt("Введіть ціну шоколадки:"));
let count = Math.floor(money / chocolate);
let change = money % chocolate;
alert("Шоколадок: " + count + "\nЗдача: " + change);

let number = Number(prompt("Введіть тризначне число:"));
let a = number % 10;
let b = Math.floor(number / 10) % 10;
let c = Math.floor(number / 100);
let reverse = a * 100 + b * 10 + c;
alert("Перевернуте число: " + reverse);

let num = Number(prompt("Введіть ціле число:"));
let result = num % 2 == 0 && "Парне" || "Непарне";
alert(result);
