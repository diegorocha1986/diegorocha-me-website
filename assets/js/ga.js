(function(win, doc, undefined){

  'use strict';

  var elements = doc.querySelectorAll('.js-tracking-action');

  [].slice.call(elements).map(function(element){
    var rel = element.title;

    element.addEventListener('click', function(){
      ga('send', 'event', 'social', 'click', rel);
    }, false);
  });

})(window, document);