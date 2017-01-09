"use strict"

// задача 1

var arr = [2, 5, 8, 4, 1, 12];
var myNewArr =  arr.sort(function(a, b){
    return a > b;
})
// задача 2

var text = "The quick brown fox jumps over the lazy dog";
var largeWord = text.split(" ");
var last = largeWord.filter( function (words) {
    return (words.length > 4);
})
console.log(last);

// задача 3
setInterval(function(){
    $('body').append('<p>repetition is fun</p>');
}, 1000);

// задача 4
var showMe = true;
window.document.onload = setInterval(function(){
    if (showMe){
        $('ul > li > img').slideUp();
        showMe = false;
    } else {
        $('ul > li > img').slideDown();
        showMe = true;
    }
}, 2000);

// задача 5

