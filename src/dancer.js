// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.color = 'red';
  this.top = top;
  this.left = left;
  this.size = 10;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<div class="dancer"></div>');
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition(this.color, this.top, this.left);
};

makeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  var thisContext = this;
  setTimeout(function() {
    thisContext.step();
  }, this.timeBetweenSteps);
}; 

makeDancer.prototype.setPosition = function(color, top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  var styleSettings = {
    background: color,
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};