var bracketData = [
	[
		[ {"name" : "Team 1", "id" : "team1", "logo" : "images/logo.jpg", "winner": true}, {"name" : "Team 2", "id" : "team2",  "logo" : "images/logo.jpg"} ],
		[ {"name" : "Team 3", "id" : "team3", "logo" : "images/logo.jpg"}, {"name" : "Team 4", "id" : "team4",  "logo" : "images/logo.jpg", "winner": true} ],
		[ {"name" : "Team 5", "id" : "team5", "logo" : "images/logo.jpg", "winner": true}, {"name" : "Team 6", "id" : "team6",  "logo" : "images/logo.jpg"} ],
		[ {"name" : "Team 7", "id" : "team7", "logo" : "images/logo.jpg", "winner": true}, {"name" : "Team 8", "id" : "team8",  "logo" : "images/logo.jpg"} ]
	],
	[
		[ {"name" : "Team 1", "id" : "team1", "logo" : "images/logo.jpg", "winner": true}, {"name" : "Team 4", "id" : "team4",  "logo" : "images/logo.jpg"} ],
		[ {"name" : "Team 5", "id" : "team5", "logo" : "images/logo.jpg"}, {"name" : "Team 7", "id" : "team7",  "logo" : "images/logo.jpg", "winner": true} ]
	],
	[
		[ {"name" : "Team 1", "id" : "team1", "logo" : "images/logo.jpg"}, {"name" : "Team 7", "id" : "team7",  "logo" : "images/logo.jpg", "winner": true} ],
	],
	[
		[ {"name" : "Team 7", "id" : "team7", "logo" : "images/logo.jpg", "winner": true} ]
	]
];


jQuery(document).ready(function() {
	jQuery(".bracket").gracket({
		src: bracketData
	});
});