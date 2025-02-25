// funciones anteriores

function randomNum(num) {
  return Math.floor(Math.random() * num);
}

function selectRandom(array) {
  return array[randomNum(array.length)];
}

// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    console.log(
      `Has recibido ${damage} puntos de daño: tu vida ahora es ${this.health}`
    );
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    return this.armyAttack("viking");
  }
  saxonAttack() {
    return this.armyAttack("saxon");
  }
  armyAttack(army) {
    if (army === "viking") {
      let randomSaxon = selectRandom(this.saxonArmy);
      let randomViking = selectRandom(this.vikingArmy);
      let result = randomSaxon.receiveDamage(randomViking.attack());
      if (randomSaxon.health <= 0) {
        let posArr = this.saxonArmy.indexOf(randomSaxon);
        this.saxonArmy.splice(posArr, 1);
      }
      return result;
    } else if (army === "saxon") {
      let randomSaxon = selectRandom(this.saxonArmy);
      let randomViking = selectRandom(this.vikingArmy);
      let result = randomViking.receiveDamage(randomSaxon.attack());
      if (randomViking.health <= 0) {
        let posArr = this.vikingArmy.indexOf(randomViking);
        this.vikingArmy.splice(posArr, 1);
      }
      return result;
    }
  }
  showStatus() {
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    } else if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    }
  }
}

