export default class Character {
  
  constructor(level, health) {
    this.attack
    this.defence
    this.level = level
    this.health = health
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1
      this.attack *= 1.2
      this.defence *= 1.2
      this.health = 100
    } else {
        return 'error'
    }
  }
}

