class Car{
  constructor(private _make:string, private _model:string, public nickname:string){}
  
  get make():string {return this._make}
  
  get model():string{
      //maybe we want to validate that there is a model before we send it back
      if(this._model){
          return this._model
      }else{
          return "No Model Data"
      }
  }
}

class PokemonRatings{
  constructor(anyth:string){ 
    this.anyth = anyth
  }
  [pokemonName:string]:string
}
let myRatings= new PokemonRatings('pika')
myRatings["Arceus"]='2'
console.log(myRatings)