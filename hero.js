const Hero = function(name, health, fav_food){

  this.name = name;
  this.health = health;
  this.fav_food = fav_food;
  this.tasks = [];
}

Hero.prototype.greet = function (){
  return (`Hi! My name is ${ this.name }!`);
}

Hero.prototype.checkFoodValue = function(food) {
  let foodValue =0;
  if(this.checkForFavFood(food)){
    foodValue += food.foodValue * 1.5;
  } else {
    foodValue += food.foodValue;
  }
  return foodValue;
};

Hero.prototype.eat = function (food) {
  let foodValue = this.checkFoodValue(food);
  if(food.poisonValue == true){
    this.heroHealth -= foodValue;
  } else {
    this.heroHealth += foodValue;
  }
};

Hero.prototype.sortTasksByDifficulty = function () {
  this.heroTaskList.sort(function (task_a, task_b) {
    return task_a.taskDifficulty - task_b.taskDifficulty;
  });
};

Hero.prototype.viewCompletedTasks = function (){
  return this.heroTaskList.filter(task => task.taskComplete === true);
};

module.exports = Hero;
