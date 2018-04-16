const assert = require('assert');
const Task = require('../task.js');

describe('Task', function() {

  let task;

  beforeEach(function(){

    task = new Task('medium','low', 1000);

  });

  it('Task has difficulty level', function() {
    assert.strictEqual(task.difficulty, 'medium')
  });

  it('task should start off false', function(){
    assert.strictEqual(task.completed, false);
  })

  it('the task should be able to be marked as completed', function(){
    task.taskCompleted();
    assert.strictEqual(task.completed, true);
  })

});
