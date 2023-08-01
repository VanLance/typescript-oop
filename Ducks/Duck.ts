export default class Duck{
  static className: string = 'Duck'
  
  constructor(protected wrappedAge: number){
    this.wrappedAge = wrappedAge
  }

  get age(): number {
    return this.wrappedAge
  }
  
  set age(value: number) {
    this.wrappedAge = value > 0 ? value : this.wrappedAge

    // if(value > 0){
    //   this.wrappedAge = value
    // }
  }

  quack():void{
    console.log('Duck Quack')
  }

}
const duck = new Duck(3)

console.log(duck.age)

duck.age = 4

console.log(duck.age)

console.log(Duck.className)

duck.quack()