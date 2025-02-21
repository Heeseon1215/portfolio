const rabbit = lottie.loadAnimation({
      container: document.getElementById('rabbit2'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './images/rabbit.json'
});


// a href="#" 속성 없애기
$('a[href="#"]').on('click', function (e) {
      e.preventDefault();
});
