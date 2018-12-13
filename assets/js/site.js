'use strict';
(function(){
  // Check whether browser can work with the DOM
  if (typeof(document.querySelector)==='undefined') {
    return;
  }

  // Run JS once DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Change 'nojs' class for each html document to 'js'
    document.querySelector('html').className = 'js';

  });

})();
