document.addEventListener("DOMContentLoaded", function() {
    var modeSwitch = document.getElementById('mode-switch');
    var container = document.querySelector('.container');
  
    modeSwitch.addEventListener('change', function() {
      if (modeSwitch.checked) {
        container.classList.add('dark-mode');
      } else {
        container.classList.remove('dark-mode');
      }
    });
  });
