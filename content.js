
$(document).ready(function () {
//    $("body html").css({"height":"100%", "margin":"0"});
    $( "body" ).append( "<div id='container'><img style='height: 3%;'' class='cursor' src='https://raw.githubusercontent.com/carolyfisher/Flying-Cursors/master/fakecursor.png''></div> ");
    $("#container").css({"position": "fixed", "z-index" : "1000"});
    $(".cursor").css({"position":"fixed"});

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
            }, 5000);
        })(6);
    });
