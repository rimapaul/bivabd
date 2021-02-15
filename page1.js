var i = 0;
timerId = 0;
window.onload = function() {
  timerId = setInterval(changeImage, 3000);
}

function changeImage() {
  var images = ['url(image2.jpg)', 'url(image3.jpg)', 'url(image4.jpg)', 'url(image5.jpg)', 'url(image6.jpg)', 'url(image1.jpeg)'];
  document.getElementById("background").style.backgroundImage = images[i];
  i++;
  if (i > 5) {
      i = 0;
    }
}