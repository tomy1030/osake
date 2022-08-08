$(function () {
  $('.bxslider').bxSlider({
    auto: true, // 自動でスライドショーをスタートさせる　（初期値: false）
    mode: 'horizontal', // アニメーションの種類「'horizontal'」「'vertical'」「'fade'」　（初期値: 'horizontal'）
    speed: 1500, // アニメーションのスピード　（初期値: 500）
    pause: 3000, // 画像の切り替わる間隔　（初期値: 4000）
    pager: false, // 下部にある画像切り替えボタンの表示・非表示　（初期値: true）
    controls: false // 左右の矢印の表示・非表示　（初期値: true）
  });
});


jQuery(function ($) {
  var fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
});