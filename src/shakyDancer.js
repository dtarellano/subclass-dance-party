var makeShakyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeShakyDancer.prototype = Object.create(makeDancer.prototype);
makeShakyDancer.prototype.constructor = makeShakyDancer;

makeShakyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  var position1 = this.left + 10;
  position1 = position1.toString() + 'px';

  var position2 = this.left - 5;
  position2 = position2.toString() + 'px';

  this.$node.animate({'left': position1}, 'fast', 'swing', function() {
    $(this).animate({'left': position2}, 'fast');
  });
};