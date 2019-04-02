const sliders = document.querySelectorAll('.project');
  let isDown = false;
  let startX;
  let scrollLeft;

  for(let i = 0; i < sliders.length; i++) {
    const slider = sliders[i]
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;  // stop the fn from running
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });

  }



  // how many images to make a gif?
  var counter = 0;
  var numImages = 91;


  // change this number to make perfect loop gif
  var divider = 2000 / numImages;

  $( "body" ).mousemove(function(e) {

    // convert horizontal position to a number from 0 to 12
    // Y for vertical move, X for horizontal!
    var counter = Math.round(e.pageX / divider);

    if (counter < 10){
      var imgname = "images/profile/profile_0000" + counter + ".png";
    }
    else {
      var imgname = "images/profile/profile_000" + counter + ".png";
    }

    $(".profile img").attr("src",imgname);

  });
