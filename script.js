function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1, .line h2", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;

      setInterval(function () {
        if (grow < 100) {
          grow++;
          h5timer.innerHTML = grow;
        } else {
          h5timer.innerHTML = "100";
        }
      }, 30);
    },
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 3.4,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    ease: Power4,
    duration: 0.5,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
    y: 140,
    stagger: 0.2,
  });
}
loadingAnimation();

document.addEventListener("mousemove", function (e) {
  // var crsr = document.querySelector("#crsr");
  // crsr.style.left = e.pageX + "px";
  // crsr.style.top = e.pageY + "px";
  gsap.to("#crsr", {
    left: e.x,
    top: e.y,
    duration: 0.2,
    ease: "power1.out",
  });
});

Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
  skew: true,
  strength: 200,
  speed: 2,
  magnetStrength: 10,
  magnetRadius: 80
});