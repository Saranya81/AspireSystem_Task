var mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2);
console.log(mySet.has(2));
mySet.delete(2);
mySet.forEach(function (item) {
    console.log(item);
});
