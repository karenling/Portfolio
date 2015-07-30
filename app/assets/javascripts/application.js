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

$(document).ready(function () {
  windowHeight = $(window).height();
  $('.loading').height(windowHeight);
})
$(window).load(function () {
  $('.loading').fadeOut();
  $('.mail').click(function () {
    $('.contact').show();
    $('.work').hide();
  });

  $('.close-contact').click(function () {
    $('.contact').hide();
    $('.work').show();
  })

  $(window).resize(function () {
    windowHeight = $(window).height();
    $('.work, .contact').height(windowHeight);
    laptopWidth = $('.laptop').width();
    $('.laptop').height(laptopWidth / 1.74);
    laptopHeight = $('.laptop').height();
    $('.laptop').css('margin-top', laptopHeight/(-2));
    $('.laptop').css('margin-left', laptopWidth/(-2));

    carouselWidth = $('.work-carousel').width();
    $('.work-carousel, .portfolio').height(carouselWidth / 1.55);
    $('.work-carousel').css('margin-top', carouselWidth / 1.55 / (-2));
    $('.work-carousel').css('margin-left', carouselWidth / (-2));
  })

  $(window).resize();
})
