$(function () {
  $(".o-b-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".o-b-reviews-list-left",
    nextArrow: ".o-b-reviews-list-right",
  });
});
