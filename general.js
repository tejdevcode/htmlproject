
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
$(".accordion__title").on("click", function(e) {

   e.preventDefault();
   var $this = $(this);

   if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideUp(400);
      $(".accordion__title").removeClass("accordion-active");
      $('.accordion__arrow').removeClass('accordion__rotate');
   }

   $this.toggleClass("accordion-active");
   $this.next().slideToggle();
   $('.accordion__arrow',this).toggleClass('accordion__rotate');
});
//END

