
let myMap = new Map<string, number>();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);
console.log(myMap.get('two')); 
console.log(myMap.has('four')); 
myMap.delete('two');
myMap.forEach(function(value, key) {
    console.log(key + " => " + value);
});

