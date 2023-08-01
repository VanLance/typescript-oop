import Duck from './Duck';

class MallardDuck extends Duck {
  static className = 'MallardDuck';

  constructor(public color: string, age: number) {
    super(age);
    this.color = color;
  }

  set age(newAge: number) {
    if (newAge >= 2) {
      this.wrappedAge = newAge;
    } else console.log("invalid age")
  }

  override quack(): void {
    console.log("Mallard Duck Quack")
  }
}

const mallardDuck = new MallardDuck('brown', 4);

console.log(MallardDuck.className);

console.log(mallardDuck.age = 1);

mallardDuck.quack()