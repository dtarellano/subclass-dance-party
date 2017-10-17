var makeJumpyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.color = 'blue';  
  this.setPosition(this.color, this.top, this.left);
  
};

makeJumpyDancer.prototype = Object.create(makeDancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;

makeJumpyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  var position1 = this.top - 15;
  position1 = position1.toString() + 'px';

  var position2 = this.top + 30;
  position2 = position2.toString() + 'px';

  this.$node.animate({'top': position1}, 100, 'swing', function() {
    $(this).animate({'top': position2}, 100, 'swing');
  });
};