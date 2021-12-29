"use strict";


// ======задание № 1=======
/**
 *вазвращает чётноу либо нечётное число
 
 */
let text1 = "это ноль";
let text2 = "чётное число";
let text3 = "нечётное число";

 function getNums() {
     for(let i = 0; i <= 10; i++){
         if(i === 0){
console.log(i + "-" + text1)
         }if(i%2 === 0 && i !== 0){
            console.log(i + "-" + text2)
     }if(i%2 !== 0){
        console.log(i + "-" + text3)
 }
 }
 }
 getNums();
// ======задание № 2=======
const post = {

    author: "John", //вывести этот текст
    
    postId: 23,
    
    comments: [
    
    {
    
    userId: 10,
    
    userName: "Alex",
    
    text: "lorem ipsum",
    
    rating: {
    
    likes: 10,
    
    dislikes: 2 //вывести это число
    
    }
    
    },
    
    {
    
    userId: 5, //вывести это число
    
    userName: "Jane",
    
    text: "lorem ipsum 2", //вывести этот текст
    
    rating: {
    
    likes: 3,
    
    dislikes: 1
    
    }
    
    },
    
    ]
    
    };

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// ======задание № 3=======

const products = [

    {
    
    id: 3,
    
    price: 200,
    
    },
    
    {
    
    id: 4,
    
    price: 900,
    
    },
    
    {
    
    id: 1,
    
    price: 1000,
    
    },
    
    ];
products.forEach(discounts);

/**
 *вазвращает скидку 15%
 @param {number} item значение  аргументов price
 @param {number} discount значение скидки 
 */
function discounts(item) {
 let discount = item.price*15/100;
 console.log(discount);
}
// ======задание № 4======
const products2 = [

    {
    
    id: 3,
    
    price: 127,
    
    photos: [
    
    "1.jpg",
    
    "2.jpg",
    
    ]
    
    },
    
    {
    
    id: 5,
    
    price: 499,
    
    photos: []
    
    },
    
    {
    
    id: 10,
    
    price: 26,
    
    photos: [
    
    "3.jpg"
    
    ]
    
    },
    
    {
    
    id: 8,
    
    price: 78,
    
    },
    
    ];
/**
 *вазвращает цену, продукта имеющего фото
 @param {number} item массив цен по возрастанию
 */
products2.filter(fun);

function fun(){
    for (let i = 0; i < products2.length; i++){
        if(products2[i].photos && products2[i].photos.length > 0){
        console.log(products2[i]);
        
        }
}
}


    function result() {
        let item = [];
        for (let i = 0; i < products2.length; i++){
            if(products2[i].photos && products2[i].photos.length > 0){
            item.push(products2[i].price)
            }
            
        }
        console.log(item.sort(function(a,b){
if (a > b){
    return 1;
}
if (a < b){
    return -1;
}
        }));
    }
   result();
  
   // ======задание № 5 ======
    // вывод чисел от 0 до 9, не используя тело цикла
    for (let i = 0; i < 10; console.log(i), i++){
    }

   // ======задание № 6 ======
function mountain(n) {
    let height = n;
    let star = "*";
    let str = "";
    for (let i = 0; i < height; i++){
str += star;
console.log(str)
    }
}
mountain(20);