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
	url: 'http://itp-api.herokuapp.com/songs',
	type: 'get'
	});
	var promise2 = promise.then(function(response){
		console.log(1);
		return response.songs;
	});
	return promise2;
}
//get songs returns a promise
//all promises have a .then attribute
getSongs().then(function(response){
	console.log(2, response);
	var templateSource = $('#song-list-template').html();
	var template = Handlebars.compile(templateSource);
	var html = template({
		favoriteSongs: response
	});
	$('#song-list').html(html);
}, function(){
	console.log('there was an error');
});




