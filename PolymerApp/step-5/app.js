var tabs = document.querySelectorAll('paper-tab');

var list = document.querySelector('post-list');

Array.prototype.forEach.call(tabs, function(tab) {
  tab.addEventListener('focus', function(event) {
    list.show = event.target.getAttribute('name');
  });
}, this);
