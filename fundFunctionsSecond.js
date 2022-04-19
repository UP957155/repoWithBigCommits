//1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

//#Source https://bit.ly/2neWfJ2

const object_matches = (object, source) =>
  Object.keys(source).every(key => object.hasOwnProperty(key) && object[key] === source[key]);
console.log(object_matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(object_matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(object_matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false

//2. Write a JavaScript program to generate a random hexadecimal color code.

//#Source https://bit.ly/2neWfJ2

const random_hex_color_code = () => {
  let number = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + number.slice(0, 6);
};
console.log(random_hex_color_code())

//3. Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.

//#Source https://bit.ly/2neWfJ2

const csv_to_array = (data, delimiter = ',', omit_first_row = false) =>
  data
    .slice(omit_first_row ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));

console.log(csv_To_Array('a,b\nc,d')); 
console.log(csvTo_Array('a;b\nc;d', ';')); 
console.log(csv_toArray('head1,head2\na,b\nc,d', ',', true));


//4. Write a JavaScript program to replace the names of multiple object keys with the values provided.

//#Source https://bit.ly/2neWfJ2 
const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
console.log("Original Object");
console.log(obj);
console.log("-------------------------------------");
result = renameKeys({ name: 'firstName', job: 'Actor' }, obj);
console.log("New Object");
console.log(result);

//5. Write a JavaScript program to convert an array of objects to a comma-separated values (CSV) string that contains only the columns specified.

//#Source https://bit.ly/2neWfJ2

const JSONtoCSV = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    )
  ].join('\n');

console.log(JSONtoCSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));
console.log(JSONtoCSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'], ';'));