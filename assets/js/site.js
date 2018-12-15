'use strict';
(function(){
  // Check whether browser can work with the DOM
  if (typeof(document.querySelector)==='undefined') {
    return;
  }

  // Run JS once DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    var navigation = document.querySelector('#navigation');
    var nav_bar = document.querySelector('#nav-bar');
    // nav_heading will be prepended to navigation and will consist of anchor
    // tag menu_list for opening/closing menu at smaller screen sizes
    var nav_heading = document.createElement('h2');
    var menu_list = document.createElement('a');
    // Change 'nojs' class for each html document to 'js'
    document.querySelector('html').className = 'js';
    menu_list.textContent = 'Menu';
    menu_list.setAttribute('id', 'menu-button');
    menu_list.setAttribute('href', '');
    menu_list.classList.add('visible');
    // menu_list's visible class is shown at smaller screen sizes, and has
    // display: none at larger screen sizes
    nav_heading.append(menu_list);
    navigation.insertBefore(nav_heading, nav_bar);
    menu_list.addEventListener('click', function(e) {
      nav_bar.classList.toggle('visible');
      // Show/hide the menu links when menu is clicked
      e.preventDefault();
    });
  });

})();
