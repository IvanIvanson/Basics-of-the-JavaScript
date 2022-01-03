'use strict'
// задание 1
function makeNumberToObject(number){
    // разбиваем введённую строку на массив
    let arrNumber = number.split('');
    while (arrNumber.length < 3 ){
        arrNumber.unshift(0)
    }

    let objNumber = {}

    if(arrNumber.length > 3 ){
return null;
    }
    else{
        objNumber['сотни'] = +arrNumber[0];
        objNumber['десятки'] = +arrNumber[1];
        objNumber['еденицы'] = +arrNumber[2];
return objNumber;
    }
}
let num = prompt('введите число от 0 до 999');
let obj = makeNumberToObject(num);

if(obj === null){
    alert('вы ввели слишком большое число')
}
else{
    alert(obj['сотни'] + " сотен, " +  obj['десятки'] + " десятков, " + obj['еденицы'] + " единиц");
}

// задание 1.1 в стиле es5

function Product(name, price){
    this.name = name;
    this.price = price;
};

// добовляем в прототип объекта метод make25PercentDiscount

Product.prototype.make25PercentDiscount = function() {
    this.price = this.price - this.price*25/100;
    console.log(this.name, this.price);
};

const discount = new Product('newProduct', 1000);
discount.make25PercentDiscount();


// задание 1.1 в стиле es6
class Product2 {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    // добовляем в прототип объекта метод make25PercentDiscount2
    make25PercentDiscount2() {
        this.price = this.price - this.price*25/100;
        console.log(this.name, this.price);
    }
}
const discount2 = new Product2('newProduct', 200);
discount2.make25PercentDiscount2();

// задание 1.2 в стиле es5

function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
};

// добовляем в прототип объекта метод edit

Post.prototype.edit = function(text) {
    this.text = text;
};

// создаём объект attachPost
function AttachPost(author, text, date) {
Post.call(this, author, text, date);
this.highlighted = false;
}
AttachPost.prototype = Object.create(Post.prototype);
// возвращаем на место свойство конструктора
AttachPost.prototype.constructor = AttachPost;

AttachPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
};
const attach1 = new AttachPost('some Autor', 'some text', new Date());
console.log(attach1.author, attach1.text, attach1.date);

// задание 1.2 в стиле es6

class Post2 {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }
    // добовляем в прототип объекта метод edit
    edit(text) {
        this.text = text;
    }
}
// делаем наследование в новый класс

class AttachPost2 extends Post2{
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false;
    }
    // добовляем новому классу метод makeTextHighlighted 
    makeTextHighlighted(){
        this.highlighted = true;

    }
}
const attach2 = new AttachPost2('some Autor', 'some text', new Date());
console.log(attach2.author, attach2.text, attach2.date);