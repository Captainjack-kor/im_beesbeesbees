const Bee = require('./Bee');

class RetiredForagerBee extends Bee{
  // TODO..
  constructor(){
    super(); //상위 constructor()
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    this.treasureChest = [];
  }  

  forage(){
    return 'I am too old, let me play cards instead';
  }
  gamble(el){
    return this.treasureChest.push(el);
  }

}


module.exports = RetiredForagerBee;