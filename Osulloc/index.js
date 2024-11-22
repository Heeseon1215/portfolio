// 모바일 토글 버튼


$('header .menu-icon').on('click', function() {
  // 내가 클릭한 그 버튼에 .toggle-btn이 적용/미적용
  $(this).toggleClass('toggle-btn');
  // 내가 클릭하면 메뉴가 보이고, 안보이고
  $('header .menu').toggleClass('toggle-menu');


  // 각자의 메뉴를 클릭하면, 버튼은 원래대로, 메뉴는 닫히게
/*   $('.global-menu li').each(function(idx, list) {
    $(list).on('click', function() {
      $('header .menu-wrapper .mobile-btn').removeClass('toggle-btn');
      $('.global-menu').removeClass('toggle-menu');
    });
  }); */

  //   $('header').css({background: '#1D360F'}) 
  // 배경색 바뀌는건 나중에하자...힘들다

});



// 스와이퍼
const mainswiper = new Swiper('.main-slide', {
  slidesPerView: 2,
  loop: true,
  scrollbar : {
    el: '.swiper-scrollbar',
    hide: false
  },
  spaceBetween: 10,
});
