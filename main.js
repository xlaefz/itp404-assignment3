// $.ajax({
// 	urL: 'http://itp-api.herokuapp.com/songs',
// 	type: 'get',
// 	success: function(response){
// 		var templateSource = $('#song-list-template').html();
// 		var template = Handlebars.compile(templateSource);
// 		var html = template(response);
// 		$('#song-list').html(html);
// 	$('#song-list').html(html);
// 	}
// });

// $.ajax({
// 	url: 'http://itp-api.herokuapp.com/songs',
// 	type: 'get'
// 	}).then(function(response){
// 		console.log(1, response);
// 		return response;
// 	}).then(function(response){
// 		console.log(2,response);
// 	});

function getSongs(){
	var promise =  $.ajax({
	url: 'https://www.reddit.com/r/javascript.json',
	type: 'get'
	});
	var promise2 = promise.then(function(response){
		console.log(1);
		return response.data.children;
	});
	return promise2;
}
//get songs returns a promise
//all promises have a .then attribute
getSongs().then(function(response){
	console.log(2, response);
	//console.log(3, response[0].data);
	var templateSource = $('#reddit-list-template').html();
	var template = Handlebars.compile(templateSource);
	var html = template(response);
	$('#subreddit-list').html(html);
}, function(){
	console.log('there was an error');
});




