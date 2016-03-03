var targetDate = new Date('Feb, 10, 2016 22:44').getTime();
var daysLeft = 0;
var hoursLeft = 0;
var minutesLeft = 0
var secondsLeft = 0;

jQuery(document).ready(function() { 
	timerTick();

	setInterval(timerTick, 1000);
});

function timerTick() {
	var countdown = jQuery('#countdown');
	var currentDate = new Date().getTime();
	var secondLeftToDate = (targetDate - currentDate) / 1000;
	if (secondLeftToDate > 0) {
		daysLeft = parseInt(secondLeftToDate / 86400);
		secondLeftToDate = secondLeftToDate % 86400;
		hoursLeft = parseInt(secondLeftToDate / 3600);
		secondLeftToDate = secondLeftToDate % 3600;
		minutesLeft = parseInt(secondLeftToDate / 60);
		secondsLeft = parseInt(secondLeftToDate % 60);
	}
	else {
		daysLeft = 0;
		hoursLeft = 0;
		minutesLeft = 0
		secondsLeft = 0;
	}

	jQuery("#daysNum .timer-nmb").text(daysLeft);
	jQuery("#hoursNum .timer-nmb").text(hoursLeft);
	jQuery("#minutesNum .timer-nmb").text(minutesLeft);
	jQuery("#secondsNum .timer-nmb").text(secondsLeft);
}