$(document).ready(function () {
    $(".text__icon").hide();
    $("button.bot").click(function () {
      $(".text__icon").slideDown();
    });
    $("#chat__top__btn").click(function(){
      $(".text__icon").slideUp();
    })
  });