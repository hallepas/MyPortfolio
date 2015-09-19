$('[data-skill]').each(function(){

	var item = $(this),
		skill = item.data('skill'),
		size = item.data('skill-size'),
		border = 10,
		radius = (size / 2) - border,
		circumference = 2 * Math.PI * radius,
		progress = circumference - ((circumference / 100) * skill),
		speed = 1000;
	
	item.append();
	
	$({Counter: 0}).animate({
			Counter: skill
		}, {
			duration: speed,
			easing: 'swing',
			step: function () {
			
		}
	});
	
	item.find('svg').width(size).height(size);
	
	item.find('circle').attr({
		'r' : radius,
		'cy' : radius + border,
		'cx' : radius + border
	});
	
	item.find('.front').css({
		'stroke-dasharray' : circumference,
		'stroke-dashoffset' : circumference
	}).animate({
		'stroke-dashoffset' : progress
	}, speed);

});