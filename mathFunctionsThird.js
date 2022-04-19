//1. Write a JavaScript function to cast a square root of a number to an integer.

function sqrtToInt(num){
    return parseInt(Math.sqrt(num)+"");
};
console.log(sqrtToInt(17));

//2. Write a JavaScript function to round a number to a specified number of digits and strip extra zeros (if any).

//var a = -2.1240000;
//var a = 0.0000009999999;
//var a = 1.000002000;
//var a = -1.5555555;
//var a = 9.0001110;
var a = 2.1234000;

var result = parseFloat(a.toFixed(4));
console.log(result);

//3. Write a JavaScript function that Convert Roman Numeral to Integer.

function romToInt(str1) {
    if(str1 == null) return -1;
    var num = charToInt(str1.charAt(0));
    var pre, curr;
    
    for(var i = 1; i < str1.length; i++){
    curr = charToInt(str1.charAt(i));
    pre = charToInt(str1.charAt(i-1));
    if(curr <= pre){
    num += curr;
    } else {
    num = num - pre*2 + curr;
    }
    }
    
    return num;
};
    
function charToInt(c){
    switch (c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
    }
};
console.log(romToInt('XXVI'));
console.log(romToInt('CI'));

//4. Write a JavaScript function to calculate degrees between 2 points with inverse Y axis.

function pointDirection(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
};
console.log(pointDirection(1, 0, 12, 0));
console.log(pointDirection(1, 0, 1, 10));

//5. Write a JavaScript function that Convert an integer into a Roman Numeral in javaScript.

function intToRom(num) {
    if (typeof num !== 'number') 
        return false; 
    
    var digits = String(+num).split(""),
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
    "","I","II","III","IV","V","VI","VII","VIII","IX"],
    roman_num = "",
    i = 3;
    while (i--)
    roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
    return Array(+digits.join("") + 1).join("M") + roman_num;
};
console.log(intToRom(27));

//6. Write a JavaScript function to make currency math (add, subtract, multiply, division etc.).

var n1 = '$40.14';
var n2 = '$22.58';
var regP = /[^0-9.-]+/g;

console.log(parseFloat(n1.replace(regP, '')) + parseFloat(n2.replace(regP, '')));
console.log(parseFloat(n1.replace(regP, '')) - parseFloat(n2.replace(regP, '')));
console.log(parseFloat(n1.replace(regP, '')) * parseFloat(n2.replace(regP, '')));
console.log(parseFloat(n1.replace(regP, '')) / parseFloat(n2.replace(regP, '')));

//7. Write a JavaScript function to calculate the nth root of a number.

function nthRoot(x, n)
   {
    ng = n % 2;
    if((ng == 1) || x<0)
       x = -x;
    var r = Math.pow(x, 1 / n);
    n = Math.pow(r, n);
  
    if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
      return ng ? -r : r; 
   }
console.log(nthRoot(64, 2));
console.log(nthRoot(64, -2));

//8. Write a JavaScript function to create a UUID identifier.

function createUUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
};
console.log(createUUID());

//9. Write a JavaScript function to convert a positive number to negative number.

function posToNeg(num){
    return -Math.abs(num);
};
console.log(posToNeg(15));

//10. Write a JavaScript function to round up an integer value to the next multiple of 5.

function intRound5(num){
    return Math.ceil(num/5)*5;
}

console.log(intRound5(32));
console.log(intRound5(137));
console.log(intRound5(142));