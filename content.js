
$(document).ready(function () {
    $("body html").css({"height":"100%", "margin":"0"});
    var url = chrome.extension.getURL('cursor.ani');
    $( "html" ).append( "<div id='container'><img src ='
        background-image:url('chrome-extension://__MSG_@@extension_id__/fakecursor.png');' class='cursor'></div> ");
    $("#container").css({"min-height":"100%", "background-color": "aqua",  "max-height":"100%", "max-width":"100%"});
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
