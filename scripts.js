$(document).ready(function () {
    
   function makeNewPosition($container) {
        var nh = Math.random() * 98,
            nw = Math.random() * 98;
        return [nh, nw];

    }

    function animateDiv( ) {

        $( ".cursor" ).each(function( i ) {
            var newq = makeNewPosition($(this).parent()),
                speed = Math.random() * 5000;

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
            animateDiv();//  your code here
                if (--i) laLoop(i);
            }, 3000);
        })(9);
    });
