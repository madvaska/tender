$(document).ready(function(){
	/* Распределение нагрузки поисковых запросов между витриной и расширенным поиском (старый вариант) */

	seachEngineBalance = {
		URLs: {
			"common": {
				"default": "http://rts-tender.ru/auctionsearch?number=",
				"mall": "http://mall.rts-tender.ru/?SearchForm.State=0&SearchForm.TradeNumber="
			},
			"menu": {
				"default": "http://rts-tender.ru/auctionsearch",
				"mall": "http://mall.rts-tender.ru/"
			},
			"223": {
				"default": "https://223.rts-tender.ru/supplier/auction/Trade/Search.aspx",
				"mall": "http://223-mall.rts-tender.ru/"
			},
			"44": {
				"default": "http://rts-tender.ru/auctionsearch",
				"mall": "http://44.rts-tender.ru/"
			}
		},

		useMall: false,
		init: function(){
			var self = this;
			$(".mainMenu a").eq(0).attr('href','#').on("click", function(){self.menuSearch()});
			/* TO DO: раскоментировать после одобрения загрузки на бой */
			/*this.useMall = $.cookie('RTS_USEMallSearchEngine');
			if (this.useMall === null) {
				var percent = 1;
				var randomValue = Math.floor(Math.random() * (100));
				this.useMall = (randomValue > 0 && randomValue <= percent);
				$.cookie('RTS_USEMallSearchEngine', this.useMall);
			} else {
				this.useMall = this.useMall === "false" ? false : true;
			}*/
		},
		menuSearch: function (){
			var url  = this.useMall ? this.URLs.menu.mall : this.URLs.menu.default;
			window.location.href = this.URLs.menu.default;
		},

		commonSearch: function (params){
			var url  = this.useMall ? this.URLs.common.mall + params : this.URLs.common.default + params;
			window.location.href = this.URLs.common.default + params;
		},

		search44: function(){
			var url  = this.useMall ? this.URLs["44"].mall : this.URLs["44"].default;
			window.location.href = this.URLs["44"].default;
		},

		search223: function(){
			var url  = this.useMall ? this.URLs["223"].mall : this.URLs["223"].default;
			window.location.href = this.URLs["223"].default;
		}
	};
	seachEngineBalance.init();
	/* TO DO: раскоментировать после одобрения загрузки на бой */
	/*loadLibraries = function() {
		
		$.getScript( "//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js", function() {
			seachEngineBalance.init();
			return true;
		});
	}();*/
	
	// /customer-services  /supplier-services
	if ($('#carousel').length > 0) {
		$("#carousel").owlCarousel({
			loop: true,
			items: 8
		});
	}
	if($(".owl-carousel").length > 0){
		$(".owl-carousel").owlCarousel({
			loop: false,
			nav: false,
			startPosition: 1,
			mouseDrag: false,
			items: 1
		});
	}
	$('.page_menu-scroller__button.page_menu__button-left').click(function(){
		$("#carousel").trigger('prev.owl.carousel');
	});
	$('.page_menu-scroller__button.page_menu__button-right').click(function(){
		$("#carousel").trigger('next.owl.carousel');
	});
	$('.page_menu-scroller .page_menu').on("click","a",function(event){
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top - 90;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop: 0}, 1500);
	});
	$('.landing-wrapper .wrap-sections .section.slider .customer-slide button').click(function(event){
		event.preventDefault();
		$(".owl-carousel").trigger('next.owl.carousel');
	});
	$('.landing-wrapper .wrap-sections .section.slider .supplier-slide button').click(function(event){
		event.preventDefault();
		$(".owl-carousel").trigger('prev.owl.carousel');
	});
	$('.landing-wrapper .wrap-sections .section.slider .customer-slide__preview .detailed').click(function(event){
		event.preventDefault();
		$(".owl-carousel").trigger('prev.owl.carousel');
	});
	$('.landing-wrapper .wrap-sections .section.slider .supplier-slide__preview .detailed').click(function(event){
		event.preventDefault();
		$(".owl-carousel").trigger('next.owl.carousel');
	});
	
	//  /digital-signature	
	
	function scrollToAdressList(animateDuration){
		var top = $('.main__info.accordion .accordion__toggle').offset().top - 90;
		$('.main__info.accordion .accordion__toggle').addClass('accordion__toggle--active');
		$('.main__info.accordion .accordion__toggle').siblings('.accordion__content').addClass('accordion__content--active');
		$('body,html').animate({scrollTop: top}, animateDuration);
	};
	function scrollToDocumentList(animateDuration){
		var top = $('.main__docs.accordion .accordion__toggle').offset().top - 90;
		$('.main__docs.accordion .accordion__toggle').addClass('accordion__toggle--active');
		$('.main__docs.accordion .accordion__toggle').siblings('.accordion__content').addClass('accordion__content--active');
		$('body,html').animate({scrollTop: top}, animateDuration);
	};

	$( window ).load(function() {
		var windowLocation = window.location,
			pathName = "/digital-signature",
			locationHash = "#document-list";
		
		if ((windowLocation.pathname === pathName) && (windowLocation.hash === locationHash)) {
			scrollToDocumentList(0);
			//setTimeout(function(){ scrollToDocumentList(0); },1000);
		}	
	});
	$('.js-main-info').click(function(event){
		event.preventDefault();
		scrollToAdressList(1500);
	});
	
	$('.js-main-docs').click(function(){
		event.preventDefault();
		scrollToDocumentList(1500);
	});
});