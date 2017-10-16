var makeShakyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeShakyDancer.prototype = Object.create(makeDancer.prototype);
makeShakyDancer.prototype.constructor = makeShakyDancer;

makeShakyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.animate({'left': '+10%'}, 'slow', 'swing', function() {
    $(this).animate({'left': '-5%'}, 'slow');
  });
};