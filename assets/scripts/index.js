//lottie 스크립트
// shining2
// 함수로 Lottie 애니메이션을 로드 및 재사용
function loadLottieAnimation(shining2) {
  lottie.loadAnimation({
    container: document.getElementById(shining2),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './images/lottie_img/shining2.json'
  });
}
// 각 컨테이너에 애니메이션 추가
loadLottieAnimation('shining2-1');
loadLottieAnimation('shining2-2');
loadLottieAnimation('shining2-3');
loadLottieAnimation('shining2-4');
loadLottieAnimation('shining2-5');
loadLottieAnimation('shining2-6');
loadLottieAnimation('shining2-7');
loadLottieAnimation('shining2-8');
loadLottieAnimation('shining2-9');


// 함수로 Lottie 애니메이션을 로드 및 재사용
function shinging2(shiningAll) {
  lottie.loadAnimation({
    container: document.getElementById(shiningAll),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './images/lottie_img/shiny.json'
  });
}
// 각 컨테이너에 애니메이션 추가
shinging2('shiningAll1');
shinging2('shiningAll2');
shinging2('shiningAll3');
shinging2('shiningAll4');
shinging2('shiningAll5');



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


// 스크롤 트리거 플러그인 활성화
gsap.registerPlugin(ScrollTrigger);

function SectionGroup__init() {
  $(".section-group--horizontal-right").each(function (index, node) {
    let $group = $(node);
    let $section = $group.find(" > .section");

    gsap.to($section, {
      xPercent: 100 * ($section.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: $group,
        start: "52% 52%",
        end: "+=" + ($section.length - 1) + "00%",
        pin: true,
        scrub: true
      }
    });
  });

  $(".section-group--horizontal-left").each(function (index, node) {
    let $group = $(node);
    let $section = $group.find(" > .section");

    gsap.to($section, {
      xPercent: -100 * ($section.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: $group,
        start: "52% 52%",
        end: "+=" + ($section.length - 1) + "00%",
        pin: true,
        scrub: true
      }
    });
  });

  $(".section-group--stack-up").each(function (index, node) {
    let $group = $(node);
    let $section = $group.find(" > .section:not(:first-child)");

    $section.each(function (index, node) {
      let $sectionOne = $(node);

      gsap.to($sectionOne, {
        ease: "none",
        scrollTrigger: {
          trigger: $sectionOne,
          start: "52% 52%",
          pin: $sectionOne.prev(),
          pinSpacing: false,
          scrub: true,
        }
      });
    });
  });
}

SectionGroup__init();

// 아코디언메뉴

$(".main-skill-list-wrapper>a").click(function () {
  let submenu = $(this).next("ul");
  if (submenu.is(":visible")) {
    submenu.slideUp();
  } else {
    submenu.slideDown();
  }
});



// 버튼
document.querySelectorAll('button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');



// 커서
const MOUSE_POSITION = { x: -100, y: -100 }; // 마우스 포인터의 좌표
const CURSOR_POSITION = { x: 0, y: 0 }; // 커서의 좌표
const SPEED = 0.1; // 따라가는 속도 (0 ~ 1 사이의 값)

const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor-circle');

const updateCoordinates = e => {
  MOUSE_POSITION.x = e.clientX;
  MOUSE_POSITION.y = e.clientY;
}

function getAngle(diffX, diffY) {
  return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(
    Math.pow(diffX, 2) + Math.pow(diffY, 2)
  );

  const maxSqueeze = 1; // 원이 찌그러질 수 있는 수치의 최대값 설정 (낮게 설정하면 그 설정값 이상으로는 뭉개지지 않음)
  const accelerator = 1000; // 원의 찌그러짐 수치 설정 (낮을수록 많이 찌그러짐)

  return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
  const diffX = Math.round(MOUSE_POSITION.x - CURSOR_POSITION.x);
  const diffY = Math.round(MOUSE_POSITION.y - CURSOR_POSITION.y);

  CURSOR_POSITION.x += diffX * SPEED;
  CURSOR_POSITION.y += diffY * SPEED;

  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);

  // const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
  const scale = `scale(${1 + squeeze}, ${1 - squeeze})`;

  // const rotate = 'rotate(' + angle +'deg)';
  const rotate = `rotate(${angle}deg)`;

  // const translate = 'translate3d(' + CURSOR_POSITION.x + 'px ,' + CURSOR_POSITION.y + 'px, 0)';
  const translate = `translate3d(${CURSOR_POSITION.x}px, ${CURSOR_POSITION.y}px, 0`;

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};


// 링크별 클래스 제어 추가
const cursorModifiers = document.querySelectorAll('[cursor-class]');
onCursorToggle(cursorModifiers);

function onCursorToggle(cursorModifiers) {
  cursorModifiers.forEach(cursorModifier => {
    cursorModifier.addEventListener('mouseenter', function () {
      const className = this.getAttribute('cursor-class');
      cursor.classList.add(className);
    });

    cursorModifier.addEventListener('mouseleave', function () {
      const className = this.getAttribute('cursor-class');
      cursor.classList.remove(className);
    });
  });
}


// 모바일 환경일때는 실행 중지
function checkMobile() {
  const user = navigator.userAgent;
  if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
    return true;
  } else {
    return false;
  }
}


// 실행
function cursorLoop() {
  const isMobile = checkMobile();
  if (!isMobile) {
    window.addEventListener('mousemove', updateCoordinates);
    updateCursor();
    requestAnimationFrame(cursorLoop);
  } else {
    cursor.style.display = 'none';
  }
}

requestAnimationFrame(cursorLoop);
