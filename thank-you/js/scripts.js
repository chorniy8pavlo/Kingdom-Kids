$(document).ready(function(){
	
	$('.icon-menu').click(function(event){
		$(this).toggleClass('active');
		$(this).next('div.nav_block').toggleClass('active');
	});
	
	$('.nav_block ul li a').on('click', function(){
		$('div.icon-menu').removeClass('active');
		$('div.nav_block').removeClass('active');
	});

	$(".open_popup").magnificPopup({removalDelay:300,type:"inline"});
	
	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('').find('div.box_choose_where').hide().eq($(this).index()).fadeIn(150);
	})
		
});

$(document).ready(function () {

    var show = true;
    var countbox = ".list_important_numbers";
    $(window).on("scroll load resize", function () {
        if (!show) return false; 
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top; 
        var w_height = $(window).height();
        var d_height = $(document).height(); 
        var e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.numbers').css('opacity', '1');
            $('.numbers').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

});


$(document).ready(function() {
	var owl = $('.slider_choose_where');
    	owl.owlCarousel({
		margin:0,
		nav: true,
		loop: true,
		smartSpeed:500,
		items: 1
	})
});

$(document).ready(function() {
	var owl = $('.slider_reviews');
    	owl.owlCarousel({
		margin:0,
		nav: true,
		loop: true,
		smartSpeed:500,
		items: 1
	})
});

$(document).ready(function() {
	var owl = $('.main_slider');
    	owl.owlCarousel({
		margin:14,
		nav: true,
		loop: true,
		smartSpeed:500,
		responsive: {
			0: {
			margin:0,
			items: 1
			},
			780: {
			items: 2
			},
			1000: {
			items: 3
			}
		}
	})
});


$(function(){
	$('input[placeholder], textarea[placeholder]').placeholder();
});