// Задание 1
var i = 1;
var y = 2;

var res = false;
console.log(i);
for (i = 2; i < 100; i++) {
    y = 2;
    while (y < i) {
        if (i % y == 0) res = true;
        if (res) break;
        ++y;
    }
    if ((!res) || (i < 4)) console.log(i);
    res = false;
}

// Задание 2

var str1 = ' - Нечетное число';
var str2 = ' - Четное число';
var num = 0;
console.log(num + 'Это ноль');
do {
    if (num == 0) console.log(num + '- Это ноль');
    else if (num % 2 == 0) console.log(num + str2);
    else console.log(num + str1);
    ++num;
} while (num < 11);

//Задание 3
for (i = 0; i < 10; console.log(i++));

//Задание 4
var string = 'x';
for (i = 0; i < 20; i++) {
    console.log(string);
    string += 'x';
}
