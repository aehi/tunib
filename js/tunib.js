$(function(){

  /* 메뉴 햄버거버튼 클릭 */

  $('.btn_nav').click(function(){
      $(this).toggleClass('on');
      $('#navWrap').toggleClass('on');
      
  });
  
  $('.gnb li a').click(function(){
      $('.btn_nav').removeClass('on');
      $('#navWrap').removeClass('on');
  });  

  /* team pc */ 

  $('.tab li a').click(function(){
      var link_li = $(this).attr('href');
      
      $('.con').removeClass('active');
      $(link_li).addClass('active');
      
      $('.tab li a').removeClass('active');
      $(this).addClass('active');
      
      return false;
  })
  

  /* team slider mobile */
  var swiper = undefined;
      
  function initSwiper() {
    var win_w = $(window).width();
    if ( win_w <= 963 && swiper == undefined) {
      swiper = new Swiper(".teamBox", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else if ( win_w > 963 && swiper != undefined){
      // pc버전에서 swiper 없앰
      swiper.destroy();
      swiper = undefined;
    }
  };
  
  initSwiper();

  // 창 조절될때 swiper 다시 실행
  $(window).on('resize', function(){
    initSwiper();        
  });
}); 