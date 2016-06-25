$(document).ready(function () {
    
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
        var newq = makeNewPosition($(this).parent()),
            speed = Math.random() * 5000;

        $(this).velocity({
            top: newq[0],
            left: newq[1]
        }, speed, function () {
            animateDiv();
        });
    });
}
    (function myLoop(i) {
        setTimeout(function () {
        $( ".a" ).clone().appendTo( "#container" );
            animateDiv();//  your code here
                if (--i) myLoop(i);
            }, 3000);
        })(8);
    });
