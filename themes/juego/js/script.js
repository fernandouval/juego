/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
    $( document ).ready(function(e){
        //alert('READY');
        var myVar=setInterval(function(){timer()},1000);
        function timer()
        {
            var time=new Date();
            var t=time.toLocaleTimeString();
            document.getElementById("time").innerHTML=t;
        }
        function dragStart(ev) {
            ev.dataTransfer.effectAllowed='move';
            ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
            ev.dataTransfer.setDragImage(ev.target,0,0);
            var drag_time=timer();
            return true;
        }
        function dragEnter(ev) {
            event.preventDefault();
            return true;
        }
        function dragOver(ev) {
            return false;
        }
        function dragDrop(ev) {
            var src = ev.dataTransfer.getData("Text");
            ev.target.appendChild(document.getElementById(src));
            ev.stopPropagation();
            return false;
        }
        function EnterHandler(event) {
            var time=new Date();
            //DataTransfer dt = event.dataTransfer;
            var t=time.toLocaleTimeString();
            document.getElementById("time").innerHTML=t;
        }
    });

// Place your code here.


})(jQuery, Drupal, this, this.document);
