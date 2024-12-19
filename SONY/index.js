// a href="#" 속성 없애기
$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});



// header
let lastScrollTop = 0;
const header = document.querySelector('.gnb');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add('hidden');
  }
  else {
    header.classList.remove('hidden');
  }

  lastScrollTop = scrollTop;
});




gsap.registerPlugin(ScrollTrigger);

// main-word
function animateText(selector) {
  document.querySelectorAll(selector).forEach(word => {
    word.innerHTML = word.textContent
      .split('')
      .map(char => `<span class="char">${char}</span>`)
      .join('');
  });

  gsap.utils.toArray(selector).forEach(txt => {
    const chars = txt.querySelectorAll('.char');
    gsap.timeline({
      scrollTrigger: {
        trigger: txt,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
    })
      .fromTo(
        chars,
        { opacity: 0, y: 50 },
        { opacity: 1, y: -50, duration: 1, ease: "power1.inOut", stagger: 0.1 }
      )
      .to(chars, {
        y: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.1,
      });
  });
}

animateText('.rolled');


// Vue 애니메이션
const vueAni = gsap.timeline({
  scrollTrigger: {
    trigger: '.wordsony-wrapper',
    start: '20% 40%',
    end: '70% 50%',
    scrub: 1,
  },
});

const moveElements = ['.vue .vue-wrapper', '.vue .vue-inner'];

gsap.utils.toArray(moveElements).forEach((elem, idx) => {
  vueAni.to(
    elem,
    {
      y: () => {
        const mainSony = document.querySelector('.main-sony');
        const mainSonyRect = mainSony.getBoundingClientRect();
        const elemRect = elem.getBoundingClientRect();
        return mainSonyRect.top + mainSonyRect.height / 2 - elemRect.top - elemRect.height / 2;
      },
      rotate: -360,
      scale: 0.1,
      ease: "expoScale(0.5,7,none)",
      duration: 0.5,
      backgroundColor: '#fff',
    },
    0
  );
});

// Main-Sony 
const mainSonyAni = gsap.timeline({
  scrollTrigger: {
    trigger: '.main-sony',
    start: 'top top',
    end: '+=100%',
    scrub: true,
    pin: true,
    pinSpacing: true,
  },
});

// Vue 고정 및 가로로 이동
const vueScrollAni = gsap.timeline({
  scrollTrigger: {
    trigger: '.main-sony',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    pin: '.vue',
    pinSpacing: false,
  },
});

vueScrollAni
  .to('.vue', {
    x: 100,
    duration: 20,
  })
  .to('.vue .vue-wrapper', {
    scale: '15',
    duration: 5,
    ease: 'linear',
  });

// Sony-Img 반대 방향 이동
const sonyImgAni = gsap.timeline({
  scrollTrigger: {
    trigger: '.main-sony',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
});

sonyImgAni.to('.sony-img', {
  x: -150,
});

/* 
vueAni.eventCallback('onComplete', () => {
  mainSonyAni.play();
}); */


// main-create
gsap.fromTo(
  ".title-up span",
  { y: "-200%" },
  {
    y: "0%",
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".create",
      start: "top 80%",
      end: "50% bottom",
      toggleActions: "play none none none",
    },
  }
);

// 영상 
const maxWidth = "80%";
const minWidth = "5%";
const secNumbers = [1, 2, 3, 4, 5];

// 숫자
function activateSection(index) {
  const $sections = $(".mov .mov-wrapper .sub-mov");
  const $activeSection = $sections.eq(index - 1);

  $(".mov .mov-num .sec-num").html(
    [index, ...secNumbers.filter((num) => num !== index)]
      .map((num) => `${num}<br>`)
      .join("")
  );

  $sections
    .removeClass("toggle-btn")
    .css("width", minWidth);
  $activeSection
    .addClass("toggle-btn")
    .css("width", maxWidth);
}

activateSection(3);

$(".mov .mov-wrapper .sub-mov").on("click", function () {
  activateSection($(this).index() + 1);
});


// main-mov
gsap.fromTo(
  ".mov",
  {
    width: "0%",
  },
  {
    width: "100%",
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".mov",
      start: "top 60%",
      end: "bottom 50%",
      toggleActions: "play none none none",
    },
  }
);


// main-camera
gsap.timeline({
  scrollTrigger: {
    trigger: ".camera",
    start: "top 30% ",
    end: "bottom bottom",
    toggleActions: "play none none play",
  },
}).fromTo(
  '.camera .camera-bg',
  {scale : 0},
  {scale : 1, duration: 0.3 })
  .fromTo(
    '.camera .camera-info h2',
    {opacity: 0, y : 150},
    {opacity: 1,y : 0, duration: 0.5}
  ) .fromTo(
    '.camera .camera-info p',
    { opacity: 0, y : 100},
    {opacity: 1, y : 0, duration: 0.3}
  ).fromTo(
    '.camera .camera-info .btn',
    { opacity: 0, x : 100},
    { opacity: 1, x : 0, duration: 0.3}
  )


// TECHNOLOGY, INNOVATION
gsap.fromTo(
  ".tec .title span",
  { y: "20vw" },
  {
    y: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".tec",
      start: " 60% 20%",
      end: "top bottom",
    },
  }
);


// sony-story

gsap.registerPlugin(TextPlugin)
const tl = gsap.timeline({repeat:-1, repeatDelay:1, yoyo:true});
tl.to(".sony-story .stroy1", {duration: 4, text:" 소니의 정신인 창의성과 이를 구현하는 실현 능력, 상상하는 모든 것을"}),tl.to(".sony-story .stroy2", {duration: 4, text:" 실제로 만들 수 있다는 믿음으로 전에 없던 흥미로운 사용자 경험을"}),tl.to(".sony-story .stroy3", {duration: 4, text:" 제공하기 위한 SONY의 여행은 앞으로도 계속 됩니다."})

// curiosity
gsap.fromTo(
  ".main-curiosity .title",
  { y: "10vw" , opacity : 0},
  {
    y: "0%",
    opacity : 1,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".main-curiosity",
      start: "bottom bottom",
      end: "50% 50%",
      toggleActions: "play none none none",
    },
  }
);

// sony-founder & sony-policy 

gsap.fromTo(
  ".sony-founder img",
  { width : 0},
  {
    width : '100%',
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".sony-founder",
      start: "top 60%",
      end: "50% 50%",
      toggleActions: "play none none none",
    },
  }
);

gsap.fromTo(
  ".sony-policy  img",
  { width : 0},
  {
    width : '100%',
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".sony-policy ",
      start: "top 60%",
      end: "50% 50%",
      toggleActions: "play none none none",
    },
  }
);
gsap.fromTo(
  "footer .footer-sony .sony-ani",
  { y : 100 , opacity : 0},
  {
    y : 0,
    opacity : 1,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "footer .footer-sony .sony-ani",
      start: "top 60%",
      end: "bottom bottom",
      toggleActions: "play none none none",
    },
  }
);