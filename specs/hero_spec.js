const assert = require('assert');
const Hero = require('../hero.js');

describe('Hero', function() {

  let hero;

  beforeEach(function() {

    hero = new Hero('Captain Miguel', 100, 'Peppers panini');

  });

  it('Hero can has name', function() {
    assert.strictEqual(hero.name, 'Captain Miguel')
  });

  it('Hero has health', function() {
    assert.strictEqual(hero.health, 100)
  });

  it('Hero has favouite food', function() {
    assert.strictEqual(hero.fav_food, 'Peppers panini')
  });


});
