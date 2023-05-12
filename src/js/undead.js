import Character from "./character";

export default class Undead extends Character {

  constructor (level, health) {
    super(level, health)
    this.setAttackandDefence()
   }

  setAttackandDefence() {
    this.attack = 25;
    this.defence = 25;
  } 
}