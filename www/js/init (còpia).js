// Arxiu init.js + index.js
 
(function($){
  $(function(){
 
    $('.sidenav').sidenav();
    $('.tabs').tabs({ "swipeable": true });

     $(document).ready(function() {
            $('.fixed-action-btn').floatingActionButton();
        });

        if ($(".carousel").length > 0) {
            $(".carousel")[0].style = "height: 100%;";
        }

        $(document).ready(function() {
            $('.tap-target').tapTarget();
            $('.tap-target').tapTarget('open');
        });
 
  }); // end of document ready
})(jQuery); // end of jQuery name space
 
 
document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}