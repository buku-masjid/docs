
// the purpose of this project is to try to write the least code possible for both HTML and CSS

    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

  function staticStars(container = document.body) {
    var rand,
      stars = [];
    var containerRect = container === document.body ? 
      { width: window.innerWidth - 10, height: window.innerHeight - 10 } :
      container.getBoundingClientRect();
    var intViewportWidth = containerRect.width;
    var intViewportHeight = containerRect.height;

    // Ensure container has relative positioning for absolute children
    if (container !== document.body && getComputedStyle(container).position === 'static') {
      container.style.position = 'relative';
    }

    for (let i = 0; i <= 200; i++) {
      rand = getRandomNumber(0, 3); // for random size of each star. I am also using it for animation duration, which is defined in CSS

      stars[i] = document.createElement("div");
      stars[i].id = "star-" + i;
      stars[i].style.width = rand + "px";
      stars[i].style.height = rand + "px";
      stars[i].style.borderRadius = "50%";
      stars[i].style.backgroundColor = "white";
      stars[i].style.position = "absolute";
      stars[i].style.top = Math.random() * intViewportHeight + "px"; // random postion from top
      stars[i].style.left = Math.random() * intViewportWidth + "px"; // random postion from left
      stars[i].style.animation =
        "glow " + rand + 1 + "s linear infinite alternate"; // random animation duration

      container.appendChild(stars[i]);
    }
  }

function fallingStars(container = document.body) {
  var stars = document.createElement("div"); // creating new div with every function run gives smoother animation
  var containerRect = container === document.body ? 
    { width: window.innerWidth + 10, height: window.innerHeight + 10 } :
    container.getBoundingClientRect();
  var intViewportWidth = containerRect.width;
  var intViewportHeight = containerRect.height;
  var randDuration = getRandomNumber(1, 4); // random animation (falling stars) duration
  var randLength = getRandomNumber(40, 100); // random length of the falling star
  var randPosition = Math.random() * intViewportWidth; // random horizontal location eveytime the function is run
  var motion = 0; // to give motion to animation
  var interval = setInterval(animation, randDuration); // for animation interval. randDuration will give each star a random fall time

  // Ensure container has relative positioning for absolute children
  if (container !== document.body && getComputedStyle(container).position === 'static') {
    container.style.position = 'relative';
  }

  stars.id = "falling-star";
  stars.style.width = randLength + "px";
  stars.style.height = "1.5px";
  stars.style.backgroundImage =
    "linear-gradient(to right, white 40%, transparent)";
  stars.style.transform = "rotate(-45deg)";
  stars.style.position = "absolute";
  stars.style.top = "-10px";
  stars.style.right = randPosition + "px";

  container.appendChild(stars);

  function animation() {
    if (motion == intViewportHeight + 500) {
      // to clear the interval if the star has already fallen (covered enough distance to be out of the screen)
      clearInterval(interval);
    } else {
      motion++;
      stars.style.top = motion + "px";
      stars.style.right = randPosition + motion + "px";
    }
  }

  setTimeout(() => fallingStars(container), 3000); // for this function to run every 3 seconds
}

// Auto-initialize with default behavior (append to body)
//staticStars();
fallingStars();
