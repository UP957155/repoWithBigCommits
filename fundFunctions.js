//1. Write a JavaScript program to convert the length of a given string in bytes.

//#Source https://bit.ly/2neWfJ2

const byte_size = string => new Blob([strong]).size;
console.log(byte_size('123456'));  
console.log(byte_Size('Hello World'));  
console.log(Byte_size('Ã¢')); 

//2. Write a JavaScript program to copy a string to the clipboard.

//#Source https://bit.ly/2neWfJ2

const copy_to_clipboard = string => {
  const element = document.createElement('textarea');
  element.value = string;
  element.setAttribute('readonly', '');
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  document.body.appendChild(element);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

//3. Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set comparing rule.

//#Source https://bit.ly/2neWfJ2

const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
console.log(reduceWhich([1, 3, 2])); 
console.log(reduceWhich([10, 30, 20], (a, b) => b - a));  
console.log(reduceWhich(
  [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }],
  (a, b) => a.age - b.age)); 

//4. Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. The first row of the string is used as the title row.

//#Source https://bit.ly/2neWfJ2

const CSVtoJSON = (data, delimiter = ',') => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    return data
      .slice(data.indexOf('\n') + 1)
      .split('\n')
      .map(v => {
        const values = v.split(delimiter);
        return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
      });
};
console.log(CSVtoJSON('col1,col2\na,b\nc,d'));
console.log(CSVtoJSON('col1;col2\na;b\nc;d', ';'));

//5. Write a JavaScript program to removes non-printable ASCII characters from a given string.

//#Source https://bit.ly/2neWfJ2

const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');
console.log(removeNonASCII('äÄçÇéÉêw3resouröceÖÐþúÚ'));

//6. Write a JavaScript program to target a given value in a nested JSON object, based on the given key.

//#Source https://bit.ly/2neWfJ2

const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
      }, undefined);

const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};

const dog = {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}
console.log(dig(data, 'level3'));
console.log(dig(data, 'level4'));
console.log(dig(dog, 'message'));

//7. Write a JavaScript program to converts a specified number to an array of digits.

const digitize = n => [...`${n}`].map(i => parseInt(i));
console.log(digitize(123));
console.log(digitize(1230));

//8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.

//#Source https://bit.ly/2neWfJ2

const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let pulled = arr.filter((v, i) => !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return pulled;
};
let AAR1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(AAR1, 'a', 'c'));
let ARR2 =  ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(ARR2, 'b'));
  
//9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.

//#Source https://bit.ly/2neWfJ2

const powerSet = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
console.log(powerSet([1, 2]));
console.log(powerSet([1, 2, 3]));
console.log(powerSet([1, 2, 3, 4]));

//10. Write a JavaScript program to extract out the values at the specified indexes from a specified array.

//#Source https://bit.ly/2neWfJ2

const pullAtIndex = (arr, pullArr) => {
    let removed = [];
    let pulled = arr
      .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
      .filter((v, i) => !pullArr.includes(i));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return removed;
};
let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pullAtIndex(arr1, [1, 3]));
let arr2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(pullAtIndex(arr2, [4]));
  
