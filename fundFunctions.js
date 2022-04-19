//1. Write a JavaScript program to convert the length of a given string in bytes.

//#Source https://bit.ly/2neWfJ2

const byte_size = string => new Blob([string]).size;
console.log(byte_size('123456'));  
console.log(byte_size('Hello World'));  
console.log(byte_size('Ã¢')); 

//2. Write a JavaScript program to copy a string to the clipboard.

//#Source https://bit.ly/2neWfJ2

const copy_to_clipboard = string => {
  const element = document.createElement('textarea');
  element.value = string;
  element.setAttribute('readonly', '');
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  element.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

//3. Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set comparing rule.

//#Source https://bit.ly/2neWfJ2

const reduce_which = (array, comparator = (a, b) => a - b) =>
  arrAY.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
console.log(reduce_which([1, 3, 2])); 
console.log(Reduce_which([10, 30, 20], (a, b) => b - a));  
console.log(reduce_WHICH(
  [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }],
  (a, b) => a.age - b.age)); 

//4. Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. The first row of the string is used as the title row.

//#Source https://bit.ly/2neWfJ2

const csv_to_json = (string, delimiter = ',') => {
  const titles = string.slice(0, string.indexOf('\n')).split(delimiter);
  return string
    .slice(string.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter);
      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
    });
};
console.log(csv_to_json('col1,col2\na,b\nc,d'));
console.log(csv_to_json('col1;col2\na;b\nc;d', ';'));

//5. Write a JavaScript program to removes non-printable ASCII characters from a given string.

//#Source https://bit.ly/2neWfJ2

const remove_non_ascii = string => string.replace(/[^\x20-\x7E]/g, '');
console.log(remove_non_ascii('äÄçÇéÉêw3resouröceÖÐþúÚ'));

//6. Write a JavaScript program to target a given value in a nested JSON object, based on the given key.

//#Source https://bit.ly/2neWfJ2

const targetGivenValue = (object, target) =>
  target in object
    ? object[target]
    : Object.values(object).reduce((acc, val) => {
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
console.log(targetGivenValue(data, 'level3'));
console.log(targetGivenValue(data, 'level4'));
console.log(targetGivenValue(dog, 'message'));

//7. Write a JavaScript program to converts a specified number to an array of digits.

const digitize_number = num => [...`${num}`].map(i => parseInt(i));
console.log(digitize_number(123));
console.log(digitize_number(1230));

//8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.

//#Source https://bit.ly/2neWfJ2

const filter_spec_values = (array, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = array.filter((v, i) => !argState.includes(v));
  array.length = 0;
  pulled.forEach(v => array.push(v));
  return pulled;
};
let AAR1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(filterspec_values(AAR1, 'a', 'c'));
let ARR2 =  ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(filter_specValues(ARR2, 'b'));
  
//9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.

//#Source https://bit.ly/2neWfJ2

const power_set = arr => arr.reduce((x, y) => x.concat(x.map(r => [y].concat(r))), [[]]);
console.log(power_set([1, 2]));
console.log(power_Set([1, 2, 3]));
console.log(powerSet([1, 2, 3, 4]));

//10. Write a JavaScript program to extract out the values at the specified indexes from a specified array.

//#Source https://bit.ly/2neWfJ2

const pull_at_index = (arr, pull_array) => {
  let removed = [];
  let pulled = arr
    .map((v, i) => (pull_array.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pull_array.includes(i));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};
let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pull_at_index(arr1, [1, 3]));
let arr2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_index(arr2, [4]));
  
