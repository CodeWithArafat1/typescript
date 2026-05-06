class Animal {
//   name: string;
//   species: string;
//   sound: string;

  constructor(public name: string, public species: string, public sound: string) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} is making sound ${this.sound}`);
  }
}

const dog = new Animal("Tomy", "dog", "Ghew Ghew");
const cat = new Animal("Leo", "Cat", "Meaw Meaw");


dog.makeSound()
cat.makeSound()