// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  // $('.work').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //  dots: true
  // });

  $(window).resize(function () {
    // var windowWidth = $(window).width();
    // var mainWidth = windowWidth - 375 - 200;
    //
    // $('.work, .work div').css('width', mainWidth);

    var windowHeight = $(window).height();
    $('.work2').height(windowHeight);
    $('body').height(windowHeight*2); // SET THIS

    var laptopWidth = $('.laptop').width();
    $('.laptop').height(laptopWidth / 1.74);
    $('.laptop').css('margin-top', laptopWidth / 1.74 / -2);
    // 1.74 ratio



    $(window).scroll(function () {
      var currentPos = $('body').scrollTop();
      if (currentPos < windowHeight * 2) {
        $('.main').css('position', 'fixed');
        if (currentPos < windowHeight) {
          // show first portfolio
          $('.portfolio').css('background-image', "url('https://dl.dropboxusercontent.com/u/2330299/capstone/portfolio/portfolio_image_1.jpg')");
        }
        if (currentPos >= windowHeight && currentPos < windowHeight * 2) {
          // $('.portfolio').fadeOut();
          // $('.portfolio').fadeIn();
          $('.portfolio').css('background-image', "url('https://dl.dropboxusercontent.com/u/2330299/capstone/portfolio/portfolio_image_2.jpg')");
        }
      }
    });



  })

  $(window).resize();
});
