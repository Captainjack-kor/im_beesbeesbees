const Grub = require('./Grub');

class Bee extends Grub {
  // TODO..
  constructor(color,food){
    super(); // super () = 상위클래스에 생성되어있는 값들 가져와서 (변경을하고 싶을때)
    this.age = 5;
    this.color = color;
    this.job = food;

  }

}

module.exports = Bee;
