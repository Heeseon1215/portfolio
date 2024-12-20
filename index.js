// a href="#" 속성 없애기
$('a[href="#"]').on('click', function (e) {
  e.preventDefault()
});


// lottie 스크립트
const arrow = lottie.loadAnimation({
  container: document.getElementById('arrow'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './images/lottie_img/arrow.json'
});

const shinigLine = lottie.loadAnimation({
  container: document.getElementById('shinigLine'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './images/lottie_img/shiny_line.json'
});

const shinig = lottie.loadAnimation({
  container: document.getElementById('shinig'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './images/lottie_img/shiny.json'
});

const mouse = lottie.loadAnimation({
  container: document.getElementById('mouse'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './images/lottie_img/mouse.json'
});

const emotion = lottie.loadAnimation({
  container: document.getElementById('emotion'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './images/lottie_img/emotion.json'
});

const rabbit = lottie.loadAnimation({
  container: document.getElementById('rabbit'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './images/lottie_img/rabbit.json'
});

const rabbit2 = lottie.loadAnimation({
  container: document.getElementById('rabbit2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './images/lottie_img/rabbit2.json'
});


// project-list
const listItems = document.querySelectorAll(".project-list li");
const wrappers = document.querySelectorAll(".project-wrapper ul");

listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    listItems.forEach(li => li.classList.remove("active"));
    item.classList.add("active");

    wrappers.forEach(wrapper => wrapper.classList.remove("active"));

    if (wrappers[index]) {
      wrappers[index].classList.add("active");
    }
  });
});


// 아코디언 메뉴
$(".sk-list>a").click(function () {
  let submenu = $(this).next("ul");
  if (submenu.is(":visible")) {
    submenu.slideUp();
  } else {
    submenu.slideDown();
  }
});

