'use strict';
const uuid = require('uuid').v4;

class Food {
  constructor() {
    this.db = [];
  }

  read(id) {
    if (id) {
        return this.db.find((f) => f.id === id);
    } else {
        return this.db;
    }
}


create(obj) {
    const food = {
        id: uuid(),
        data: obj,
    };
    this.db.push(food);
    return food;
}

  

update(id, obj) {
    for (let i = 0; i < this.db.length; i++) {
        let f = this.db[i];
        if(f.id === id) {
            this.db[i].data = obj;
            return this.db[i];
        } 
    }
}
  

delete(id) {
    console.log(id);

    this.db = this.db.filter((food) => food.id !== id);
    return this.db;
}
}

module.exports = Food;
