$(document).ready(function(){
	//var $menuMain = $('.menu_main'),
		//displayMobileMenu = false,
		//mobileMenuViewMaxWidth = 784, //800px
	var	sticky_navigation_offset_top = $('.menu_main').offset().top;
	//$menuMain.append('<div class="burgerButton"><img src="/Portals/0/Files/library/main_menu/white-burger-button.png" class="white-img"><img src="/Portals/0/Files/library/main_menu/gray-burger-button.png" class="gray-img"></div>');
	/*if($(window).width() < mobileMenuViewMaxWidth) {
		$menuMain.addClass('hiddenMenu');// mainMenuFixed
	}*/
	sticky_navigation();
	/*$('.menu_main .burgerButton').click(function(){
		$('.menu_main').toggleClass('hiddenMenu');
		$('.menu_main .burgerButton').toggleClass('active');
	});
	$(window).load(function(){
		$('.menu_main .mainMenu').prepend('<span class="root searchButtonSpan"><a href="#" class="searchButton"><img src="/Portals/0/Files/library/main_menu/search-icon.png"></a></span>');
		setTimeout(function(){
			var searchButtonHref = $('.menu_main .mainMenu .root.first a').prop('href');
			$('.mainMenu .root.searchButtonSpan .searchButton').prop('href', searchButtonHref);
		},200);
	});*/
	$(window).resize(function(){
		//var $menuMain = $('.menu_main');
		sticky_navigation();
		
		/*if($(window).width() < mobileMenuViewMaxWidth) {
			if(!displayMobileMenu) {
				$menuMain.addClass('hiddenMenu');
				displayMobileMenu = !displayMobileMenu;
			}
		}
		else {
			$menuMain.removeClass('mobileView');
			displayMobileMenu = false;
		}*/
	});
	$(window).scroll(function(){
		sticky_navigation();
	});

	function sticky_navigation() {
		var scroll_top = $(window).scrollTop(), // our current vertical position from the top
			menuMainWidth = ($(window).width() < parseFloat($('#wrapper').css('min-width'))) ? 'auto' : (($('#wrapper').width() - 10).toString() + 'px');
			//buttonGroupExist = $('.sticky-button-group').length > 0;
		// if we've scrolled more than the navigation, change its position to fixed to stick to top,
		// otherwise change it back to relative
		
		$('.menu_main').css('width', menuMainWidth);
			if (scroll_top > sticky_navigation_offset_top) {
				$('.menu_main').addClass('mainMenuFixed');
				//if (buttonGroupExist) $('.sticky-button-group').css({ 'position': 'fixed', 'top': '48px', 'z-index': 9999, 'background-color': '#ffffff' });
			} else {
				$('.menu_main').removeClass('mainMenuFixed');
				//if (buttonGroupExist) $('.sticky-button-group').css({'position': 'relative', 'top': 0 });
			}
		
	};
});