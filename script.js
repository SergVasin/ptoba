$(document).ready(function(){
	$(".main-slider").owlCarousel({
		items: 1,
		loop: true,
        dots: true,
    });

    var owl = $('.main-slider');
    owl.owlCarousel();
    $('.customNextBtn').click(function() {
     owl.trigger('next.owl.carousel');
 })
    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })
});