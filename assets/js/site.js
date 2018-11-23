'use strict';
(function(){
  // Check whether browser can work with the DOM
  if (typeof(document.querySelector)==='undefined') {
    return;
  }

  // Run JS once DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    var courseworkPage = document.querySelector('#coursework');

    // Change 'nojs' class for each html document to 'js'
    document.querySelector('html').className = 'js';

    addCourseToggler();

    // One document-wide event listener on Coursework page instead of an event
    // listener for each course
    courseworkPage.addEventListener('click', function (e) {
      var course; // Represents which course button was pressed
      if (e.target.matches('.toggler')) {
        course = "#" + e.target.parentElement.id;
        showSummary(course);
      }
    });

    // Adds a button to view/hide course summaries on Course page
    function addCourseToggler() {
      // NodeList containing all course sections
      var courses = document.querySelectorAll('.course');
      var course;
      var link;
      var a;
      var a_text;

      // Adds an anchor tag to each course section
      for (var i = 0; i < courses.length; i++) {
        course = courses.item(i);
        link = "#" + course.id;
        a_text = document.createTextNode("Toggle Course Summary");
        a = document.createElement("a");
        a.setAttribute("href", link);
        a.appendChild(a_text);
        a.className = "toggler";
        course.appendChild(a);
      }
    }

    function showSummary(id) {
      var course = document.querySelector(id);
      var course_summary;
      var course_elements = course.childNodes;

      // Find the ul node that toggles the course summaries
      for (var i = 0; i < course_elements.length; i++) {
        if (course_elements[i].className === "course-summary" || course_elements[i].className === "course-summary visible") { course_summary = course_elements[i];
        }
      }

      course_summary.classList.toggle('visible');
    }

  });

})();
