




Router.route('/', function () {
  this.render('Home');
  this.layout('ApplicationLayout');
  

});

Router.route('/pricing', function () {
  this.render('pricing');
  this.layout('ApplicationLayout');
  

});

Router.route('/contact', function () {
  this.render('contact');
  this.layout('ApplicationLayout');
  

});
Router.route('/families', function () {
  this.render('families');
  this.layout('ApplicationLayout');
  

});
Router.route('/children', function () {
  this.render('families');
  this.layout('ApplicationLayout');
  

});
Router.route('/babies', function () {
  this.render('families');
  this.layout('ApplicationLayout');
  

});

Router.route('/maternity', function () {
  this.render('families');
  this.layout('ApplicationLayout');
  

});
Router.route('/seniors', function () {
  this.render('families');
  this.layout('ApplicationLayout');
});
Router.route('/couples', function () {
  this.render('families');
  this.layout('ApplicationLayout');
});
Router.route('referrals', function () {
  this.render('referrals');
  this.layout('ApplicationLayout');
  

});

Template.ApplicationLayout.onRendered(function(){
	$('.parallax').parallax();
	$('.dropdown-button').dropdown();
	$('.carousel').carousel();
	$('.materialboxed').materialbox();
  	$('#textarea1').trigger('autoresize')
});

Template.Home.onRendered(function(){
	$('.parallax').parallax();
});

Template.families.onRendered(function(){
	$('.carousel').carousel();
	$('.materialboxed').materialbox();
});
Template.contact.onRendered(function(){
	$('#textarea1').trigger('autoresize')
});

