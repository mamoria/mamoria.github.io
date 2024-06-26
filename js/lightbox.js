document.addEventListener("DOMContentLoaded", function() {
  function openLightbox(img) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var largeSrc = img.getAttribute('data-large-src');

    if (largeSrc) {
      lightboxImg.src = largeSrc;
    } else {
      lightboxImg.src = img.src;
    }

    lightbox.style.display = 'block';
    lightbox.classList.add('fade-in'); // Add fade-in class to apply animation
  }

  var lightbox = document.getElementById('lightbox');
  var closeBtn = document.getElementsByClassName('close')[0];

  closeBtn.onclick = function() {
    lightbox.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == lightbox) {
      lightbox.style.display = 'none';
    }
  }

  // Export the openLightbox function to be used in the HTML
  window.openLightbox = openLightbox;
});
