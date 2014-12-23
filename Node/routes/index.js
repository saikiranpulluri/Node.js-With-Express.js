exports.index = function(request,response){
response.render('default', {
	title: 'Home',
	classname:'home',
	users: ['Sai','Kiran']
	});
}

exports.about = function(request,response){
response.render('default', {
	title: 'About Us',
	classname : 'about'
	});
}
