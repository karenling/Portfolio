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

$(document).ready(function(){
  // $('.work').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //  dots: true
  // });

  $('.mail').click(function () {
    $('html, body').animate({
      scrollTop: $(window).height() * 4
    }, 1000);
  });

  window.setInterval(function () {
    $('.down-arrow').toggleClass('shift-down');
    // $('.down-arrow').removeClass('shift-down');
  }, 300);

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

        if (currentPos >= 0 && currentPos < windowHeight) {
          $('.main').css('position', 'fixed');
          $('.main').css('top', 0);
          $('.portfolio').css('background-image', "url('http://images.karenling.net/aa/portfolio/portfolio_image_1.jpg')");
          $('.portfolio').html("<div class='description'><div class='content'><div class='title'><a href='http://flappypig.karenling.net/'>FlappyPig <i class='fa fa-external-link'></i></a></div><div class='icons'><img src='https://dl.dropboxusercontent.com/u/2330299/capstone/portfolio/code_icons/javascript.png'><img src='https://dl.dropboxusercontent.com/u/2330299/capstone/portfolio/code_icons/html5.png'></div><div class='body'>Highly addictive video game, inspired by Flappy Bird, BUT with a flying pig! I built the game using JavaScript and HTML5 Canvas. &nbsp;<a href='http://github.com/karenling/Flappy-Pig'><i class='fa fa-github'></i></a></div></div></div>");
        } else if (currentPos >= windowHeight && currentPos < windowHeight * 2) {
          $('.main').css('position', 'fixed');
          $('.main').css('top', 0);
          $('.portfolio').css('background-image', "url('http://images.karenling.net/aa/portfolio/portfolio_image_2.jpg')");
          $('.portfolio').html("<div class='description'><div class='content'><div class='title'><a href='http://twinkieset.com'>Twinkieset <i class='fa fa-external-link'></i></a></div><div class='icons'><img src='https://dl.dropboxusercontent.com/u/2330299/capstone/portfolio/code_icons/rails.png'><img src='https://dl.dropboxusercontent.com/u/2330299/capstone/portfolio/code_icons/ruby.png'><img src='https://dl.dropboxusercontent.com/u/2330299/capstone/portfolio/code_icons/javascript.png'><img src='https://dl.dropboxusercontent.com/u/2330299/capstone/portfolio/code_icons/backbonejs.png'><img src='https://dl.dropboxusercontent.com/u/2330299/capstone/portfolio/code_icons/html5.png'><img src='https://dl.dropboxusercontent.com/u/2330299/capstone/portfolio/code_icons/css3.png'></div><div class='body'>Twinkieset is a client photo gallery for modern photographers, inspired by Pixieset, built on Rails and Backbone. Photographers can upload photos and create beautifully designed galleries for their clients. &nbsp;<a href='http://github.com/karenling/Twinkieset'><i class='fa fa-github'></i></a></div></div></div>");
        } else if (currentPos >= windowHeight * 2 && currentPos < windowHeight * 3) {
          $('.main').css('position', 'fixed');
          $('.main').css('top', 0);
          $('.portfolio').css('background-image', "url('http://images.karenling.net/aa/portfolio/portfolio_image_3.jpg')");
          $('.portfolio').html("<div class='description'><div class='content'><div class='title'><a href='http://github.com/karenling/chess'>Ruby Chess <i class='fa fa-external-link'></i></a></div><div class='icons'><img src='https://dl.dropboxusercontent.com/u/2330299/capstone/portfolio/code_icons/ruby.png'></div><div class='body'>Terminal chess implementation, written in Ruby. &nbsp;<a href='http://github.com/karenling/chess'><i class='fa fa-github'></i></a></div></div></div>");

        }
      } else {
        $('.main').css('position', 'absolute');
        $('.main').css('top', windowHeight * 3);
      }
    });

    $(window).scroll();

  })

  $(window).resize();
});
