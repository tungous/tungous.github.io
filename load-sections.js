function loadSection(sectionId, url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(sectionId).innerHTML = data;
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadSection('nav-placeholder', 'nav.html');
    loadSection('work-placeholder', 'work-container.html');
  });