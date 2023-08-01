import Duck from './Duck'

class RedHeadedDuck extends Duck{ 

  constructor(public color:string, age: number){
    super(age)
    this.color = color
  }
  
  get age():number{
    return this.wrappedAge - 1
  }

  override quack(): void {
    console.log('Redheaded Duck Quack')
  }
}

const redHeadDuck = new RedHeadedDuck('red',1)