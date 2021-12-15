var Bee = require('./Bee');

var ForagerBee = function () {
    Bee.apply(this);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
}


ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee; //독립접

ForagerBee.prototype.forage = function(el) { 
    this.treasureChest.push(el);
}
/*   
    6) should have a `canFly` property that is set `true`
    7) should have a `treasureChest` property that is set to an empty array `[]`
    8) should have a `forage` method that allows the bee to add a `treasure` to the `treasureChest`
*/

//함수 
// ForagerBee.prototype.canFly = function(){return true;}

module.exports = ForagerBee;
