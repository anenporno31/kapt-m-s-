$(window).on('load', function () {
	$preloader = $('.pre-loader'), $loader = $preloader.find('.caption');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});