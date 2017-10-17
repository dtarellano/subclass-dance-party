$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var topRandom = Math.random();
    var leftRandom = Math.random();
    
    var randomFix = function(topOrLeft) {
      if (topOrLeft > .9) {
        topOrLeft = 0.9;
      } else if (topOrLeft < .1) {
        topOrLeft = 0.1;
      }
      return topOrLeft;
    };
    
    var top = $('body').height() * randomFix(topRandom);
    var left = $('body').width() * randomFix(leftRandom);
    
    var interval = Math.random() * 200;

    var dancer = new dancerMakerFunction(top, left, interval);
    $('#dancefloor').append(dancer.$node);
    debugger;
    window.dancers.push(dancer);
  });
  
  $('.lineUpButton').on('click', function(event) { 
    var top = 400;
    var left = 20;
    
    for (var i = 0; i < window.dancers.length; i++) {
      left += 30;
      window.dancers[i].top = top;
      window.dancers[i].left = left;
      window.dancers[i].setPosition(this.color, top, left);
    }
  });
});

