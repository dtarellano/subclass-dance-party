describe('shakyDancer', function() {

  var shakyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shakyDancer = new makeShakyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shakyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node shake', function() {
    sinon.spy(shakyDancer.$node, 'toggle'); //change this away from toggle
    shakyDancer.step();
    expect(shakyDancer.$node.toggle.called).to.be.true; //change this away from toggle
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shakyDancer, 'step');
      expect(shakyDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps);

      expect(shakyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shakyDancer.step.callCount).to.be.equal(2);
    });
  });
});
