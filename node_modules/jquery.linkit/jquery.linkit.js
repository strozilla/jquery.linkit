/*
 *name: linkIt
 *author: Keith Knox
 *version: 0.1.0
 *license: MIT
 */


 (function($){
   $.fn.linkIt = function(options){
    var settings = $.extend({
      href : null,
      text : null,
      target: '_self'
    },options);

      //validation
      if (settings.href == null){
        console.log('You need an href for linkIt to work.')
      }

      return this.each(function(){
        var object = $(this);

        if (settings.text == null) {
            settings.text = object.text();
        }

        object.wrap('<a target = "'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
      });
   }


 }(jQuery));
