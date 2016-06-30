
$(document).ready(function () {
    //write divs and styles
    $( "body" ).append( "<div id='container'><img style='height: 3%;'' class='cursor' src='https://raw.githubusercontent.com/carolyfisher/Flying-Cursors/master/fakecursor.png''></div> ");
    $("#container").css({"position": "fixed", "z-index" : "1000"});
    $(".cursor").css({"position":"fixed"});

    //generates random position
   function makeNewPosition($container) {
        var y = Math.random() * 98,
            x = Math.random() * 98;
        return [y, x];

    }

    function animateDiv( ) {
        //animates cursors
        $( ".cursor" ).each(function( i ) {
            //pulls position and randomizes a speed
            var newq = makeNewPosition($(this).parent()),
                speed = Math.random() * 5000;
            //velocityJS animation
            $(this).velocity({
                top: newq[0] +'%',
                left: newq[1]+'%'
            }, speed, function () {
                animateDiv();
            });
        });
    }
    (function laLoop(i) {
        setTimeout(function () {
        $( ".cursor" ).clone().appendTo( "#container" );
            animateDiv();
                if (--i) laLoop(i);
            }, 5000); //delay between doubling of cursors
        })(6); //times cursors are doubled
    });
