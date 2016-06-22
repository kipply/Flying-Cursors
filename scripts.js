$(document).ready(function() {
    (function myLoop (i) {          
        setTimeout(function () {   
                generateCursor();
            animateDiv();//  your code here                
                if (--i) myLoop(i);
            }, 3000)
        })(30);    
    });
function generateCursor(){
    
        $( ".a" ).clone().appendTo( "#container" );
}

function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    $container = ($container || $(window))
    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv( ) {

  $( ".a" ).each(function( i ) {
    var newq = makeNewPosition($(this).parent());
    var oldq = $(this).offset();
    var speed = getSpeed([oldq.top, oldq.left], newq);

    $(this).animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv();
    });
  });
}



function getSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = Math.random() * (.05 - 1) + 1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}