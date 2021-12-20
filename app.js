"use strict";


// ======задание № 1=======

//пример 1
let a = 1, b = 1, c, d;

//переменной 'c' присваевается значение переменной 'a'
// значение переменной 'c' инкрементируется (увеличивается) на еденицу
c = ++a;

alert(c); // ответ: 2

//пример 2
//переменной 'd' присваевается значение переменной 'b'
d = b++;

// значение переменной 'd' возвращает старое значение
alert(d); //ответ: 1

//пример 3
//переменной 'a' присваевается значение переменной 'a' равное 2 из первого примера
// значение переменной 'a' инкрементируется (увеличивается) на еденицу и становится равное 3
// 2 + 3 вернёт 5 
c = 2 + ++a;

alert(c); //ответ: 5

//пример 4
//переменной 'b' присваевается значение переменной 'b' равное 1 из первого примера
// значение переменной 'b' инкрементируется (увеличивается) на еденицу и становится равное 2
// 2 + 2 вернёт 5 
d = 2 + b++;

alert(d); //ответ: 4

// значение переменной 'a' равно 3 (после инкрементирывания (увеличения на еденицу) из примера 3)

alert(a); //3

// значение переменной 'b' равно 3 (после инкрементирывания (увеличения на еденицу) из примера 4)
alert(b); //3

// ======задание № 2=======
function task2(){
let a = 2;

let x = 1 + (a *= 2);
// значение переменной '_a' равно 4, значение переменной 'x' равно 5
return x;
}
task2();
// ======задание № 3=======

function task3(a, b){

if(a >= 0 && b >= 0){
    return a - b;
}else if(a < 0 && b < 0){
     return a * b;
}else{
    return a + b;
}
   
}
console.log(task3(8, 6));

// ======задание № 4=======

function sum(a, b) {
    return a + b;
}
function difference(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

// ======задание № 5=======
/**
 *вазвращает арифметические операции
 @param {number} arg1 значение первого аргумента
 @param {number} arg2 значение второго аргумента
 @param {string} operation "+", "-", "*", "/" значение оператора
 */
function mathOperation(arg1, arg2, operation) {
a = arg1;
b = arg2;
    switch(operation){
        case "+":
        return  sum(a, b);
        case "-":
        return  difference(a, b);
        case "*":
        return  mult(a, b);
        case "/":
        return  divide(a, b);
    }

}
alert (mathOperation(4, 8, "+"));

// ======задание № 6=======
/**
 *вазвращает сумму депозита
 @param {number} depositSum  значение первого аргумента
 
 */
function putDeposit() {
let depositSum = prompt("Введите сумму которую надо положить на счет");
if (depositSum % 10==0 || depositSum % 10==5 || depositSum % 10==6 || depositSum % 10==7 || depositSum % 10==8 || depositSum % 10==9 ||  (depositSum > 10 && depositSum < 21) || ((depositSum.length >=3)&& depositSum.charAt(depositSum.length - 2)==1)) {
    alert(`Ваша сумма в ${depositSum} рублей успешно зачислена`)
}else if (depositSum % 10==1 || ((depositSum.length >=3)&& depositSum.charAt(depositSum.length - 2)!==1)){
    alert(`Ваша сумма в ${depositSum} рубль успешно зачислена`)
}else if ((depositSum > 1 && depositSum < 5) || depositSum % 10==2 || depositSum % 10==3 || depositSum % 10==3 || depositSum % 10==4){
    alert(`Ваша сумма в ${depositSum} рубля успешно зачислена`)
}else{
    alert("введите корректную сумму");
}

}
putDeposit();