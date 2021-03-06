var makeShakyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.color = 'green';  
  this.setPosition(this.color, this.top, this.left);
  this.$node.addClass('shaky');
};

makeShakyDancer.prototype = Object.create(makeDancer.prototype);
makeShakyDancer.prototype.constructor = makeShakyDancer;

makeShakyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  var position1 = this.left + 10;
  position1 = position1.toString() + 'px';

  var position2 = this.left - 5;
  position2 = position2.toString() + 'px';

  this.$node.animate({'left': position1}, 100, 'swing', function() {
    $(this).animate({'left': position2}, 100, 'swing');
  });
};