AOS.init();

let imageElements = document.querySelectorAll(".hover-effect");

imageElements.forEach((element) => {
  const height = element.clientHeight;
  const width = element.clientWidth;

  element.addEventListener("mousemove", handleMove);

  function handleMove(e) {
    const xVal = e.layerX;
    const yVal = e.layerY;

    const yRotation = 20 * ((xVal - width / 2) / width);

    const xRotation = -20 * ((yVal - height / 2) / height);

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
  slidesPerView: 2,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 40,
});

const roadmapSwiper = new Swiper("#roadmap_slider", {
  slidesPerView: 3,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 40,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="roadmap-pagination ${className}"></div>`;
    },
  },
});

let totalDistribution = new CountUp("total_distribution", 0, 100000000000);
let buySell = new CountUp("buy_sell", 0, 8, "", 5, {
  suffix: "%",
  enableScrollSpy: true,
});

totalDistribution.start();
buySell.start();
