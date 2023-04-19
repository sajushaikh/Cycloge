AOS.init();

let imageElements = document.querySelectorAll(".hover-effect");

imageElements.forEach((element) => {
  const height = element.clientHeight;
  const width = element.clientWidth;

  element.addEventListener("mousemove", handleMove);
  element.addEventListener("click", handleMove);

  function handleMove(e) {
    const xVal = e.layerX;
    const yVal = e.layerY;

    const yRotation = 30 * ((xVal - width / 2) / width);

    const xRotation = -30 * ((yVal - height / 2) / height);

    const string =
      "perspective(500px) scale(1) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    element.style.transform = string;
  }

  element.addEventListener("mouseout", function () {
    element.style.transform =
      "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  });

  element.addEventListener("mousedown", function () {
    element.style.transform =
      "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
  });

  element.addEventListener("mouseup", function () {
    element.style.transform =
      "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
  });
});

const powerSwiper = new Swiper("#power_slider", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 40,

  breakpoints: {
    962: {
      slidesPerView: 2,
    },
  }
});

const roadmapSwiper = new Swiper("#roadmap_slider", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 40,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="roadmap-pagination ${className}"></div>`;
    },
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

let totalDistribution = new CountUp("total_distribution", 0, 100000000000);
let buySell = new CountUp("buy_sell", 0, 8, "", 5, {
  suffix: "%",
  enableScrollSpy: true,
});

totalDistribution.start();
buySell.start();
