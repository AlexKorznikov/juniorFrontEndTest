// SLIDER

// const reviews = document.querySelectorAll('.review')
// const leftArrow = document.querySelector('.reviews-left-arrow-img');
// const rightArrow = document.querySelector('.reviews-right-arrow-img');
// let currentSlide = 0;
//
// console.log(reviews)
//
// for (let i = 0; i < reviews.length; i++) {
//   reviews[i].onclick =() => {
//     currentSlide = i;
//     document.querySelector('.carousel__photo.active').classList.remove('active');
//     document.querySelector('.reviews-person.active').classList.remove('active');
//     reviews[currentSlide].classList.add('active');
//     reviews[currentSlide].classList.add('active');
//   }
// }
//
// rightArrow.addEventListener('click', function(event)  {
//   nextSlide();
// })
//
// leftArrow.addEventListener('click', function(event)  {
//   previousSlide();
// })
//
// function goToSlide (n) {
//   reviews[currentSlide].classList.remove('active');
//   currentSlide = (n+reviews.length) % reviews.length;
//   reviews[currentSlide].classList.add('active');
//   reviews[currentSlide].classList.add('active');
// }
//
// function previousSlide () {
//   goToSlide(currentSlide-1);
// }
//
// function nextSlide () {
//   goToSlide(currentSlide+1);
// }


$(function () {

  $('.reviews-slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="reviews-left-arrow-fluid"><img src="img/slider-arrow.png" alt="" class="reviews-left-arrow-img arrow"></div>',
    nextArrow: '<div class="reviews-left-arrow-fluid"><img src="img/slider-arrow.png" alt="" class="reviews-right-arrow-img arrow"></div>',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
})