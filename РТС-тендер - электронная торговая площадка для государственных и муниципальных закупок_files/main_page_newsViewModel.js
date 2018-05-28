var rts_LatestNewsViewModel = function(){
	var self = this;
	self.news = ko.observableArray([]);
	
	self.GetNews = function () {
		$.getJSON('/DesktopModules/RtsNews/API/ModuleRtsNews/GetNews?CategoryId=[2]&skip=0&take=1').done(
			function (result) {
				$.each(result, function (item, val) {
					val.PublishDate = val.PublishDate.substring(0, 10);
					self.news.push(val);
				})
			}
		);
	};
	self.GetNews();
};
var rts_NewsViewModel = function(){
	var self = this;
	self.news = ko.observableArray([]);
	
	self.GetNews = function () {
		$.getJSON('/DesktopModules/RtsNews/API/ModuleRtsNews/GetNews?CategoryId=[2]&skip=0&take=10').done(
			function (result) {
				$.each(result, function (item, val) {
					val.PublishDate = val.PublishDate.substring(0, 10);
					self.news.push(val);
				})
			}
		);
	};
	self.GetNews();
};
var rts_SmiAboutViewModel = function(){
	var self = this;
	self.news = ko.observableArray([]);
	
	self.GetNews = function () {
		$.getJSON('/DesktopModules/RtsNews/API/ModuleRtsNews/GetNews?CategoryId=[5]&skip=0&take=10').done(
			function (result) {
				$.each(result, function (item, val) {
					val.PublishDate = val.PublishDate.substring(0, 10);
					self.news.push(val);
				})
			}
		);
	};
	self.GetNews();
};

$( document ).ready(function(){
	ShowNewsProgress();
	var newsVM = new rts_NewsViewModel();
	var latestNewsVM = new rts_LatestNewsViewModel();
	var smiAboutVM = new rts_SmiAboutViewModel();
	ko.applyBindings(latestNewsVM, document.getElementById('Rts_LatestNews'));
	ko.applyBindings(newsVM, document.getElementById('Rts_News'));
	ko.applyBindings(smiAboutVM, document.getElementById('Rts_SmiAbout'));
});
$( window ).load(function() {
	setTimeout(function(){
		$("#Rts_LatestNews").parent().css('height', 'auto');
		$("#Rts_News").parent().css('height', 'auto');
		$("#Rts_SmiAbout").parent().css('height', 'auto');
		$('#Rts_News').height($('#Rts_LatestNews').height() - $('.DnnModule-RtsEventCalendar').height() - 51);
		$('#Rts_SmiAbout').height($('#Rts_LatestNews').parent().height() - 36);
		$('#Rts_News').mCustomScrollbar();
		$('#Rts_SmiAbout').mCustomScrollbar();
		StopProgress();
	}, 500);
});
$( window ).resize(function() {
	$('#Rts_News').height($('#Rts_LatestNews').height() - $('.DnnModule-RtsEventCalendar').height() - 51);
	$('#Rts_SmiAbout').height($('#Rts_LatestNews').parent().height() - 36);
});

function ShowNewsProgress() {
    setTimeout(function () {
        var newsLoading = $("#Rts_News + .modal-loading + .loader");
        var newsModal = $("#Rts_News + .modal-loading");
		var latestNewsLoading = $("#Rts_LatestNews + .modal-loading + .loader");
		var latestNewsModal = $("#Rts_LatestNews + .modal-loading");
		var smiAboutLoading = $("#Rts_SmiAbout + .modal-loading + .loader");
        var smiAboutModal = $("#Rts_SmiAbout + .modal-loading");

		var height = $('.DnnModule-RtsEventCalendar').height();
		$("#Rts_LatestNews").parent().height(height * 2);
		$("#Rts_News").parent().height(height);
		$("#Rts_SmiAbout").parent().height(height * 2);
		
        newsModal.show();
        newsLoading.show();
		latestNewsModal.show();
		latestNewsLoading.show();
        smiAboutModal.show();
        smiAboutLoading.show();

        var newsTop = Math.max(newsModal.parent().height() / 2 - newsLoading[0].offsetHeight / 2, 0);
        var newsLeft = Math.max(newsModal.parent().width() / 2 - newsLoading[0].offsetWidth / 2, 0);
		var latestNewsTop = Math.max(latestNewsModal.parent().height() / 2 - latestNewsLoading[0].offsetHeight / 2, 0);
		var latestNewsLeft = Math.max(latestNewsModal.parent().width() / 2 - latestNewsLoading[0].offsetWidth / 2, 0);
        var smiAboutTop = Math.max(smiAboutModal.parent().height() / 2 - smiAboutLoading[0].offsetHeight / 2, 0);
        var smiAboutLeft = Math.max(smiAboutModal.parent().width() / 2 - smiAboutLoading[0].offsetWidth / 2, 0);

        smiAboutLoading.css({ top: smiAboutTop, left: smiAboutLeft });
		newsLoading.css({ top: newsTop, left: newsLeft });
		latestNewsLoading.css({ top: latestNewsTop, left: latestNewsLeft });
    }, 200);
}

function StopProgress() {
    var loading = $(".loader");
    var modal = $(".modal-loading");
    loading.hide();
    modal.hide();
};