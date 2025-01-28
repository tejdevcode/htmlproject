
new WOW().init();

/* counter */
var aone = 0;
$(window).scroll(function () {
   var oTop = $('#counter').offset().top - window.innerHeight;
   if (aone == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function () {
         var $this = $(this),
            countTo = $this.attr('data-count');
         $({
            countNum: $this.text()
         }).animate({
            countNum: countTo
         },
            {
               duration: 2000,
               easing: 'swing',
               step: function () {
                  $this.text(Math.floor(this.countNum));
               },
               complete: function () {
                  $this.text(this.countNum);
                  //alert('finished');
               }
            });
      });
      aone = 1;
   }

});

//accoedion BEGIN
$(".accordion__title").on("click", function (e) {

   e.preventDefault();
   var $this = $(this);

   if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideUp(400);
      $(".accordion__title").removeClass("accordion-active");
      $('.accordion__arrow').removeClass('accordion__rotate');
   }

   $this.toggleClass("accordion-active");
   $this.next().slideToggle();
   $('.accordion__arrow', this).toggleClass('accordion__rotate');
});
//END

//mobile navigation
$(document).ready(function () {
   $(".navbtn .togglebtn").click(function () {
      if ($(window).width() < 992) {
         $(this).toggleClass("on");
         $('.bottom_header').slideToggle("on");
      }
   });
   $(window).resize(function () {
      if ($(window).width() > 992) {
         $('.bottom_header').addClass('desknav').attr('style', '');
         $(".navbtn .togglebtn").removeClass('on');
      } else {
         $('.bottom_header').removeClass('desknav');
      };
   });
});

$('.bottom_header ul li').click(function () {
   if ($(window).width() < 992) {
      $('.bottom_header').slideUp();
      $('.navbtn .togglebtn').removeClass('on');
   }
});

/* contact form */
$('.contactform').submit(function (e) {
   e.preventDefault();
   var name = $("input[name='name']").val();
   var phone = $("input[name='phone']").val();
   var msg = $("input[name='text']").val();
   console.log($(this).serializeArray());
});

