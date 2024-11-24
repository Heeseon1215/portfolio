// 모바일 토글 버튼

$('header').on('click', function() {
  // header 메뉴 아이콘 클릭 시 toggle-btn이 적용/미적용
  $(this).toggleClass('toggle-btn');


  // 각자의 메뉴를 클릭하면, 버튼은 원래대로, 메뉴는 닫히게
$('.global-menu li').each(function(idx, list) {
    $(list).on('click', function() {
      $('header .menu-icon').removeClass('toggle-btn');
      $('header .menu').removeClass('toggle-menu');
    });
  }); 
 
});

//스크롤이 내려가면 헤더가 사라지고, 스크롤이 올라가면 헤더가 내려옴

    // 이전 스크롤. 브라우저를 열면 바로 읽기 때문에 0
    let prevScroll = window.scrollY;
    console.log('prevScroll', prevScroll)


    $(window).on('scroll', function () {
      let currentScroll = window.scrollY;
      console.log('currentScroll', prevScroll)

      
      if (prevScroll > currentScroll) { 
        //스크롤을 올리면(스크롤의 이동거리가 0에 가까워진다) 헤더가 보이고
        $('header').css({transform : 'translateY(0)'});
      } 
      else  {
        // 스크롤을 내리면 헤더를 숨김 
        
        $('header').css({transform : 'translateY(-100px)'});
      }

      // prev에 현재 스크롤 값 재할당
      prevScroll = currentScroll
      console.log(prevScroll)
    })






// 스와이퍼
const mainswiper = new Swiper('.main-slide', {
  slidesPerView: 2,
  loop: true,
  scrollbar : {
    el: '.swiper-scrollbar',
    hide: false
  },
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 0,
    }
  },
});

const subswiper = new Swiper('.sub-slide', {
  slidesPerView: 1,
  autoplay: true,
  loop: true,
  scrollbar : {
    el: '.swiper-scrollbar',
    hide: false
  },
  spaceBetween: 30,
});
