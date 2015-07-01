// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (http://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery.serializejson

$(window).load(function(){

  $(window).resize(function () {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $('.work').height(windowHeight);
    $('.contact').height(windowHeight - 200);
    $('body').height(windowHeight*4); // SET THIS
    $('.contact').css('top', windowHeight*4);

    $('.laptop').width(windowWidth - 375 - 100);
    var laptopWidth = $('.laptop').width();
    $('.laptop').height(laptopWidth / 1.74);
    $('.laptop').css('margin-top', laptopWidth / 1.74 / -2);

    $(window).scroll(function () {
      var currentPos = $('body').scrollTop();
      $('.laptop').height(laptopWidth / 1.74);
      if (currentPos < windowHeight * 3) {
        $('.work').css('position', 'fixed');
        $('.work').css('top', 0);
      }
      if (currentPos < windowHeight) {

        $('.work').hide();
        $('.portfolio-1').show();
        $('.work').css('width', 'Calc(100% - 375px - 200px)');
      } else if (currentPos >= windowHeight && currentPos < windowHeight * 2) {

        $('.work').hide();
        $('.portfolio-2').show();
        $('.work').css('width', 'Calc(100% - 375px - 200px)');
      } else if (currentPos >= windowHeight * 2 && currentPos < windowHeight * 3) {

        $('.work').hide();
        $('.portfolio-3').show();
        $('.work').css('width', 'Calc(100% - 375px - 200px)');
      } else {
        $('.work').css('position', 'absolute');
        $('.work').css('top', windowHeight * 3);
        $('.work').css('width', 'Calc(100% - 200px)');
      }
    })

    $(window).scroll();

  })

  $(window).resize();
});
