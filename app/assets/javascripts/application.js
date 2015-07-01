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
//= require jquery.serializejson

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
    $('.work').height(windowHeight);
    $('body').height(windowHeight*4); // SET THIS

    var laptopWidth = $('.laptop').width();
    $('.laptop').height(laptopWidth / 1.74);
    $('.laptop').css('margin-top', laptopWidth / 1.74 / -2);
    // 1.74 ratio



    $(window).scroll(function () {
      var currentPos = $('body').scrollTop();
      // console.log($('body').height());
      // console.log(currentPos);
      if (currentPos < windowHeight * 3) { // IMPORTANT TO SET THIS TO THE NUMBER OF IMAGES THERE ARE
        $('.main').css('position', 'fixed');
        if (currentPos >= 0 && currentPos < windowHeight) {
          $('.portfolio').css('background-image', "url('http://images.karenling.net/aa/portfolio/portfolio_image_1.jpg')");
          $('.portfolio').html("<div class='description'><div class='content'><div class='title'><a href='http://flappypig.karenling.net/'>FlappyPig <i class='fa fa-external-link'></i></a></div> <div class='body'>Highly addictive video game, inspired by Flappy Bird, BUT with a flying pig! I built the game using JavaScript and HTML5 Canvas. &nbsp;<a href='https://github.com/karenling/Flappy-Pig'><i class='fa fa-github'></i></a></div></div></div>");
        } else if (currentPos >= windowHeight && currentPos < windowHeight * 2) {
          $('.portfolio').css('background-image', "url('http://images.karenling.net/aa/portfolio/portfolio_image_2.jpg')");
          $('.portfolio').html("<div class='description'><div class='content'><div class='title'><a href='http://twinkieset.com'>Twinkieset <i class='fa fa-external-link'></i></a></div> <div class='body'>Twinkieset is a client photo gallery for modern photographers, inspired by Pixieset, built on Rails and Backbone. Photographers can upload photos and create beautifully designed galleries for their clients. &nbsp;<a href='https://github.com/karenling/Twinkieset'><i class='fa fa-github'></i></a></div></div></div>");
        } else if (currentPos >= windowHeight * 2 && currentPos < windowHeight * 3) {
          $('.portfolio').css('background-image', "url('http://images.karenling.net/aa/portfolio/portfolio_image_3.jpg')");
          $('.portfolio').html("<div class='description'><div class='content'><div class='title'><a href='https://github.com/karenling/chess'>Ruby Chess <i class='fa fa-external-link'></i></a></div> <div class='body'>Terminal chess implementation, written in Ruby. &nbsp;<a href='https://github.com/karenling/chess'><i class='fa fa-github'></i></a></div></div></div>");
        }
      } else {
        $('.main').css('position', 'absolute');
      }
    });

    $(window).scroll();

  })

  $(window).resize();
});
