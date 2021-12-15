require('mocha')
const chai = require('chai')
const expect = chai.expect
const RetiredForagerBee = require('../../src/es6/RetiredForagerBee')

describe('RetiredForagerBee class functionality', () => {
  var Retired;

  beforeEach(() => Retired = new RetiredForagerBee());

  /*  Overwrite methods from superclass  */

  it('should have an age property that is set to `40`', () => {
    expect(Retired.age).to.equal(40);
  });

  it('should have a job property that is set to `gamble`', () => {
    expect(Retired.job).to.equal('gamble')
  });

  /*  Inherited from superclass  */

  it('should have a color property inherited from `bee` that is set to `grey`', () => {
    expect(Retired.color).to.equal('grey');
  });

  it('should have a food property that is inherited from grub', () => {
    expect(Retired.food).to.equal('jelly');
  });

  it('should have an eat method that is inherited from grub', () => {
    expect(Retired.eat).to.be.a('function');
  });

  /*  New methods and properties  */

  it('should have a `canFly` property that is set `false`', () => {
    expect(Retired.canFly).to.equal(false);
  });

  it('should have a `forage` method that return `I am too old, let me play cards instead``', () => {
    Retired.forage('');
    //expect(Retired.treasureChest).to.have.length(3);
    expect(Retired.forage()).to.equal('I am too old, let me play cards instead');
  });
    //an always winning gamble method that allows the bee to add a treasureto the treasureChest
    
    it('an always winning gamble method that allows the bee to add a treasureto the treasureChest', () => {
        Retired.gamble('pollen');
        Retired.gamble('flowers');
        Retired.gamble('gold');
        expect(Retired.treasureChest).to.have.length(3);
        expect(Retired.treasureChest[0]).to.equal('pollen');
        expect(Retired.treasureChest[1]).to.equal('flowers');
        expect(Retired.treasureChest[2]).to.equal('gold');
    });
});
