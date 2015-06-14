var tabs = document.querySelectorAll('paper-tab');

Array.prototype.forEach.call(tabs, function(tab) {
  tab.addEventListener('focus', function(event) {
    console.log('Focus:' + event.target.getAttribute('name'))
  });
}, this);
