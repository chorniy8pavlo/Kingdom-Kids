$(document).ready(function(){
		
	$('.icon-menu').on('click', function(){ 
		$(this).toggleClass('active');
		$('div.nav_block').toggleClass("active"); 
		$('#overday').toggleClass("active"); 
	});
	
	$('.close_nav_block, nav ul li a, #overday').on('click', function(){ 
		$('div.icon-menu').removeClass("active"); 
		$('div.nav_block').removeClass("active");
		$('#overday').toggleClass("active");  
		return false;
	});

	$(".open_popup").magnificPopup({removalDelay:300,type:"inline"});
	
	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('').find('div.box_choose_where').hide().eq($(this).index()).fadeIn(150);
	})
	
	$('ul.tabs_items').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('').find('div.box_choose_where').hide().eq($(this).index()).fadeIn(150);
	})
	
	$('ul.map_tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('').find('div.box_map').hide().eq($(this).index()).fadeIn(150);
	})
		


$('nav ul li a').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped,0);
		return false;
	});
	function scrollToDiv(element,navheight){
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;
		$('body,html').animate({
				scrollTop: totalScroll
		}, 800);
	}

$(function() {
    var lastId, 
        topMenu = $("#menu"), 
        topMenuHeight = topMenu.outerHeight()+0, 
        menuItems = topMenu.find("a"), 
        scrollItems = menuItems.map(function() { 
            var item = $($(this).attr("href"));
            if(item.length) return item;
        });
        
    $(window).scroll(function(){
        var fromTop = $(this).scrollTop()+topMenuHeight;
        var cur = scrollItems.map(function() {
            if($(this).offset().top < fromTop) return this;
        });
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        if(/\d/g.exec(id)) id = id.split('-',1)[0];  
        if(lastId !== id) {
           lastId = id;
           menuItems.parent()
                    .removeClass("active")
                    .end()
                    .filter("[href=#"+id+"]")
                    .parent()
                    .addClass("active");
        }                   
    });
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
		autoHeight:true,
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