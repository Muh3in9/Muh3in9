document.addEventListener("DOMContentLoaded", function() {
    var searchBox = document.getElementById('search-box');
  
    searchBox.addEventListener('click', function() {
      searchBox.classList.add('animated-search');
      setTimeout(function() {
        searchBox.classList.remove('animated-search');
      }, 500);
    });
  });
  