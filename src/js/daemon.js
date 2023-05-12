import Character from "./character";

export default class Daemon extends Character {

  constructor (level, health) {
    super(level, health)
    this.setAttackandDefence()
   }

  setAttackandDefence() {
    this.attack = 10;
    this.defence = 40;
  } 
}