
interface Animal {
    sound: string;
}

function makeSound(animal: Animal) {
    console.log(animal.sound);
}

let duck = { sound: 'Quack' };
let cat = { sound: 'Meow' };

makeSound(duck); 
makeSound(cat); 
